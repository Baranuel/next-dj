import React from "react";
import styled from "styled-components";

interface Notification {
  img: any;
  packs: number;
  title: string;
  price: number;
}

function Notification(props: Notification) {
  return (
    <Wrapper>
      <PictureDiv>
        <Img src={props.img.src} alt="Starter pack image" />
      </PictureDiv>
      <TextDiv>
        <h2>You received {props.packs}</h2>
        <p>{props.title}</p>
        <p>USD ${props.price}</p>
      </TextDiv>
    </Wrapper>
  );
}

export default Notification;

const Wrapper = styled.div`
  padding: 1.5rem 0;
  border-bottom: 0.2rem solid #6a6c71;
`;

const PictureDiv = styled.div`
  display: inline-block;
  height: 70px;
`;

const TextDiv = styled.div`
  display: inline-block;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  padding-right: 1rem;
`;
