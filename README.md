# 🤖 AI Code Reviewer
An AI-powered code review application that analyzes source code using Google Gemini and provides actionable feedback to improve code quality, readability, and correctness.

## 🚀 Live Demo
[Try AI Code Reviewer](https://ai-code-reviewer-eta-taupe.vercel.app/)

## 📌 Overview
AI Code Reviewer is a full-stack web application that helps developers analyze their source code using generative AI.
Users can submit their code through the web interface, and the application sends the code to the backend for AI-powered analysis. Google Gemini processes the code and generates feedback, explanations, and suggestions for improvement.

## ✨ Features
-  AI-powered code review using Google Gemini
-  Submit source code for analysis
-  Identify potential code issues
-  Receive AI-generated suggestions and explanations
-  Fast code analysis and feedback
-  Responsive user interface
-  Secure environment-based API key configuration

## 🛠️ Tech Stack
### Frontend
- React.js
- JavaScript
- HTML
- CSS

### Backend
- Node.js
- Express.js

### AI Integration
- Google Gemini API

### Tools & Services
- Axios
- dotenv
- Git
- GitHub
- Vercel

  ## 🏗️ Application Architecture

```text
┌───────────────┐
│     User      │
└───────┬───────┘
        │
        ▼
┌───────────────────┐
│  React Frontend   │
└────────┬──────────┘
         │
         │ API Request
         ▼
┌───────────────────┐
│ Node.js / Express │
│      Backend      │
└────────┬──────────┘
         │
         │ Gemini API
         ▼
┌───────────────────┐
│   Google Gemini   │
│        AI         │
└────────┬──────────┘
         │
         │ AI Response
         ▼
┌───────────────────┐
│  React Frontend   │
└───────────────────┘
```

## 📁 Project Structure

```text
AI-Code-Reviewer/
│
├── BackEnd/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   │
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   │
│   │   ├── services/
│   │   │   └── ai.services.js
│   │   │
│   │   └── app.js
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── Frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── temp.js
```

## 🔄 How It Works

1. The user enters or submits source code through the React frontend.
2. The frontend sends the code to the Node.js and Express backend.
3. The backend prepares the code for AI analysis.
4. The backend sends the request to the Google Gemini API.
5. Gemini analyzes the submitted code and generates feedback.
6. The backend returns the AI response to the frontend.
7. The generated review is displayed to the user.
