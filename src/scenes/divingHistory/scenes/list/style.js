import styled from "styled-components";
import Table from "@material-ui/core/Table";

const DivingContainer = styled.div`
  margin: 16px;
`;

const DiveTable = styled(Table)`
  && {
    margin-top: 20px;
  }
`;

export { DivingContainer, DiveTable };
