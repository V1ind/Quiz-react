import React, { Component } from "react";
import { fetchQuizData } from "./api";
import "./style.css";
import QuizAnswer from "./components/quiz-maket/QuizAnswer";
import { FinalPage } from "./components/quiz-maket/FinalPage";
import { Button } from "./components/quiz-maket/Button";
import { QuizTitle } from "./components/quiz-maket/QuizTitle";
import { QuizQData } from "./components/Data/QuizQData";

class QuizPage extends Component {
  divRef = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      selectedValue: 0,
      quizData: [],
      currentQuestionIndex: 0,
      buttonNext: 1,
      totalScore: 0,
      selectedAnswer: null,
      pressed: false,
    };
  }

  fetchAndSetQuizData = async () => {
    const data = await fetchQuizData();
    this.setState({ quizData: data });
  };

  handleNextClick = () => {
    const { quizData, currentQuestionIndex, selectedAnswer, totalScore } =
      this.state;
    const currentQuestion = quizData[currentQuestionIndex];

    const isAnswerCorrect = currentQuestion.answers.find(
      (answer) => answer.id === selectedAnswer
    ).correct;

    this.setState({
      selectedValue: selectedAnswer,
      pressed: true,
    });

    setTimeout(() => {
      this.setState((prevState) => ({
        totalScore: isAnswerCorrect ? totalScore + 1 : totalScore,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        pressed: false,
        value: 0,
        selectedAnswer: null,
      }));
    }, 2000);
  };

  handleReset = () => {
    this.setState({ selectedValue: null });
  };

  componentDidMount() {
    this.fetchAndSetQuizData();
  }
  render() {
    const {
      quizData,
      currentQuestionIndex,
      totalScore,
      selectedAnswer,
      pressed,
    } = this.state;

    return (
      <QuizTitle>
        {quizData.length > 0 && currentQuestionIndex < quizData.length && (
          <QuizQData
            quizData={quizData}
            currentQuestionIndex={currentQuestionIndex}
          >
            {quizData[currentQuestionIndex].answers.map((answer) => (
              <QuizAnswer
                onChange={() => this.setState({ selectedAnswer: answer.id })}
                key={answer.id}
                answer={answer}
                name="question"
                selectedAnswer={selectedAnswer}
                pressed={pressed}
              />
            ))}

            <Button
              buttonText="SUMBIT"
              buttonNext={currentQuestionIndex + 1 < quizData.length}
              onClick={this.handleNextClick}
            />
          </QuizQData>
        )}

        {currentQuestionIndex === quizData.length && (
          <FinalPage totalScore={totalScore} />
        )}
      </QuizTitle>
    );
  }
}
export default QuizPage;
