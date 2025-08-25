// backend/index.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/generate', async (req, res) => {
    try {
        const { userInput } = req.body;
        if (!userInput) {
            return res.status(400).json({ error: "User input is required." });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `You are a helpful and encouraging productivity assistant called LifeFIT. When a user describes a problem or a feeling, immediately suggest 3 actionable techniques or tips to help them. Just provide each tip as a title and a short, one-sentence description. Do not add any conversational fluff before or after the list.

        User's problem: "${userInput}"`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ suggestions: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate content" });
    }
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});