import styled from "styled-components";
import { media } from "src/styles/style-utils";

const MainMenu = styled.ul`
  list-style: none;
  display: block;
  position: fixed;
  margin: 0;
  background: black;
  width: 20%;
  height: 100%;
  overflow: scroll;
  padding: 20px 0;
  flex-basis: 20%;

  ${media.tablet`
    flex-basis: 30%;
  `};
`;

export const MenuItem = styled.li`
  color: white;
  background-color: ${props =>
    props.isActive ? "var(--grey)" : "transparent"};
  margin: var(--base-unit) 0;
  padding: calc(var(--base-unit) * 3) 0;
  padding-left: calc(var(--base-unit) * 2);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export default MainMenu;
