import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ label }) =>
    label === "Buy" ? `var(--emeraldGreen-color)` : `var(--crimsonRed-color)`};

  cursor: pointer;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: 0 0 10px white;
  }
`;

export const ButtonText = styled.span`
  color: var(--offWhite-color);

  -webkit-user-select: none;
  user-select: none;
`;
