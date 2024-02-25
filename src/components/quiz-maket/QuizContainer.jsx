import React from "react";
import QuizAnswer from "./QuizAnswer";
import FinalPage from "./FinalPage";
import Button from "./Button";
import QuizContent from "./QuizContent.jsx";

const QuizContainer = ({
  quizData,
  currentQuestionIndex,
  selectedAnswer,
  pressed,
  totalScore,
  onChange,
  handleNextClick,
}) => (
  <div className="quiz-container">
    <h2>Interesting Questions</h2>

    {quizData.length > 0 && currentQuestionIndex < quizData.length && (
      <QuizContent
        quizData={quizData}
        currentQuestionIndex={currentQuestionIndex}
      >
        {quizData[currentQuestionIndex].answers.map((answer) => (
          <QuizAnswer
            key={answer.id}
            answer={answer}
            name="question"
            selectedAnswer={selectedAnswer}
            pressed={pressed}
            onChange={() => onChange(answer.id)}
          />
        ))}
        {currentQuestionIndex < quizData.length && (
          <Button onClick={handleNextClick} disabled={!selectedAnswer} />
        )}
      </QuizContent>
    )}

    {currentQuestionIndex === quizData.length && (
      <FinalPage totalScore={totalScore} />
    )}
  </div>
);

export default QuizContainer;
