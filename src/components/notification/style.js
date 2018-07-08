import styled from "styled-components";

const styledNotificaiton = styled.div`
  background-color: ${props => {
    switch (props.variant) {
      case "error":
        return "var(--red-400)";
      default:
        return "var(--blue)";
    }
  }};

  color: ${props => {
    switch (props.variant) {
      case "error":
        return "white";
      default:
        return "black";
    }
  }};

  padding: 30px;
  line-height: 1.5;
  font-size: var(--font-size-sm);
  border-radius: 5px;

  width: ${props => (props.fullWidth ? "100%" : "auto")};
`;

export default styledNotificaiton;
