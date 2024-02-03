import json
from typing import Optional


class TicketRepository:
    def __init__(self, filepath: str):
        self.filepath = filepath
        with open(self.filepath) as json_file:
            self.data = json.load(json_file)

    def get_tickets(self, limit: Optional[int] = None) -> list[dict]:
        return self.data["tickets"][:limit]
    
    def close_ticket(self, ticket_id:str):
        for obj in self.data['tickets']:
            if obj['id'] == ticket_id:
                obj['status'] = 'closed'
                self.save_to_file()
                return obj
            
    def save_to_file(self):
        with open(self.filepath, 'w') as json_file:
            json.dump(self.data, json_file, indent=2)

    def remove_ticket(self, ticket_id:str):
        for obj in self.data['tickets']:
            if obj['id'] == ticket_id:
                self.data['tickets'].remove(obj)
                self.save_to_file()
                return obj



