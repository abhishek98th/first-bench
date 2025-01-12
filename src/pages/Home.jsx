import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CompareAccuracy from "../components/CompareAccuracy";
import Section from "../components/Section";
import Main from "../components/Main";
import { Box } from "@mui/material";
const Home = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CompareAccuracy />
          <Section />
          <Main />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
