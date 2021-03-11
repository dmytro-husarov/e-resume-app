import styled from 'styled-components'
import { FaFacebookF, FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import '../styles/vars.css'

import { Grid, Section, SectionTitle } from './SharedStyle'


const Social = () => {
  return (
    <Section>
      <SectionTitle>SOCIAL</SectionTitle>

      <SocialContainer>
        <Link
          target='_blank'
          rel="noreferrer"
          href='https://www.linkedin.com/in/dmytro-husarov/'
        >
          <FaLinkedin />@dmytro-husarov
        </Link>

        <Link
          target='_blank'
          rel="noreferrer"
          href='https://www.facebook.com/dmytro.husarov'
        >
          <FaFacebookF />@dmytro.husarov
        </Link>

        <Link
          target='_blank'
          rel="noreferrer"
          href='https://t.me/DmitryHussarov'
        >
          <FaTelegramPlane />@DmitryHussarov
        </Link>

        <Link
          target='_blank'
          rel="noreferrer"
          href='https://github.com/dmytro-husarov'
        >
          <FaGithub />@dmytro-husarov
        </Link>
      </SocialContainer>
    </Section>
  )
}

const SocialContainer = styled(Grid)`
  gap: 1rem;
  @media screen {
    @media (min-width: 480px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 968px) {
      grid-template-columns: auto;
    }
  }
`
const Link = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--text-color);

  &:hover {
    color: var(--title-color);
  }
  
  svg {
    font-size: 1.2rem;
    margin-right: 0.6rem;
  }
`

export default Social
