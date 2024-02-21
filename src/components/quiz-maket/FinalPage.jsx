import { Component } from "react";

export class FinalPage extends Component {
  constructor(prop) {
    super(prop);
  }
  render() {
    const {totalScore} = this.props;
    return (
      <div>
        <h3>Quiz Completed!</h3>
        <p>Total Score: {totalScore}</p>
      </div>
    );
  }
}

