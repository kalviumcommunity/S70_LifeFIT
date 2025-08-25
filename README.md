**LifeFIT**

LifeFIT is an AI-powered life assistant. The whole idea is to make an app that's more than just a to-do list; it's meant to be an intelligent partner that helps you organize your life, stay focused, and generally improve your well-being by understanding what you're trying to do and giving you smart suggestions.

**Features**
    1.It handles your tasks in a smart way. You can add and track your daily to-dos, but you can also ask the AI to help break down a big goal into smaller, more manageable tasks. 
    2.It's focused on long-term goals. You can define your big life goals, like learning a new skill or training for a race, and the app will help you track your progress and suggest what to do next.  
    3.There's a wellness journal. It's a private place to write down your thoughts, and the AI can look for patterns over time to give you some personalized wellness tips. 
    4.The core of the app is a context-aware AI assistant. You can chat with it and ask for advice or motivation, and because it has access to your tasks and goals, it can give you genuinely helpful responses.

**Tech Stack**
  # Frontend: React + Vite
  # Backend: Node.js + Express.js
  # DB: ChromaDB(vector database) + PostgreSQL There will be two databases. 
  # AI : Google Gemini API
  # JSON Web Tokens (JWT)

The architecture is pretty straightforward. A user will interact with the React application in their browser. The React app will talk to the Node.js backend server through a REST API. This backend server does all the heavy lifting: it manages the logic, saves and retrieves data from the PostgreSQL database, and also uses ChromaDB to find similar tasks or journal entries. When it needs to do something smart, like generate text or create an embedding, it makes a call out to the Google Gemini API.


# Usage

Install requirements: Git, Node.js, npm, PostgreSQL.

Clone the repo: git clone https://github.com/kalviumcommunity/LifeFIT.git

# Backend setup:

Node server.js

Create a .env file (DB connection, JWT secret, Gemini API key)

# Frontend setup:

Start dev server with npm run dev