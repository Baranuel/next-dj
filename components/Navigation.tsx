import React from "react";
import styled from "styled-components";

function Navigation() {
  return (
    <Nav>
      <List>
        <ListItem>home</ListItem>
        <ListItem>store</ListItem>
        <ListItem>marketplace</ListItem>
        <ListItem>dexicon</ListItem>
      </List>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.nav`
  text-transform: uppercase;
  text-align: center;
`;

const List = styled.ul`
  padding: 1rem;
  font-size: 26px;
`;

const ListItem = styled.li`
  color: #cdad23;
  list-style: none;
  display: inline-block;
  padding: 5px;
`;
