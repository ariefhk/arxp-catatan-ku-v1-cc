import React from "react";

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
