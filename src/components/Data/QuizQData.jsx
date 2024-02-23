import React, { Component } from "react";

export class QuizQData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { quizData, currentQuestionIndex } = this.props;

    return (
      <div>
        {quizData.length > 0 && currentQuestionIndex < quizData.length && (
          <div>
            <h3>{quizData[currentQuestionIndex].question}</h3>
            <ul>
              {this.props.children}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
