import styled from "styled-components";
import Table from "material-ui/Table";

const DivingContainer = styled.div`
  margin: 0;
`;

const DiveTable = styled(Table)`
  && {
    margin-top: 20px;
  }
`;

export { DivingContainer, DiveTable };
