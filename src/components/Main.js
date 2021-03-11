import { useRef } from 'react'
import styled from 'styled-components'
import '../styles/vars.css'

import Home from './Home'
import Social from './Social'
import Skills from './Skills'
import Interests from './Interests'
import About from './About'
import Projects from './Projects'
import Education from './Education'
import { Container } from './SharedStyle'


const Main = () => {
  const elResumeRef = useRef(null)

  return (
    <Container>
      <Resume ref={elResumeRef}>
        <ResumeLeft>
          <Home areaCV={elResumeRef} />
          <Social />
          <Skills />
          <Interests />
        </ResumeLeft>

        <ResumeRight>
          <About />
          <Projects />
          <Education />
        </ResumeRight>

        <div
          className='html2pdf__page-break'
          style={{backgroundColor: 'var(--container-color_alt)'}}
        />
      </Resume>
    </Container>
  )
}

const Resume = styled.div`
  @media screen {
    @media (min-width: 968px) {
      display: grid;
      grid-template-columns: 0.5fr 1fr;
      background-color: var(--container-color);
      box-shadow: 0 0 8px rgba(13, 12, 12, 0.15);
    }
  }
`
const ResumeLeft = styled.div`
  @media screen {
    @media (min-width: 968px) {
      padding: 0 1.5rem;
      background-color: var(--container-color_alt);
    }
  }
`
const ResumeRight = styled.div`
  @media screen {
    @media (min-width: 968px) {
      padding: 0 1.5rem;
    }
  }
`

export default Main
