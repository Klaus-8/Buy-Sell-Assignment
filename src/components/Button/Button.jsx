import React from "react";

import * as sc from "./Button.styles.js";

const Button = ({ label, onClicked }) => {
  return (
    <sc.Container onClick={() => onClicked(label)} label={label}>
      <sc.ButtonText>{label}</sc.ButtonText>
    </sc.Container>
  );
};

export default Button;
