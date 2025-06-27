import { Box, Typography, Link, Divider, Button } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#171717",
        padding: "24px",
        color: "white",
        borderTop: "1px solid #333",
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          gap: 3,
        }}
      >
        <Box>
          <Button
            variant="outlined"
            sx={{
              color: "#888",
              borderColor: "#888",
              width: "120px",
              padding: "8px 16px",
              marginBottom: 2,
              borderRadius: 4,
              "&:hover": { borderColor: "#6366f1", color: "#6366f1" },
            }}
          >
            Back
          </Button>
        </Box>

        <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
          <Box
            sx={{
              color: "#888",
              borderColor: "#888",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-between",
              width: "120px",
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
      </Box>
    </Box>
  );
};

export default Footer;
