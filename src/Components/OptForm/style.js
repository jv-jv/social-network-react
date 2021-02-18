import styled from "styled-components"
import { Link } from "react-router-dom"
import { BaseButton } from "../BaseComponents/style"

export const Container = styled.form`
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
  margin: 1em auto 0 auto;
  width: 50%;
  min-width: 250px;
  max-width: 400px;
`

export const Input = styled.input`
  margin-bottom: 1em;
  border: 1px solid var(--clr-light);
  border-radius: 0.5rem;
  padding: 1.5em;
  font-size: 1em;
`

export const Button = styled(BaseButton)`
  margin-top: 1em;
`

export const Title = styled.h1`
  color: var(--clr-primary);
  text-align: center;
`
export const Error = styled.div`
  margin-bottom: 1em;
  border: 1px solid var(--clr-error);
  border-radius: 0.5rem;
  padding: 0.75em 1em;
  background-color: var(--clr-bg-error);
`
export const StyledLink = styled(Link)``

export const Text = styled.p``
