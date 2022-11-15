import React from "react";
import styled from "styled-components";
import Notification from "./Notification";

import starter from "../assets/images/starter.png";
import shiny from "../assets/images/shiny.png";
import cursed from "../assets/images/cursed.png";
import Button from "./Button";

function Main() {
  const notifications = [
    {
      img: starter,
      packs: 4,
      title: "Basic Beast Starter Pack",
      price: 40.0,
    },
    {
      img: cursed,
      packs: 2,
      title: "Cursed Black Pack",
      price: 600.0,
    },
    {
      img: shiny,
      packs: 4,
      title: "Basic Beast Starter Pack",
      price: 40.0,
    },
  ];

  console.log(starter);
  // const getNotifications =  notifications.map((item, index) => {
  //     return <Notification key={index} img={item.img}  title={item.title} price={item.price} packs={item.packs} />
  // })

  return (
    <MainCss>
      {notifications.map((item, index) => {
        return (
          <Notification
            key={index}
            img={item.img}
            title={item.title}
            price={item.price}
            packs={item.packs}
          />
        );
      })}
      <Button />
    </MainCss>
  );
}

export default Main;

const MainCss = styled.main`
  width: 65%;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    width: 100%;
    padding: 1rem;
  }
`;
