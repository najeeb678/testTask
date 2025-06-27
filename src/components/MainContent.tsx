"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  Autocomplete,
  TextField,
  Slider,
} from "@mui/material";
import {
  TOPICS,
  TopicOption,
  DISCUSSION_TITLES,
  DiscussionTitle,
} from "../constants";

const MainContent = () => {
  const [selectedContentType, setSelectedContentType] = useState("fun");
  console.log("selectedContentType111", selectedContentType);

  const handleContentTypeChange = (value: string) => {
    setSelectedContentType(value);
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px 10px",
        color: "white",
        maxHeight: "100vh",
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "12px",
          color: "#ffffff",
        }}
      >
        Content type
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Choose a content type that best fits your needs.
      </Typography>
      <Divider sx={{ marginBottom: "20px" }} />
      <Typography
        variant="h6"
        sx={{
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        What type of content are you creating?
      </Typography>

      <Box sx={{ marginBottom: "40px" }}>
        {TOPICS.map((topic: TopicOption) => (
          <Button
            key={topic.id}
            onClick={() => handleContentTypeChange(topic.value)}
            variant={
              selectedContentType === topic.value ? "contained" : "outlined"
            }
            sx={{
              borderRadius: "20px",
              padding: "8px 16px",
              margin: "4px",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              backgroundColor:
                selectedContentType === topic.value ? "#6366f1" : "transparent",
              color:
                selectedContentType === topic.value ? "#ffffff" : "#9ca3af",
              border:
                selectedContentType === topic.value
                  ? "none"
                  : "1px solid #374151",
              "&:hover": {
                backgroundColor:
                  selectedContentType === topic.value ? "#5855eb" : "#374151",
              },
            }}
          >
            {topic.label}
          </Button>
        ))}
      </Box>

      <Box>
        {selectedContentType && (
          <Typography
            variant="body1"
            sx={{
              marginTop: "20px",
              color: "#ffffff",
            }}
          >
            Which type of {""}
            <span style={{ fontWeight: "bold" }}>
              {
                TOPICS.find((topic) => topic.value === selectedContentType)
                  ?.label
              }
            </span>{" "}
            content do you want to create?
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Autocomplete
          disablePortal
          options={DISCUSSION_TITLES[selectedContentType] || []}
          getOptionLabel={(option: DiscussionTitle) => option.title}
          sx={{ width: { xs: "100%", sm: "400px", md: "500px" } }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select"
              sx={{ backgroundColor: "#171717" }}
            />
          )}
        />
      </Box>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
};

export default MainContent;
