import React from "react";

const QuizContent = ({ quizData, currentQuestionIndex, children }) => (
  <div>
    {quizData.length > 0 && currentQuestionIndex < quizData.length && (
      <div>
        <h3>{quizData[currentQuestionIndex].question}</h3>
        <ul>{children}</ul>
      </div>
    )}
  </div>
);

export default QuizContent;
