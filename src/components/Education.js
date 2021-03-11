import styled from 'styled-components'
import '../styles/vars.css'

import { Grid, Section, SectionTitle } from './SharedStyle'


const Education = () => {
  return (
    <Section id='education'>
      <SectionTitle>Образование</SectionTitle>

      <EducationContainer>
        <Content>
          <Time>
            <Rounder />
            <Line />
          </Time>

          <Data>
            <Title>JavaScript Developer</Title>
            <Studies>IT Specialists Training Center "SkillUp"</Studies>
            <Year>03.2019 - 09.2019</Year>
          </Data>
        </Content>

        <Content>
          <Time>
            <Rounder />
            <Line last/>
          </Time>

          <Data>
            <Title>Инженер-механик</Title>
            <Studies>ДГАУ</Studies>
            <Year>09.1999 - 06.2004</Year>
          </Data>
        </Content>
      </EducationContainer>
    </Section>
  )
}

const EducationContainer = styled(Grid)`
  grid-template-columns: auto;
  gap: 0.5rem;
`
const Data = styled(Grid)`
  gap: 0.2rem;
`
const Content = styled.div`
  display: flex;
`
const Time = styled.div`
  padding-right: 1rem;
`
const Rounder = styled.span`
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
  margin-top: 0.1rem;
  border-radius: 50%;
  background-color: var(--text-color-light);
`
const Line = styled.span`
  display: block;
  width: 2px; 
  height: ${p => p.last ? '70%' : '110%'};
  background-color: var(--text-color-light);
  transform: translate(7px, 0);
`
const Title = styled.h3`
  font-size: var(--h3-font-size);
`
const Studies = styled.span`
  font-size: var(--small-font-size);
  color: var(--title-color);
`
const Year = styled.span`
  font-size: var(--smaller-font-size);
`

export default Education
