import { Box, Typography } from "@mui/material";
import { MembershipCard } from "components/UI";

function MemberShipSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: 5,
        padding: 5,
        marginTop: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignSelf: "center",
          marginBottom: 4,
        }}
      >
        <Typography variant="caption" align="center" sx={{ color: "gray" }}>
          PRICING PLANS
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          The Righ Plan For Your Business
        </Typography>
        <Typography variant="body2 paragraph" align="center">
          Choose the perfect plan for your needs. Always flexible to grow{" "}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 5, alignSelf: "center" }}>
        <MembershipCard membership="standard" name="standard" price={69} />
        <MembershipCard membership="plus" name="plus" price={129} />
        <MembershipCard membership="extended" name="extended" price={599} />
      </Box>
    </Box>
  );
}

export default MemberShipSection;
