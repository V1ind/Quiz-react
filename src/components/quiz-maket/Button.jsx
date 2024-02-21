import { Component } from "react";

export class Button extends Component {
  render() {
    const { buttonNext, handleNextClick } = this.props;
    return (
      <div>
        {buttonNext !== null && (
          <button className="btn-next" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    );
  }
}


