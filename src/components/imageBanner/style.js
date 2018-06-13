import styled from "styled-components";

const imageBanner = styled.div`
  position: relative;

  h1 {
    font-size: 40px;
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    color: white;
  }

  img {
    width: 100%;
  }
`;

export default imageBanner;
