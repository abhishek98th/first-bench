import { Box, Typography, Grid, Chip,Divider } from "@mui/material";
const data = [
  { label: "Based on Facts", value: 25 },
  { label: "Based on Analysis", value: 32 },
  { label: "Based on Elimination", value: 19 },
  { label: "Based on Guess", value: 24 },
];
const subjects = [
  "Geography",
  "Politics",
  "Current Affairs",
  "General Studies",
  "Mathematics",
  "Social Studies",
  "English Literature",
  "Indian History",
  "Economics",
];

const suggestions = [
  { label: "Q. 1-12", time: "40sec", level: "easy" },
  { label: "Q. 12-32", time: "1.5min", level: "medium" },
  { label: "Q. 32-40", time: "3min", level: "hard" },
];
const Section = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {/* Improvements Section */}
        <Grid item xs={12} md={3}>
          <Box
            elevation={3}
            sx={{
              padding: 2,
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
               height:'100%'
            }}
          >
            <Typography variant="h6" gutterBottom>
              📈 Improvements
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Subject Understanding
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {subjects?.map((subject, index) => (
                <Chip
                  key={index}
                  label={subject}
                  size="small"
                style={{fontSize:"12px"}}
                  color={
                    index === 3 || index === 6
                      ? "error"
                      : index === 1 || index === 7
                      ? "warning"
                      : "success"
                  }
                  variant={
                    index === 3 || index === 6
                      ? "filled"
                      : index === 1 || index === 7
                      ? "filled"
                      : "default"
                  }
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Response Time Section */}
        <Grid item xs={12} md={3}>
          <Box
            elevation={3}
            sx={{
              padding: 2,
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              height:'100%'
            }}
          >
            <Typography variant="h6" gutterBottom>
              ⏱ Response Time
            </Typography>
            -˛
            <span
              style={{
                fontSize: "12px",
                color: "white",
                backgroundColor: "#6065be",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              Std Time - 2min
            </span>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                backgroundColor: "#f7f6fb",
                justifyContent: "center",
                marginTop: 2,
                border: "dashed 2px #e0e0e0",
              }}
            >
              <Typography variant="h6">60%</Typography>
              <Typography variant="body2">
                Ans took{" "}
                <span
                  style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}
                >
                  ↑
                </span>{" "}
                2min
              </Typography>
            </Box>
<hr style={{marginTop:'2rem',opacity:'0.3'}}/>
            <Box
              sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
            >
              <Typography
                variant="body2"
                color="black"
                textAlign="center"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                You are{" "}
                <Typography variant="body2" color="error">
                  {" "}
                  slow!
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Approach Data Section */}
        <Grid item xs={12} md={3}>
          <Box
            elevation={3}
            sx={{
              padding: 2,
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              fontSize: "8px",
     
            }}
          >
            <Typography variant="h6" gutterBottom>
              📊 Approach Data
            </Typography>
            {data?.map((item, index) => {
              const labelParts = item.label.split(" ");
              const lastPart = labelParts.pop();
              const firstPart = labelParts.join(" ");
              return (
                <Box
                  key={index}
                  sx={{
                    marginBottom: 1,
                    border: "2px solid rgb(220, 222, 246)",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    padding: "5px",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      backgroundColor: "#6065be",
                      color: "white",
                      padding: "5px",
                      borderRadius: "2px",
                      fontSize: "12px",
                      opacity: 0.6,
                    }}
                  >
                    {item.value}
                    <span style={{ fontSize: "8px" }}>%</span>
                  </Typography>
                  <Typography variant="body2">
                    {firstPart}{" "}
                    <span style={{ color: "#6065be" }}>{lastPart}</span>
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Grid>

        {/* Suggestions Section */}
        <Grid item xs={12} md={3}>
          <Box
            elevation={3}
            sx={{
              padding: 2,
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              height:'100%'
            }}
          >
            <Typography variant="h6" gutterBottom>
              ✨ Suggestions
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              {suggestions?.map((suggestion, index) => (
                <Box key={index} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      backgroundColor: "#6065be",
                      color: "white",
                      padding: "2px",
                      borderRadius: "2px",
                      fontSize: "8px",
                    }}
                  >
                    {suggestion.label}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#f7f6fb",
                      color: "black",
                      padding: "7px",
                      borderRadius: "2px",
                      border: "dashed 1px #e0e0e0",
                    }}
                  >
                    {suggestion.time}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color:
                        suggestion.level === "easy"
                          ? "green"
                          : suggestion.level === "medium"
                          ? "orange"
                          : "red",
                      marginTop: "10px",
                    }}
                  >
                    {suggestion.level}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section;
