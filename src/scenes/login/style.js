import styled from "styled-components";
import bgImage from "src/assets/images/dust_scratches.png";

export const LoginContainer = styled.div`
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

  .notifcation-area {
    min-height: calc(var(--base-unit) * 14);
  }

  label,
  input {
    color: var(--DM-teal);
  }

  .form-actions__register {
    margin: calc(var(--base-unit) * 2) 0;
    font-size: var(--font-size-sm);

    a {
      color: var(--DM-teal);
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
