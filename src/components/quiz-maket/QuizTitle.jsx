import { Component } from "react";

export class QuizTitle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
 
    {
      return (
        <div className="quiz-container">
          <h2>Interesting Questions</h2>
          {this.props.children}
        </div>
      );
    }
  }
}
