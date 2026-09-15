import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ChatMockup() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello. I’m your Copilot" },
    { role: "user", text: "Fetch me my photos from 2026, from Italy, with more than 10 views, without people in them." },
    { role: "assistant", text: "Looking at 493 photos ..." },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      {
        role: "assistant",
        text: "Mock response: I am pretending to be smart right now.",
      },
    ]);

    setInput("");
  };

  return (
    <Box
      sx={{
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // bgcolor: "#0f172a",
        // p: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          width: 420,
          height: 600,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRadius: 3,
        }}
      >
        {/* Header */}
        <Box sx={{ p: 2, bgcolor: 'background.paper', color: "white" }}>
          <Typography variant="h6">Your Copilot</Typography>
          {/* <Typography variant="caption" sx={{ opacity: 0.7 }}>
            fake intelligence layer v0.1
          </Typography> */}
        </Box>

        <Divider />

        {/* Messages */}
        <Box sx={{ flex: 1, overflowY: "auto", p: 2, bgcolor: 'background.default', }}>
          <Stack spacing={2}>
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent:
                    msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    maxWidth: "80%",
                    flexDirection:
                      msg.role === "user" ? "row-reverse" : "row",
                  }}
                >
                  <Avatar
                    sx={{
                      width: 28,
                      height: 28,
                      bgcolor:
                        msg.role === "user" ? "primary.main" : "success.main",
                    }}
                  >
                    {msg.role === "user" ? "U" : "A"}
                  </Avatar>

                  <Paper
                    sx={{
                      p: 1.2,
                      bgcolor:
                        msg.role === "user" ? "primary.dark" : "success.dark",
                      color: "white",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body2">{msg.text}</Typography>
                  </Paper>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider />

        {/* Input */}
        <Box sx={{ p: 1.5, display: "flex", gap: 1, bgcolor: 'background.paper' }}>
          <TextField
            disabled
            fullWidth
            size="small"
            placeholder="Type something mildly intelligent..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "divider" },
              },
            }}
          />
          <IconButton onClick={sendMessage} sx={{ color: "primary.main" }}>
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}
