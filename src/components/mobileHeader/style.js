import styled from "styled-components";
import media from "src/styles/style-utils";

const mobileHeader = styled.div`
  display: none;
  background-color: var(--DM-charcoal);
  color: white;
  padding: var(--base-unit);

  ${media.tablet`
    display: block;
  `};
`;

export default mobileHeader;
