import React from "react";
import styled from "styled-components";
function Button() {
  return (
    <div>
      <ButtonCss>claim all</ButtonCss>
    </div>
  );
}

export default Button;

const ButtonCss = styled.button`
  font-family: "Pixelar";
  color: #cdad23;
  font-size: 1.6rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  background-color: #ffff97;
  border: 0.15rem solid #cdad23;
  margin: 1rem 0;
`;
