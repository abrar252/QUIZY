import Option from "./Option";
import { QUESTIONS } from "../data/question";
import { useState } from "react";

const Quiz = ({ setQuizStage, score, setScore }) => {
  const [currentQuestion, setQurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const onNextClick = () => {
    if(selectedOption === QUESTIONS[currentQuestion].Answer){
        setScore(score + 5)
        console.log(score)
    }
    if (currentQuestion === QUESTIONS.length - 1) {
      setQuizStage("RESULT");
    }
    setQurrentQuestion(currentQuestion + 1);
    setSelectedOption(null)
  };

  

  return (
    <div className="quiz-wrapper">
      <div className="header">
        <p>
          {currentQuestion + 1} of {QUESTIONS.length} questions
        </p>
      </div>
      <div className="quiz">
        <p className="question">{QUESTIONS[currentQuestion].Question}</p>
        {QUESTIONS[currentQuestion].Options.map((option) => (
          <Option
            key={option}
            data={option}
            answer={QUESTIONS[currentQuestion].Answer}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </div>
      <button id="next" onClick={onNextClick}>
        Next
      </button>
    </div>
  );
};

export default Quiz;
