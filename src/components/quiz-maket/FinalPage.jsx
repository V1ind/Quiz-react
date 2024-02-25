import React from "react";

const FinalPage = ({ totalScore }) => {
  return (
    <div>
      <h3>Quiz Completed!</h3>
      <p>Total Score: {totalScore}/5</p>
    </div>
  );
};

export default FinalPage;
