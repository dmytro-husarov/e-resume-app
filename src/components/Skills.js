import styled from 'styled-components'
import '../styles/vars.css'

import { Grid, Section, SectionTitle } from './SharedStyle'


const Skills = () => {
  return (
    <Section id='skills'>
      <SectionTitle>Навыки</SectionTitle>

      <Content>
        <Data>
          <Name><Circle /> Html</Name>
          <Name><Circle /> Css</Name>
          <Name><Circle /> Scss</Name>
          <Name><Circle /> JavaScript</Name>
        </Data>

        <Data>
          <Name><Circle /> React</Name>
          <Name><Circle /> Redux</Name>
          <Name><Circle /> Webpack</Name>
          <Name><Circle /> Git</Name>
        </Data>
      </Content>
    </Section>
  )
}

const Content = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  gap: 1;
`
const Data = styled.ul``
const Name = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-1);
`
const Circle = styled.span`
  display: inline-block;
  width: 5px;
  height: 5px;
  margin-right: 0.75rem;
  border-radius: 50%;
  background-color: var(--title-color);
`

export default Skills
