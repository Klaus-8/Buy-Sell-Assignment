import styled from "styled-components";

const listStyles = styled.ul`
  list-style: none;
`;

const listItemStyles = styled.li`
  color: ${({ type }) =>
    type === "Buy" ? "var(--emeraldGreen-color)" : "var(--crimsonRed-color)"};

  margin: 1rem 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
  padding: 1rem 0;
`;

export const PriceList = styled(listStyles)``;

export const Price = styled(listItemStyles)``;

export const QuantityList = styled(listStyles)``;

export const Quantity = styled(listItemStyles)``;
