import { useEffect } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import styled from 'styled-components'
import '../styles/vars.css'

import { useLocalStorage } from '../hooks/useLocalStorage'


const ThemeToggler = () => {
  const [theme, setTheme] = useLocalStorage('eResume-theme', 'light')
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return (
    <ButtonStyled onClick={() => setTheme(nextTheme)}>
      {theme === 'light' ? <BiMoon title='Theme'/> : <BiSun title='Theme'/>}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.div`
  position: absolute;
  top: 1.7rem;
  right: 0;
  display: flex;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;
  
  &:hover {
    color: var(--title-color);
  }
`

export default ThemeToggler
