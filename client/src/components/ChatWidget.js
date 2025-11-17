import { useState } from "react";
import {
  Fab,
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Slide
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { API_URL } from "../config";


export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

  const toggle = () => setOpen(!open);

  const ask = async () => {
    const res = await fetch(`${API_URL}/api/ask`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    const data = await res.json();

    setMessages(prev => [
      ...prev,
      { sender: "You", text: question },
      { sender: "HR", text: data.answer }
    ]);

    setQuestion("");
  };

  return (
    <>
      {/* Floating Button */}
      <Fab
        color="primary"
        onClick={toggle}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 2000
        }}
      >
        <ChatIcon />
      </Fab>

      {/* Sliding Chat Window */}
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Card
          sx={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 320,
            height: 420,
            display: "flex",
            flexDirection: "column",
            zIndex: 2000,
            boxShadow: 6
          }}
        >
          <CardContent sx={{ flexShrink: 0 }}>
            <Typography variant="h6">Ask HR</Typography>
            <Typography variant="body2" color="text.secondary">
              Ask a question about PTO, benefits, payroll…
            </Typography>
          </CardContent>

          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              px: 2
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  mb: 1.5,
                  textAlign: msg.sender === "You" ? "right" : "left",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    display: "inline-block",
                    background: msg.sender === "You" ? "#e3f2fd" : "#f5f5f5",
                    px: 1.5,
                    py: 1,
                    borderRadius: 2
                  }}
                >
                  {msg.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ p: 2 }}>
            <TextField
              fullWidth
              size="small"
              label="Ask a question…"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              sx={{ mb: 1 }}
            />
            <Button variant="contained" fullWidth onClick={ask}>
              Send
            </Button>
          </Box>
        </Card>
      </Slide>
    </>
  );
}
