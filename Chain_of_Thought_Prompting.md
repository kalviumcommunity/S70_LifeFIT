## What is Chain of Thought Prompting?
Chain of thought prompting is a technique where the AI is instructed to break down its reasoning into a series of logical steps before providing the final answer. This makes the AI’s thought process transparent, helps it reason more effectively, and results in more accurate and well-structured responses.

## Our New Chain of Thought Prompt for LifeFIT
You are an AI assistant named LifeFIT. When a user describes a productivity problem, you must follow these steps:

First, interpret the user's problem by restating it as an underlying challenge.

Next, identify one or two key principles or strategies that directly address this challenge.

Finally, based on those principles, recommend 3 specific, actionable first steps the user can take.

## Example Interaction (What we will build)
User (types into our app): I always procrastinate on big projects.

AI (responds in our app):

Interpreting the Problem: It sounds like the main challenge is that large projects feel overwhelming, which makes it hard to start.

Key Principles: The best strategies to overcome this are to make the project feel smaller and to create a clear starting point.

Here are 3 actionable steps:

The 5-Minute Rule: Commit to working on the project for just five minutes. Often, starting is the hardest part, and this makes it easy.

Break It Down: Spend 15 minutes writing down every single small task you can think of for the project. This turns a giant task into a simple checklist.

Pick One Small Task: Choose the absolute easiest task from your new list and complete it. This will build momentum and give you a quick win.

## How I Used Chain of Thought Prompting
I used Chain of Thought prompting by explicitly instructing the AI in the prompt to follow a three-step reasoning process. You are forcing it to show its work: first, it interprets the problem, then it identifies a high-level strategy, and only then does it provide specific, actionable advice that logically follows from its reasoning.