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
  const [selectedDiscussion, setSelectedDiscussion] =
    useState<DiscussionTitle | null>(null);
  const [wordCount, setWordCount] = useState(700);

  const handleContentTypeChange = (value: string) => {
    setSelectedContentType(value);
    setSelectedDiscussion(null);
  };

  const handleWordCountChange = (
    _event: Event,
    newValue: number | number[]
  ) => {
    setWordCount(newValue as number);
  };

  return (
    <Box
      sx={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "32px 24px",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "8px",
          color: "#ffffff",
          fontSize: { xs: "28px", md: "32px" },
        }}
      >
        Content type
      </Typography>

      <Typography
        variant="body1"
        sx={{
          marginBottom: "24px",
          color: "#9ca3af",
          fontSize: "16px",
        }}
      >
        Choose a content type that best fits your needs.
      </Typography>

      <Divider
        sx={{
          marginBottom: "32px",
          borderColor: "#374151",
        }}
      />

      <Typography
        variant="h6"
        sx={{
          marginBottom: "20px",
          color: "#ffffff",
          fontWeight: 500,
        }}
      >
        What type of content are you creating?
      </Typography>

      <Box sx={{ marginBottom: "30px" }}>
        {TOPICS.map((topic: TopicOption) => (
          <Button
            key={topic.id}
            onClick={() => handleContentTypeChange(topic.value)}
            variant={
              selectedContentType === topic.value ? "contained" : "outlined"
            }
            sx={{
              borderRadius: "25px",
              padding: "10px 20px",
              margin: "6px 8px 6px 0",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "none",
              minWidth: "auto",
              backgroundColor:
                selectedContentType === topic.value ? "#6366f1" : "transparent",
              color:
                selectedContentType === topic.value ? "#ffffff" : "#9ca3af",
              border:
                selectedContentType === topic.value
                  ? "2px solid #6366f1"
                  : "1px solid #374151",
              "&:hover": {
                backgroundColor:
                  selectedContentType === topic.value ? "#5855eb" : "#1f2937",
                borderColor:
                  selectedContentType === topic.value ? "#5855eb" : "#4b5563",
              },
              transition: "all 0.2s ease-in-out",
            }}
          >
            {topic.label}
          </Button>
        ))}
      </Box>

      <Box sx={{ marginBottom: "30px" }}>
        {selectedContentType && (
          <Typography
            variant="h6"
            sx={{
              marginBottom: "20px",
              color: "#ffffff",
              fontWeight: 500,
            }}
          >
            Which type of{" "}
            <span style={{ fontWeight: "bold", color: "#6366f1" }}>
              {
                TOPICS.find((topic) => topic.value === selectedContentType)
                  ?.label
              }
            </span>{" "}
            content do you want to create?
          </Typography>
        )}

        <Box
          sx={{
            marginBottom: "30px",
          }}
        >
          <Autocomplete
            disablePortal
            value={selectedDiscussion}
            onChange={(_event, newValue) => setSelectedDiscussion(newValue)}
            options={DISCUSSION_TITLES[selectedContentType] || []}
            getOptionLabel={(option: DiscussionTitle) => option.title}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#1f2937",
                borderRadius: "12px",
              },
              "& .MuiInputLabel-root": {
                color: "white",
                "&.Mui-focused": {
                  color: "#6366f1",
                },
              },
              "& .MuiAutocomplete-input": {
                color: "#ffffff",
                backgroundColor: "#1f2937",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select"
                placeholder="Choose a topic..."
              />
            )}
          />
        </Box>
      </Box>
      <Box sx={{ marginBottom: "30px" }}>
        <Typography
          variant="h6"
          sx={{
            marginBottom: "20px",
            color: "#ffffff",
            fontWeight: 500,
          }}
        >
          Set the number of words for output text.
        </Typography>

        <Box sx={{ marginBottom: "10px" }}>
          <Slider
            value={wordCount}
            onChange={handleWordCountChange}
            min={100}
            max={1000}
            step={50}
            valueLabelDisplay="on"
            sx={{
              color: "#6366f1",
              height: 8,
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9ca3af",
            fontSize: "14px",
          }}
        >
          <span>100</span>
          <span>1000</span>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
