import styled from "styled-components";

const MainMenu = styled.ul`
  list-style: none;
  display: block;
  margin: 0;
  background: black;
  border-right: 1px solid;
  padding: 0 20px;
  flex-basis: 20%;

  a:active {
    text-decoration: none;
  }
`;

export const MenuItem = styled.li`
  color: white;
  margin: 10px 0;

  &:hover {
    color: #cef318;
  }

  &:focus{
    under
  }
`;

export default MainMenu;
