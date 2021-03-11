import styled from 'styled-components'
import { ReactSVG } from 'react-svg'
import '../styles/vars.css'

import { technology, muay_thai, coding } from '../assets/svg'

import { Grid, Section, SectionTitle } from './SharedStyle'


const Interests = () => {
  return (
    <Section>
      <SectionTitle>Увлечения</SectionTitle>

      <Container>
        <Content>
          <ReactSVG src={technology} />
          <Name>Technology</Name>
        </Content>

        <Content>
          <ReactSVG src={muay_thai} />
          <Name>Muay Thai</Name>
        </Content>

        <Content>
          <ReactSVG src={coding} />
          <Name>Coding</Name>
        </Content>
      </Container>
    </Section>
  )
}

const Container = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  margin-top: var(--mb-2);

  @media screen {
    @media (min-width: 968px) {
      grid-template-columns: repeat(4, auto);
      column-gap: 1rem;
    }
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.25rem;
  }
`
const Name = styled.span`
  margin-bottom: var(--mb-3);
`

export default Interests
