import Main from "../components/Main";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <Wrapper>
      <Navigation />
      <Header />
      <Main />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #141b24;
  height: 100vh;
`;
