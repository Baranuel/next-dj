import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderCss>
      <Heading1>My Inbox</Heading1>
      <Text>Redeem your packs</Text>
    </HeaderCss>
  );
}

export default Header;

const HeaderCss = styled.header`
  text-align: center;
`;

const Heading1 = styled.h1`
  font-size: 4rem;
  margin-top: 1rem;
  font-weight: normal;
`;

const Text = styled.p`
  font-size: 1.3rem;
`;
