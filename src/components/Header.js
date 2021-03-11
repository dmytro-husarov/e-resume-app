import { useRef, useState } from 'react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { BiBook, BiBriefcaseAlt, BiGridAlt, BiHome, BiReceipt, BiUser } from 'react-icons/bi'
import { fadeIn } from "../animation/animation"
import '../styles/vars.css'


const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const elShadowRef = useRef(null)
  const options = {
    smooth: true,
    offset: -50,
    duration: 750,
    onClick: () => setIsOpenMenu(!isOpenMenu)
  }

  const toggleHandler = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  const closeMenuHandler = event => {
    const element = event.target
    if (elShadowRef.current === element) {
      setIsOpenMenu(!isOpenMenu)
    }
  }

  return (
    <HeaderStyled>
      <AnimatePresence>
        {isOpenMenu && <Shadow
          ref={elShadowRef}
          onClick={closeMenuHandler}
          initial='hidden'
          animate='show'
          exit='exit'
          variants={fadeIn}
        >
          <Menu>
            <List>
              <Item>
                <LinkStyled to='home' {...options}>
                  <BiHome />Домой
                </LinkStyled>
              </Item>

              <Item>
                <LinkStyled to='about' {...options}>
                  <BiUser />О себе
                </LinkStyled>
              </Item>

              <Item>
                <LinkStyled to='projects' {...options}>
                  <BiBook />Некоммерческие проекты
                </LinkStyled>
              </Item>

              <Item>
                <LinkStyled to='education' {...options}>
                  <BiReceipt />Образование
                </LinkStyled>
              </Item>

              <Item>
                <LinkStyled to='skills' {...options}>
                  <BiBriefcaseAlt />Навыки
                </LinkStyled>
              </Item>
            </List>
          </Menu>
        </Shadow>}
      </AnimatePresence>

      <Toggle>
        <BiGridAlt onClick={toggleHandler}/>
      </Toggle>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: var(--z-fixed);
  width: 100%;

  @media screen {
    @media (min-width: 968px) {
      display: none;
    }
  }
`
const Shadow = styled(motion.div)`
  @media screen {
    @media (max-width: 968px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: var(--header-height);
      z-index: var(--z-tooltip);
      background: rgba(0, 0, 0, 0);
    }
  }
`
const Menu = styled.div`
  @media screen {
    @media (max-width: 968px) {
      position: absolute;
      bottom: -1px;
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 2rem 1.5rem;
      border-radius: 1rem 1rem 0 0;
      background-color: var(--body-color);
      box-shadow: 0 1px 8px var(--text-color-light);
    }
  }
`
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 480px;

  @media screen {
    @media (max-width: 320px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem 0.5rem;
    }
  }
`
const Item = styled.li`
  text-align: center;
`
const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--smaller-font-size);
  font-weight: var(--font-medium);

  svg {
    margin-bottom: var(--mb-1);
    font-size: 1.2rem;
  }
`
const Toggle = styled.div`
  position: absolute;
  bottom: 0;
  z-index: var(--z-fixed);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-color: var(--body-color);
  box-shadow: 0 1px 8px var(--text-color-light);

  svg {
    font-size: 1.5rem;
    color: var(--title-color); 
    cursor: pointer;
  }
`

export default Header
