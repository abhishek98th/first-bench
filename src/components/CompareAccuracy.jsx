import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Checkbox,
} from "@mui/material";

const CompareAccuracy = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "stretch",
          "@media (max-width: 600px)": {
            flexDirection: "column",
          },
        }}
      >
        {[1, 2, 3].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                borderRadius: "10px",
                boxShadow: "none",
                border: "1px solid #e0e0e0",
              }}
            >
              <CardContent sx={{ height: "30vh" }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mb={1}
                >
                  <Checkbox />
                  <Typography variant="subtitle1" sx={{ color: "#9e9e9e" }}>
                    Compare Accuracy
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompareAccuracy;
