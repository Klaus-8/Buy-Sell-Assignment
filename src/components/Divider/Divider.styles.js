import styled from "styled-components";

export const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2rem;
`;

export const Divider = styled.div`
  height: 2px;
  width: 80%;
  background: linear-gradient(
    to right,
    var(--emeraldGreen-color),
    var(--crimsonRed-color)
  );
`;
