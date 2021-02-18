import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1em;
  border-radius: var(--radius-small);
  padding: 0.5em 1em;
  background-color: var(--clr-bg-post);
`

export const Name = styled(Link)`
  color: var(--clr-action);
  text-decoration: none;
`
export const Text = styled.p``

export const Time = styled.span`
  font-size: 0.8em;
  opacity: 0.7;
`
