import React, { Component } from "react";
import { fetchQuizData } from "./api";
import "./style.css";
import QuizContainer from "./components/quiz-maket/QuizContainer";

export const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {},
});

class QuizPage extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef(null);
    this.state = {
      selectedValue: 0,
      quizData: [],
      currentQuestionIndex: 0,
      buttonNext: 1,
      totalScore: 0,
      selectedAnswer: null,
      pressed: false,
      theme: "light",
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
      theme,
    } = this.state;
    console.log(theme);
    return (
      <ThemeContext.Provider
        value={{
          theme,
          setTheme: (theme) => this.setState({ theme }),
        }}
      >
        <QuizContainer
          quizData={quizData}
          currentQuestionIndex={currentQuestionIndex}
          selectedAnswer={selectedAnswer}
          pressed={pressed}
          totalScore={totalScore}
          onChange={(selectedAnswer) => this.setState({ selectedAnswer })}
          handleNextClick={this.handleNextClick}
        />
      </ThemeContext.Provider>
    );
  }
}
export default QuizPage;
