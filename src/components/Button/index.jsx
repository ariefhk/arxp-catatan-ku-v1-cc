import React from "react";
import PropTypes from "prop-types";

export default function Button({
  type = "button",
  children,
  onClick,
  ...rest
}) {
  return (
    <button type={type} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.object,
  onClick: PropTypes.func,
};
