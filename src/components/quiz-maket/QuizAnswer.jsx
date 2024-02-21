import { Component } from "react";

class QuizAnswer extends Component {
  constructor(prop) {
    super(prop);
  }
  render() {
    const { answer, selectedAnswer, name, onChange, pressed } = this.props;

    return (
      <li
        key={answer.id}
        className={
          pressed && selectedAnswer === answer.id
            ? answer.correct
              ? "success"
              : "failure"
            : ""
        }
      >
        <label>
          <input
            checked={selectedAnswer === answer.id}
            onChange={onChange}
            type="radio"
            name={name}
            value={answer.id}
            disabled={pressed}
          />
          {answer.label}
        </label>
      </li>
    );
  }
}
export default QuizAnswer;
