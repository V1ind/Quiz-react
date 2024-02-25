import React from "react";

const Button = ({ onClick, buttonText = "NEXT", ...rest }) => (
  <button className="btn-next" onClick={onClick} {...rest}>
    {buttonText}
  </button>
);

export default Button;