import styled from 'styled-components'
import '../styles/vars.css'

import { Grid, Section, SectionTitle } from './SharedStyle'


const Projects = () => {
  return (
    <Section id='projects'>
      <SectionTitle>Некоммерческие проекты</SectionTitle>

      <Container>
        <Content>
          <Title>Speedtest</Title>

          <Description>
            <p><span>О проекте: </span>Данное приложение создавалось с целью поверхностного ознакомления с различными технологиями для работы со стейтом в процессе разработки</p>
            <p><span>Cтек технологий: </span>React, Material-UI, Redux, Recoil, MobX, Effector, Zustand, Jotai, Valtio, XState</p>
          </Description>

          <Links>
            <Link
              target='_blank'
              rel="noreferrer"
              href='https://speedtest-react-app.web.app/'
            >
              Демо - https://speedtest-react-app.web.app/
            </Link>

            <Link
              target='_blank'
              rel="noreferrer"
              href='https://github.com/dmytro-husarov/speedtest-app'
            >
              Код - https://github.com/dmytro-husarov/speedtest-app
            </Link>
          </Links>
        </Content>

        <Content>
          <Title>Music Player</Title>

          <Description>
            <p><span>О проекте: </span>Музыкальный плеер. Основная цель создания проекта - научиться работать с конечными автоматами для управления состоянием всего приложения</p>
            <p><span>Cтек технологий: </span>React, SCSS Modules, XState</p>
          </Description>
          
          <Links>
            <Link
              target='_blank'
              rel="noreferrer"
              href='https://music-player-react-app.web.app/'
            >
              Демо - https://music-player-react-app.web.app/
            </Link>

            <Link
              target='_blank'
              rel="noreferrer"
              href='https://github.com/dmytro-husarov/music-player-app'
            >
              Код - https://github.com/dmytro-husarov/music-player-app
            </Link>
          </Links>
        </Content>

        <Content>
          <Title>Capture Portfolio</Title>

          <Description>
            <p><span>О проекте: </span>Сайт портфолио. Цель проекта - научиться работать с маршрутизацией, стилизацией компонентов css-in-js и анимацией</p>
            <p><span>Cтек технологий: </span>React, React Router, Styled Components, Framer Motion</p>
          </Description>

          <Links>
            <Link
              target='_blank'
              rel="noreferrer"
              href='https://capture-portfolio-react-app.web.app/'
            >
              Демо - https://capture-portfolio-react-app.web.app/
            </Link>

            <Link
              target='_blank'
              rel="noreferrer"
              href='https://github.com/dmytro-husarov/capture-portfolio'
            >
              Код - https://github.com/dmytro-husarov/capture-portfolio
            </Link>
          </Links>
        </Content>

        <Content>
          <Title>Ignite</Title>

          <Description>
            <p><span>О проекте: </span>Приложение для поиска видео игр. Цель проекта - практика с redux, redux-thunk, использование RAWG Video Games Database API, а также практика с анимацией и стилизацией компонентов css-in-js</p>
            <p><span>Cтек технологий: </span>React, Redux, Styled Components, Framer Motion</p>
          </Description>

          <Links>
            <Link
              target='_blank'
              rel="noreferrer"
              href='https://ignite-react-app.web.app/'
            >
              Демо - https://ignite-react-app.web.app/
            </Link>

            <Link
              target='_blank'
              rel="noreferrer"
              href='https://github.com/dmytro-husarov/ignite-app'
            >
              Код - https://github.com/dmytro-husarov/ignite-app
            </Link>
          </Links>
        </Content>

        <Content>
          <Title>eResume</Title>

          <Description>
            <p><span>О проекте: </span>Электронное резюме</p>
            <p><span>Cтек технологий: </span>React, Html2pdf, Styled Components, Framer Motion</p>
          </Description>

          <Links>
            <Link
              target='_blank'
              rel="noreferrer"
              href='https://eresume-react-app.web.app/'
            >
              Демо - https://eresume-react-app.web.app/
            </Link>

            <Link
              target='_blank'
              rel="noreferrer"
              href='https://github.com/dmytro-husarov/e-resume-app'
            >
              Код - https://github.com/dmytro-husarov/e-resume-app
            </Link>
          </Links>
        </Content>
      </Container>
    </Section>
  )
}

const Container = styled(Grid)`
  grid-template-columns: auto;
  gap: 0.5rem;
`
const Content = styled(Grid)`
  gap: 0.2rem;
`
const Title = styled.h3`
  font-size: var(--h3-font-size);
`
const Description = styled.div`
  font-size: var(--small-font-size);
  line-height: 1rem;

  span {
    color: var(--title-color);
  }
`
const Links = styled.div`
  font-size: var(--smaller-font-size);
`
const Link = styled.a`
  display: block;
  color: var(--text-color);
  
  &:hover {
    color: var(--title-color);
  }
`

export default Projects
