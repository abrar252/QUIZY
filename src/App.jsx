import './App.css'
import Start from './components/Start'
import Quiz from './components/Quiz'
import { useState } from 'react'
import Result from './components/Result'

function App() {

  const [quizStage, setQuizStage] = useState('START')
  const [score, setScore] = useState(0)
  

  return (
    <>
      {quizStage === 'START' ? (
        <Start setQuizStage={setQuizStage} /> 
      ) :  quizStage === 'IN_PROGRESS' ? (
          <Quiz setQuizStage={setQuizStage} score={score} setScore={setScore}/> 
      ) : (
        <Result score={score} setScore={setScore} setQuizStage={setQuizStage} />
      )}
    </>
  )
}

export default App
