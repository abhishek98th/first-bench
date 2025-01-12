import { Box, Typography, Avatar, Button, Divider } from "@mui/material";
import { Description } from "@mui/icons-material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "400px",
        padding: "16px",
        backgroundColor: "#f7f6fb",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <img
          src="./result.svg"
          alt="Result"
          style={{ width: "120px", marginBottom: "12px" }}
        />
        <Typography variant="h5" fontWeight="bold" color="#6065be">
          Your Result!
        </Typography>
        <span style={{color:'gray'}}>All your insights & details in one place</span>
      </Box>

      <Box
        elevation={3}
        sx={{
          padding: "16px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#f7f6fb",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#a8abe7",
              height: "40px",
              width: "40px",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <AssignmentTurnedInIcon />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="body1"
              color="white"
              backgroundColor="#6065be"
              borderRadius="12px"
              padding="4px 8px"
              fontSize="10px"
            >
              You Have Passed
            </Typography>
            <Typography variant="h5" fontSize="semibold">
              136{" "}
              <span style={{ fontSize: "17px", fontWeight: "light" }}>
                / 240
              </span>
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="caption"
              color="white"
              backgroundColor="#049794"
              borderRadius="12px"
              padding="4px 8px"
            >
              76%
            </Typography>
            <Typography variant="caption" color="#049794">
              Accuracy
            </Typography>
          </Box>
        </Box>
        <hr />
        <Box sx={{ backgroundColor: "#f7f6fb" }}>
          <Box>
            <Box sx={{ display: "flex" }}>
              <Avatar
                src="https://static.vecteezy.com/system/resources/thumbnails/024/354/252/small/businessman-isolated-illustration-ai-generative-free-photo.jpg"
                alt="Top Scorer"
                sx={{ width: 40, height: 40 }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 2,
                  gap: "1px",
                }}
              >
                <Typography variant="body1" color="#6065be" fontSize="10px">
                  Top Score
                </Typography>
                <Typography variant="h5" fontWeight="semibold">
                  230 <span style={{ fontSize: "15px" }}>/ 240</span>
                </Typography>
              </Box>
            </Box>
            <hr />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "1rem",
            }}
          >
            <Typography variant="caption">
              By <strong>Parth Akotkar</strong>
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                backgroundColor: "#049794",
                padding: "0 10px 0 10px",
                borderRadius: "4px",
                color: "white",
              }}
            >
              92% Accuracy
            </Typography>
          </Box>
        </Box>
        {/* Practice  Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Improve your Marks</span>
          <Typography variant="caption" color="text.secondary">
            Improve your score by practicing more.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "12px",
              borderRadius: "5px",
              paddingX: "15px",
              color: "white",
              backgroundColor: "#6065be",
            }}
          >
            Practice More
          </Button>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Revisit  Section */}
      <Box
        elevation={3}
        sx={{
          padding: "16px",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          border:'1px solid #e0e0e0'
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: "8px" }}>
          Revisit Paper
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Challenge your friends by simply sharing a link to this test
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", margin: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Description />}
            sx={{
              marginTop: "16px",
              borderRadius: "8px",
              backgroundColor: "#6065be",
              width: "100%",
            }}
          >
            Visit
          </Button>
        </Box>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ marginTop: "12px", display: "flex", gap: "5px" }}
        >
          <IntegrationInstructionsIcon
            sx={{ fontSize: "12px", marginTop: "4px" }}
          />{" "}
          <span>
            Instructions for how to upload your handwritten material is given.
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
