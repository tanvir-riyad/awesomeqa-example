import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import { MdLibraryBooks, MdLightbulbOutline } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const IndexPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 15, mb: 15 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "50%",
                  height: "7rem",
                  fontSize: "1rem",
                  backgroundColor: "#1C1C1F",
                  color: "white",
                }}
                href="/"
              >
                <div>
                  <div
                    style={{
                      backgroundColor: "rgba(93, 80, 195, 0.3)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px",
                      borderRadius: "8px",
                      width: "30px",
                      height: "30px",
                      marginBottom: "10px",
                    }}
                  >
                    <MdLibraryBooks></MdLibraryBooks>
                  </div>
                  <Typography variant="body2">Knowledge Base</Typography>
                </div>
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "50%",
                  height: "7rem",
                  fontSize: "1rem",
                  backgroundColor: "#1C1C1F",
                  color: "white",
                }}
                href="/"
              >
                <div>
                  <div
                    style={{
                      backgroundColor: "rgba(93, 80, 195, 0.3)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px",
                      borderRadius: "8px",
                      width: "30px",
                      height: "30px",
                      marginBottom: "10px",
                    }}
                  >
                    <FaHeadset></FaHeadset>
                  </div>
                  <Typography variant="body2">Tickets</Typography>
                </div>
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: "50%",
                  height: "7rem",
                  fontSize: "1rem",
                  backgroundColor: "#1C1C1F",
                  color: "white",
                }}
                href="/"
              >
                <div>
                  <div
                    style={{
                      backgroundColor: "rgba(93, 80, 195, 0.3)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "2px",
                      borderRadius: "8px",
                      width: "30px",
                      height: "30px",
                      marginBottom: "10px",
                    }}
                  >
                    <MdLightbulbOutline></MdLightbulbOutline>
                  </div>
                  <Typography variant="body2">FAQ Insights</Typography>
                </div>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default IndexPage;
