const { GoogleGenerATIVEAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//Dynamic prompt 
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

//zero shot prompt

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

//Chain of Thought Prompt
async function handleCoTRequest(userInput) {
  try {
    const prompt = `You are an AI assistant named LifeFIT. When a user describes a productivity problem, you must follow these steps:
    1. First, interpret the user's problem by restating it as an underlying challenge in a single sentence. Start with "Interpreting the Problem:".
    2. Next, identify one or two key principles or strategies that directly address this challenge. Start with "Key Principles:".
    3. Finally, based on those principles, recommend 3 specific, actionable first steps the user can take. Start with "Here are 3 actionable steps:".

    User's problem: "${userInput}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in handleCoTRequest:", error);
    throw new Error("Failed to generate CoT content from AI service.");
  }
}

//Function Calling

async function handleFunctionCallRequest(userInput) {
  const functionDeclaration = {
    name: "create_goal_with_tasks",
    description: "Creates a main goal and a list of sub-tasks to accomplish it.",
    parameters: {
      type: "OBJECT",
      properties: {
        goal_title: {
          type: "STRING",
          description: "The main title of the user's goal.",
        },
        tasks: {
          type: "ARRAY",
          description: "A list of 3-5 essential sub-tasks to get started on the goal.",
          items: {
            type: "OBJECT",
            properties: {
              task_title: {
                type: "STRING",
                description: "The title of a single sub-task.",
              },
            },
            required: ["task_title"],
          },
        },
      },
      required: ["goal_title", "tasks"],
    },
  };

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    tools: [{ functionDeclarations: [functionDeclaration] }],
  });

  const prompt = `Please break down the following user goal into a main goal and several actionable sub-tasks: "${userInput}"`;

  const result = await model.generateContent(prompt);
  const call = result.response.functionCalls()?.[0];

  if (!call) {
    throw new Error("The model did not return a function call. It may have responded with text instead.");
  }

  return {
    function: call.name,
    arguments: call.args,
  };
}

module.exports = { 
  handleChatRequest, handleZeroShotRequest, handleCoTRequest, handleFunctionCallRequest };