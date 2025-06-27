import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
        backgroundColor: "#171717",
        padding: "0px 20px 60px 20px",
   
      }}
    >
      <Header />
      <MainContent />
      <Footer />
    </Box>
  );
}
