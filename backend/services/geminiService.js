const { GoogleGenerATIVEAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function handleChatRequest(history, message) {
  try {
    const chat = model.startChat({
      history: history,
      generationConfig: {
        maxOutputTokens: 200,
      },
    });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in handleChatRequest:", error);
    throw new Error("Failed to generate chat content from AI service.");
  }
}

async function handleZeroShotRequest(userInput) {
  try {
    const prompt = `You are a helpful and encouraging productivity assistant called LifeFIT. When a user describes a problem or a feeling, immediately suggest 3 actionable techniques or tips to help them. Just provide each tip as a title and a short, one-sentence description. Do not add any conversational fluff before or after the list.

    User's problem: "${userInput}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in handleZeroShotRequest:", error);
    throw new Error("Failed to generate zero-shot content from AI service.");
  }
}

module.exports = { 
  handleChatRequest, 
  handleZeroShotRequest 
};