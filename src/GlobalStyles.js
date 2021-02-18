import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
*,
*::before, 
*::after {
    box-sizing: border-box;
}

:root {
    font-size: 16px;

    // COLORS

    --clr-primary: #333;
    --clr-action: #0083ff;

    --clr-bg: #f5f7ff;
    --clr-bg-body:#d6dfff;
    
    --clr-bg-sidebar: #ebeefc;
    --clr-bg-post: #dcebff;

    --clr-light: #fff;
    --clr-bg-header: #1d173b;
    --clr-text-light: #ffffffd1;

    --clr-bg-error: #fff0f4;
    --clr-error: #c51244;

    // RADIUS
    --radius-small: 1rem;
    --radius-large: 2.5rem;
  

}

body {
    margin:0;
    /* font-size: 16px; */
    font-size: 0.8rem;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--clr-bg-body);
    color: var(--clr-primary);


@media (min-width: 500px) {
    font-size: 0.9rem;

}
@media (min-width: 700px) {
    font-size: 1rem;

}


}

`

export default GlobalStyles
