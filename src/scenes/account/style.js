import styled from "styled-components";
import bgImage from "src/assets/images/login-bg.jpg";

export const AccountContainer = styled.div`
  background: url(${bgImage}) no-repeat;
  position: relative;
  min-height: 100%;
  background-color: black;
  background-position: 300px 120px;

  .content {
    position: relative;
    width: 400px;
    color: var(--teal);
    padding: calc(var(--base-unit) * 5);
    border-radius: 5px;
    z-index: 2;
  }

  .mask {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: black;
    opacity: 0.7;
  }

  .notifcation-area {
    min-height: calc(var(--base-unit) * 14);
  }

  h1 {
    margin: calc(var(--base-unit) * 5) 0;
    font-size: var(--font-size-xl);
  }

  label,
  input {
    color: var(--teal);
  }

  .form-actions__register {
    margin: calc(var(--base-unit) * 2) 0;
    font-size: var(--font-size-sm);
    color: white;

    a {
      color: white;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  button {
    margin-top: calc(var(--base-unit) * 2);
  }
`;
