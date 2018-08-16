import styled from "styled-components";
import bgImage from "src/assets/images/dust_scratches.png";

const RegisterContainer = styled.div`
  background: url(${bgImage});
  min-height: 100%;
  position: relative;
  overflow: hidden;

  .content {
    width: 400px;
    margin: 0 auto;
    padding-top: calc(var(--base-unit) * 3);
    color: var(--DM-teal);
    border-radius: 5px;
    z-index: 2;
  }

  .mask {
    position: absolute;
    bottom: -150px;
    right: -150px;
    height: 300px;
    width: 300px;
    transform: rotateZ(45deg);
    z-index: 1;
    background-color: black;
    opacity: 0.5;
  }
`;

export default RegisterContainer;
