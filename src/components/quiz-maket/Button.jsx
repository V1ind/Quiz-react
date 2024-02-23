import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { buttonNext, onClick, buttonText } = this.props;

    return (
      <div>
        {buttonNext !== null && (
          <button className="btn-next" onClick={onClick}>
            {buttonText || "NEXT"}
          </button>
        )}
      </div>
    );
  }
}
