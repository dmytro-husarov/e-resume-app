import { createGlobalStyle } from 'styled-components'
import '../styles/vars.css'


const GlobalStyle = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
}

body {
  margin: 0 0 var(--header-height) 0;
  padding: 0;
  background-color: var(--body-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  color: var(--text-color);

  @media screen {
    @media (min-width: 968px) {
      margin: 3rem 0;
    }
  }
}

h1, h2, h3, ul, p {
  margin: 0;
}

h1, h2, h3 {
  font-weight: var(--font-medium);
  color: var(--title-color);
}

ul {
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}
`
export default GlobalStyle
