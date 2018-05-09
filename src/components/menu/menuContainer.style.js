import styled from "styled-components";

const MainMenu = styled.ul`
  list-style: none;
  display: block;
  position: absolute;
  left: 0;
  margin: 0;
  height: 100%;
  background: black;
  border-right: 1px solid;
  padding: 0 20px;
`;

export const MenuItem = styled.li`
  color: white;
  margin: 10px 0;
`;

export default MainMenu;
