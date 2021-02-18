import styled from "styled-components"

export const Main = styled.div`
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: 6em calc(100vh - 6em - 1em); // total - header - margin

  grid-template-areas:
    "header header"
    "sidebar main-content";

  margin: 1em auto 0 auto;
  border-radius: var(--radius-large) var(--radius-large) 0 0;
  max-width: 1000px;
  min-height: calc(100vh - 1em);

  background-color: var(--clr-bg);
`

export const Home = styled.div`
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
