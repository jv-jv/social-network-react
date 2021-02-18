import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const Container = styled.aside`
  grid-area: sidebar;
  display: grid;
  grid-template-areas:
    "top top"
    "side content";
  grid-template-columns: 2em min-content;
  grid-template-rows: 4em auto;

  @media (min-width: 500px) {
    grid-template-columns: 3em auto;
  }
`

export const Top = styled.div`
  grid-area: top;
  border-radius: var(--radius-large) var(--radius-large) 0 0;
  background-color: var(--clr-bg-sidebar);
`

export const Side = styled.div`
  grid-area: side;
  background-color: var(--clr-bg-sidebar);
`
export const Content = styled.div`
  grid-area: content;
  background-color: var(--clr-bg-sidebar);
`

export const Title = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.span`
  display: flex;
  align-items: center;
  padding-right: 0.3em;
  font-size: 2em;
`

export const Text = styled.h3`
  display: none;
  margin: 0;
  padding-right: 0.75em;
  font-weight: 500;

  @media (min-width: 700px) {
    display: block;
  }
`

const spacing = "1.5em"

export const Item = styled(NavLink)`
  display: block;
  padding: ${spacing} 0;
  color: var(--clr-primary);
  text-decoration: none;

  &.active + & {
    padding-top: 0;
  }

  &.active {
    margin-top: -${spacing};
    padding: 0;
    background-color: var(--clr-bg);
    color: var(--clr-action);

    > ${Title} {
      margin-left: -${spacing};
      border-radius: ${spacing} 0 0 ${spacing};
      padding: ${spacing} 0 ${spacing} ${spacing};
      background-color: var(--clr-bg);
    }

    &::before,
    &::after {
      content: "";
      display: block;
      height: ${spacing};
      background-color: var(--clr-bg-sidebar);
    }

    &::before {
      border-radius: 0 0 ${spacing} 0;
    }
    &::after {
      border-radius: 0 ${spacing} 0 0;
    }
  }
`
