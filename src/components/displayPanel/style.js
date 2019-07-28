import styled from "styled-components";
import media from "src/styles/style-utils";

const PanelContainer = styled.div`
  overflow: scroll;
  flex-basis: 80%;
  margin-left: 20%;

  ${media.tablet`
    margin: 0;
    flex-basis: 100%;
  `};
`;

export default PanelContainer;
