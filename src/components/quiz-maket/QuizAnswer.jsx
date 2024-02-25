import { ThemeContext } from "../../QuizPage";

const QuizAnswer = ({ answer, selectedAnswer, name, onChange, pressed }) => (
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
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle theme
        </button>
      )}
    </ThemeContext.Consumer>
  </li>
);
export default QuizAnswer;
