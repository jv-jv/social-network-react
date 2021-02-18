import styled from "styled-components"

export const BaseButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  padding: 1em;
  background-color: var(--clr-action);
  color: var(--clr-light);
  cursor: pointer;
  transition: transform 100ms ease-in;
  font-size: 1em;

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    &:active {
      transform: none;
    }
  }
`
