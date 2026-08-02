import { useState } from 'react'
import ReactMarkdown from "react-markdown"
import axios from 'axios'
import './App.css'

function App() {
  const [ code, setCode ] = useState(`function sum() {\n  return 1 + 1\n}`)
  const [ review, setReview ] = useState(``)

  async function reviewCode() {
    try {
      const response = await axios.post(
        'https://ai-code-reviewer-backend-1aod.onrender.com/ai/get-review',
        { code: code }
      )
      setReview(response.data)
    } catch(error) {
      console.log(error)
      setReview("Something went wrong")
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              style={{
                width: "100%",
                height: "100%",
                background: "#0c0c0c",
                color: "#fff",
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                resize: "none",
                outline: "none"
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">Review</div>
        </div>
        <div className="right">
          <ReactMarkdown>
            {review}
          </ReactMarkdown>
        </div>
      </main>
    </>
  )
}

export default App
 

