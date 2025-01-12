import { Box, Typography, Grid, Paper, Slider } from "@mui/material";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const CompareAccuracy = () => {
  const barData = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Accuracy",
        data: [80, 60, 40, 70, 50, 60, 80],
        backgroundColor: "#7E57C2",
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  return (
    <Box
      elevation={3}
      sx={{ padding: 2, height: "100%", border: "1px solid #e0e0e0" }}
    >
      <Typography variant="h6" gutterBottom>
        🔗 Compare Accuracy
      </Typography>
      <Slider
        defaultValue={15}
        marks={[
          { value: 10, label: "10MIN" },
          { value: 15, label: "15MIN" },
          { value: 30, label: "30MIN" },
          { value: 45, label: "45MIN" },
        ]}
        step={null}
        min={10}
        max={45}
      />
      <Bar data={barData} options={barOptions} />
    </Box>
  );
};

const TimeTaken = () => {
  const Ruler = ({ max, valueRed, valueGreen }) => (
    <Box sx={{ position: "relative", marginBottom: 2 }}>
      <Box
        sx={{
          height: 10,
          width: `${valueRed}%`,
          backgroundColor: "red",
          position: "absolute",
          top: 20,
          marginTop: "3rem",
        }}
      ></Box>
      <Box
        sx={{
          height: 10,
          width: `${valueGreen}%`,
          backgroundColor: "green",
          position: "absolute",
          top: 20,
          marginTop: "-3rem",
        }}
      ></Box>
      <Box
        sx={{
          height: 50,
          borderLeft: "3px solid #5C6BC0",
          position: "absolute",
          left: `${(valueGreen / max) * 100}%`,
          top: 0,
          marginTop: "-3rem",
          marginLeft: "-3rem",
        }}
      ></Box>
      <Typography variant="body2" sx={{ marginTop: "3rem" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum
      </Typography>
    </Box>
  );

  return (
    <Box
      elevation={3}
      sx={{ padding: 2, border: "1px solid #e0e0e0", height: "100%" }}
    >
      <Typography variant="h6" gutterBottom>
        ⏳ Time Taken
      </Typography>
      <Ruler min={0} max={90} valueRed={60} valueGreen={30} />
      <Ruler min={0} max={4} valueRed={2} valueGreen={1} />
    </Box>
  );
};

const Main = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CompareAccuracy />
        </Grid>

        <Grid item xs={12} md={6}>
          <TimeTaken />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
