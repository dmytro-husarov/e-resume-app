import styled from 'styled-components'
import { BiUpArrowAlt } from 'react-icons/bi'
import { animateScroll as scroll } from 'react-scroll'
import '../styles/vars.css'


const ScrollToTop = () => {
  const scrollHandler = () => scroll.scrollToTop()

  return (
    <Button onClick={scrollHandler}>
      <BiUpArrowAlt />
    </Button>
  )
}

const Button = styled.div`
  position: fixed;
  right: 1.5rem;
  bottom: 5rem;
  z-index: var(--z-tooltip);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  border-radius: 0.4rem;
  background-color: var(--container-color_alt);
  
  svg {
    font-size: 1.2rem;
    color: var(--text-color);
  }
  
  @media screen {
    @media (min-width: 968px) {
      display: none;
    }
  }
`

export default ScrollToTop
