// backend/index.js - CORRECTED

const express = require('express');
const cors = require('cors');
// We are IMPORTING our functions from the other file
const { 
  handleChatRequest, 
  handleZeroShotRequest 
} = require('./services/geminiService');

const app = express();
app.use(cors());
app.use(express.json());

// Route for Dynamic Prompting
app.post('/api/chat', async (req, res) => {
    try {
        const { history, message } = req.body;
        if (!history || !message) {
            return res.status(400).json({ error: "History and message are required." });
        }
        const aiResponse = await handleChatRequest(history, message);
        res.json({ response: aiResponse });
    } catch (error) {
        res.status(500).json({ error: "Failed to process chat request." });
    }
});

// Route for Zero-Shot Prompting
app.post('/api/generate', async (req, res) => {
    try {
        const { userInput } = req.body;
        if (!userInput) {
            return res.status(400).json({ error: "User input is required." });
        }
        const aiResponse = await handleZeroShotRequest(userInput);
        res.json({ suggestions: aiResponse });
    } catch (error) {
        res.status(500).json({ error: "Failed to process generate request." });
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});