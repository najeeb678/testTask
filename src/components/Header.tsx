import { Box, Typography, IconButton, Avatar, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#171717",
        padding: "16px 24px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton
          sx={{
            color: "white",
            padding: "8px",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontSize: "18px",
                color: "white",
              }}
            >
              Media management
            </Typography>
            <EditIcon sx={{ fontSize: 16, color: "#888" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#888",
              fontSize: "14px",
              marginTop: "-2px",
            }}
          >
            Draft campaign
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{ display: { xs: "none", md: "block" }, textAlign: "right" }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              color: "white",
            }}
          >
            Jane Cooper
          </Typography>
          <Link
            href="#"
            sx={{
              color: "#6366f1",
              fontSize: "12px",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Change profile
          </Link>
        </Box>

        <Avatar
          src="/api/placeholder/32/32"
          alt="Jane Cooper"
          sx={{
            width: 32,
            height: 32,
            border: "1px solid #333",
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
