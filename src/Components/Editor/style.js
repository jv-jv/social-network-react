import styled from "styled-components"
import { BaseButton } from "../BaseComponents/style"

export const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1em 1em 1em;
  padding: 1em;
  border-radius: var(--radius-small);
  background-color: var(--clr-bg-sidebar);
`

export const Title = styled.h3`
  margin: 0 0 1em 0;
  text-align: center;
`

export const Close = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 1rem;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  background-color: var(--clr-bg-sidebar);
  filter: brightness(0.8);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: calc((2rem / 2) - 0.2rem / 2);
    left: calc((2rem - 1.4rem) / 2);

    width: 1.4rem;
    height: 0.2rem;

    background-color: var(--clr-primary);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export const TextArea = styled.textarea`
  border: none;
  border-radius: var(--radius-small);
  padding: 1em;
  height: ${({ isExpanded }) => (isExpanded ? "10rem" : "4rem")};
  resize: none;
  outline: none;
`

export const Input = styled.input`
  margin: 1em 0;
`

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
`

export const Attachment = styled.span`
  color: var(--clr-action);
  font-size: 2em;
  cursor: pointer;
`

export const Image = styled.img`
  display: block;
  border-radius: var(--radius-small);
  width: 100%;
`

export const Video = styled.video`
  display: block;
  width: 100%;
`

export const Button = styled(BaseButton)`
  margin-top: 1em;
`
