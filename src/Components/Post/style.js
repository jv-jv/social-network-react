import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  position: relative;
  display: flex;

  margin: 1em;
  margin-top: 0;
  border-radius: var(--radius-small);
  padding: 1em;

  background-color: var(--clr-bg-post);
  color: var(--clr-post);
`
export const Body = styled.div`
  width: 100%;
`

export const Avatar = styled.img`
  display: none;
  border-radius: 50%;
  width: 5em;
  height: 5em;
  object-fit: cover;

  @media (min-width: 400px) {
    display: block;
    margin-right: 0.5em;
  }

  @media (min-width: 600px) {
    margin-right: 1em;
  }
`

export const Name = styled(Link)`
  margin: 0;
  color: var(--clr-action);
  font-size: 1.3em;
  font-weight: 700;
  text-decoration: none;
`

export const Time = styled.span`
  padding-left: 0.5em;
  font-size: 0.6em;
  color: var(--clr-primary);

  opacity: 0.6;
`

export const Text = styled.p``

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.3em 0;
`

export const Image = styled.img`
  grid-area: img;
  display: block;
  border-radius: var(--radius-small);

  width: 100%;
`

export const Video = styled.video`
  display: block;
  width: 100%;
`

export const Option = styled.div`
  margin-bottom: 0.3em;
  border-radius: 0.4em;
  padding: 0.2em 0.4em;
  background-color: lightgray;
  font-size: 0.8em;
  cursor: pointer;
`

export const Options = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  display: grid;
`

export const OptionsBtn = styled.span`
  justify-self: end;

  margin-bottom: 0.5em;
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;

  font-size: 1em;
  line-height: 0.9em;
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: lightgrey;
  }
`

export const LikesCounter = styled.span`
  display: flex;
  align-items: center;
  color: var(--clr-action);
`

export const CommentsCounter = styled.span`
  color: var(--clr-action);
`
