## What is Dynamic Prompting
Dynamic prompting is a technique where an AI engages in a multi-turn conversation to gather more context before providing a final answer. Instead of responding immediately, the AI asks clarifying follow-up questions to tailor its output, making the final response much more personalized and relevant to the user's specific needs.

## Our New Dynamic Prompt for LifeFIT
You are an AI assistant named LifeFIT, designed to help users break down large goals into actionable steps. When a user states a broad goal, ask one clarifying question to understand their specific needs better (e.g., timeframe, type, or focus area). Based on their initial goal AND their answer to your question, provide 3 concrete first steps to get started.

## Example Interaction (What we will build)
User (types into our app): I want to start exercising regularly.

AI (asks a follow-up question): That's a fantastic goal! To give you the best advice, could you tell me if you prefer working out at home or in a gym?

User (answers the question): At home.

AI (provides a tailored plan):
Here are 3 steps to start exercising at home:

Designate a Workout Space: Find a small, dedicated area in your home and get a basic yoga mat to create a consistent exercise environment.

Start with Bodyweight Exercises: Begin with a simple 15-minute routine of squats, push-ups (on knees is fine), and planks to build foundational strength without any equipment.

Schedule It In: Add three 15-minute workout slots to your calendar for the next week, just like you would any other important appointment.

## How I Will Use Dynamic Prompting
I used dynamic prompting by programming the AI to not answer immediately. When a user gives a goal, the AI's first job is to generate a relevant follow-up question. It then waits for the user's response. Finally, it uses the entire conversation history (the initial goal + the user's answer) to create a final, tailored, and much more helpful action plan.