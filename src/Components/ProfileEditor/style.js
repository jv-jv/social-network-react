import styled from "styled-components"
import { BaseButton } from "../BaseComponents/style"

export const Container = styled.form`
  margin: 0 1em 1em 1em;
  padding: 1em;
  border-radius: var(--radius-small);
  background-color: var(--clr-bg-sidebar);

  display: grid;
  grid-template-columns: auto 5em;
  grid-gap: 0.5em;
`
export const Text = styled.p`
  grid-column: 1/-1;
  margin: 0.5em 0 0 0;
  font-weight: 500;
  opacity: 0.8;
`

export const Input = styled.input`
  border: none;
  border-radius: var(--radius-small);
  padding: 1em;
`

export const Upload = styled.input`
  align-self: center;
`

export const Button = styled(BaseButton)`
  padding: 0.5em;
`
