import { Box, Typography, Link, Divider, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        borderTop: "1px solid #333",
        padding: "34px 20px",
        backgroundColor: "#171717",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          color: "#888",
          borderColor: "#888",
          width: { xs: "100%", sm: "130px" },
          padding: "8px 16px",
          marginBottom: 2,
          borderRadius: 4,
          height: "45px",
          "&:hover": { borderColor: "#6366f1", color: "#6366f1" },
        }}
      >
        Back
      </Button>

      <Box
        sx={{
          color: "#888",
          borderColor: "#888",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "100%", sm: "130px" },
          height: "45px",
          padding: "8px 16px",
          marginBottom: 2,
          borderRadius: 4,
          "&:hover": {
            cursor: "pointer",
            borderColor: "#6366f1",
            color: "#6366f1",
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#888",
            fontSize: "14px",
          }}
        >
          Next
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#888",
            fontSize: "14px",
          }}
        >
          {">>"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
