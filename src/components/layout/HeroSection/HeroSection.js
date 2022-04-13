import { HeroBoxOne, HeroBoxTwo } from "components/UI";
import { Box } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: "8vw",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "80%",
        gap: 10,
        boxSizing: "content-box",
      }}
    >
      <HeroBoxOne />
      <HeroBoxTwo />
    </Box>
  );
}

export default HeroSection;
