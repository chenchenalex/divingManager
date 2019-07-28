import styled from "styled-components";
import media from "src/styles/style-utils";

const MainMenu = styled.ul`
  list-style: none;
  display: block;
  position: fixed;
  margin: 0;
  background: var(--DM-charcoal);
  width: 20%;
  height: 100%;
  overflow: scroll;
  padding: 20px 0;
  flex-basis: 20%;

  ${media.tablet`
    flex-basis: 30%;
    position: absolute;
    left: -100%;
    transition: all .2s ease;
    z-index: 1;

    &.active{
      left: 0;
    }
  `};

  ${media.phone`
    width: 100%;
  `};
`;

export const MenuItem = styled.li`
  background-color: ${props =>
    props.isActive ? "var(--DM-grey)" : "transparent"};
  border-right: ${props =>
    props.isActive ? "4px solid var(--DM-teal);" : "none"};
  margin: var(--base-unit) 0;
  padding: calc(var(--base-unit) * 3) 0;
  padding-left: calc(var(--base-unit) * 3);
  transition: opacity 0.2s ease;

  a {
    color: white;
    vertical-align: middle;
    margin-left: var(--base-unit);
  }

  &:hover {
    opacity: 0.7;
  }
`;

export default MainMenu;
