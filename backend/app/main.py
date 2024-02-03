from repositories.ticket_repository import TicketRepository
import uvicorn
from fastapi import Depends, FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TICKET_FILEPATH = "./data/awesome_tickets.json"
ticket_repository = TicketRepository(filepath=TICKET_FILEPATH)


@app.get("/tickets")
async def get_tickets(
    limit: int = 20,
    ticket_repository: TicketRepository = Depends(lambda: ticket_repository),
):
    tickets = ticket_repository.get_tickets(limit)
    # formatted_ticket = [
    #      {
    #         "msg_id": ticket["msg_id"],
    #         "status": ticket["status"],
    #         "resolved_by": ticket["resolved_by"],
    #         "timestamp": ticket["timestamp"],
    #         "context_messages": ticket["context_messages"]
    #     }
    #     for ticket in tickets
    # ]
    return JSONResponse(tickets, status_code=200)

@app.put("/update_ticket_status/{id}")
async def close_ticket(id:str,
        ticket_repository: TicketRepository = Depends(lambda: ticket_repository)):
    
    closed_ticket = ticket_repository.close_ticket(id)
    return JSONResponse(closed_ticket, status_code=201)

@app.put("/remove_ticket/{id}")
async def remove_ticket(id:str,
            ticket_repository: TicketRepository = Depends(lambda: ticket_repository)):
    
        removed_ticket = ticket_repository.remove_ticket(id)
        return JSONResponse(removed_ticket, status_code=201)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=5001, reload=True)
