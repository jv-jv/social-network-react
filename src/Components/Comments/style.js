import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  margin-top: 0.5em;
  border-radius: var(--radius-small);
  padding: 0.5em 0;
`

export const Comment = styled.div`
  display: block;
  margin: 0.5em 0;
  border-radius: var(--radius-small);
  padding: 0.5em 1em;
  width: fit-content;
  background-color: var(--clr-action);
  color: var(--clr-light);
  letter-spacing: 0.5px;
`

export const User = styled(Link)`
  display: block;
  color: var(--clr-light);
  opacity: 0.8;
  font-size: 0.8em;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-decoration: none;
  cursor: pointer;
`

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`

export const Reaction = styled.span`
  border: 1px solid var(--clr-action);
  border-radius: 0.25em;
  padding: 0.25em 0.75em;
  background-color: ${({ active }) =>
    active ? "var(--clr-light)" : "var(--clr-action)"};
  color: ${({ active }) => (active ? "var(--clr-action)" : "var(--clr-light)")};
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) =>
      active ? "var(--clr-action)" : "var(--clr-light)"};
    color: ${({ active }) =>
      active ? "var(--clr-light)" : "var(--clr-action)"};
  }
`

export const Editor = styled.form`
  margin-top: 1em;
  display: flex;
  align-items: center;
  border-radius: var(--radius-small);
  background-color: var(--clr-light);
`

export const EditorInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 1em;
  border-radius: var(--radius-small);
`

export const EditorBtn = styled.button`
  border: none;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  background-color: var(--clr-action);
  color: var(--clr-light);
  font-size: 0.8em;
  margin-right: -0.3em;
`
