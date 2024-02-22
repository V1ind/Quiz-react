import React, { Component } from "react";
import { fetchQuizData } from "./api";
import "./style.css";
import QuizAnswer from "./components/quiz-maket/QuizAnswer";
import { FinalPage } from "./components/quiz-maket/FinalPage";
import { Button } from "./components/quiz-maket/Button";

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

    console.log(this.divRef);
    this.divRef.current.style.border = "1px solid #000";
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
      <div className="quiz-container" ref={this.divRef}>
        <h2>Interesting Questions</h2>
        {quizData.length > 0 && currentQuestionIndex < quizData.length && (
          <div>
            <h3>{quizData[currentQuestionIndex].question}</h3>
            <ul>
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
            </ul>
            <Button
              buttonNext={currentQuestionIndex + 1 < quizData.length}
              handleNextClick={this.handleNextClick}
              handleReset={this.handleReset}
            />
          </div>
        )}
        {currentQuestionIndex === quizData.length && (
          <FinalPage totalScore={totalScore} />
        )}
      </div>
    );
  }
}

export default QuizPage;
