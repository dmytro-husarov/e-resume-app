import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { BiDownload, BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import html2pdf from 'html2pdf.js'
import '../styles/vars.css'

import photo_cv from '../assets/img/photo_cv.png'
import resume_pdf from '../assets/pdf/CV_Dmitry_Hussarov_Junior_Frontend_Developer_React.pdf'

import ScrollToTop from './ScrollToTop'
import ThemeToggler from './ThemeToggler'
import { Grid } from './SharedStyle'


const Home = ({areaCV}) => {
  const [isGeneratePdf, setIsGeneratePdf] = useState(false)
  const [element, view] = useInView({threshold: 0})

  const generatePdfHandler = () => {
    const options = {
      margin: 0,
      filename: 'CV_Dmitry_Hussarov_Junior_Frontend_Developer_React.pdf',
      image: {type: 'jpeg', quality: 1},
      html2canvas: {scale: 4},
      jsPDF: {format: 'a4', orientation: 'portrait'}
    }
    const paddingValue = window.innerWidth - document.body.offsetWidth

    setIsGeneratePdf(true)
    document.body.style.overflowY = "hidden"
    document.body.style.paddingRight = `${paddingValue}px`
    html2pdf(areaCV.current, options)
    setTimeout(() => {
      document.body.style.paddingRight = "0"
      document.body.style.overflowY = "auto"
      setIsGeneratePdf(false)
    }, 5000)
  }

  return (
    <HomeStyled id='home' ref={element}>
      <Container>
        <Data>
          <ImgBox>
            <img src={photo_cv} alt='photo_cv'/>
          </ImgBox>
          <Title>Дмитрий <b>Гусаров</b></Title>
          <Profession>Junior Frontend Developer, React</Profession>
          <div>
            <ButtonMovil
              href={resume_pdf}
              download='CV_Dmitry_Hussarov_Junior_Frontend_Developer_React.pdf'
            >Скачать PDF</ButtonMovil>
          </div>
        </Data>

        <Address>
          <Information>
            <BiMap />Украина, Днепр
          </Information>

          <Information>
            <BiEnvelope />dmitry.hussarov@gmail.com
          </Information>

          <Information>
            <BiPhone />+380966045600
          </Information>
        </Address>
      </Container>

      {!isGeneratePdf && <ThemeToggler />}

      {!isGeneratePdf && <Download onClick={generatePdfHandler}>
        <BiDownload title='Generate PDF'/>
      </Download>}

      {!view && <ScrollToTop/>}

    </HomeStyled>
  )
}

const HomeStyled = styled.section`
  position: relative;
`
const Container = styled(Grid)`
  gap: 2rem;
  padding: 1rem 0;

  @media screen {
    @media (min-width: 968px) {
      gap: 1.5rem;
    }
  }
`
const Data = styled(Grid)`
  gap: 1rem;
  text-align: center;
`
const ImgBox = styled.div`
  position: relative;
  justify-self: center;
  width: 180px;
  height: 180px;
  margin-bottom: var(--mb-1);
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 239px;
    height: 318px;
    object-fit: cover;
    transform: translate(-47%, -51%);
  }
`
const Title = styled.h1`
  font-size: var(--h1-font-size);
`
const Profession = styled.h3`
  margin-bottom: var(--mb-1);
  font-size: var(--normal-font-size);
`
const Address = styled(Grid)`
  gap: 1rem;
`
const Information = styled.span`
  display: flex;
  align-items: center;
  font-size: var(--small-font-size);

  svg {
    font-size: 1.2rem;
    margin-right: 0.6rem;
  }
`
const ButtonMovil = styled.a`
  display: inline-block;
  margin-top: var(--mb-1);
  padding: 0.7rem 1.4rem;
  border: 2px solid var(--text-color);
  border-radius: 0.25rem;
  font-weight: var(--font-medium);
  color: var(--title-color);

  &:active {
    background-color: var(--text-color);
    color: var(--container-color);
  }

  @media screen {
    @media (min-width: 968px) {
      display: none;
    }
  }
`
const Download = styled.div`
  position: absolute;
  top: 1.7rem;
  left: 0;
  display: none;
  font-size: 1.5rem;
  color: var(--text-color);
  cursor: pointer;

  &:hover {
    color: var(--title-color);
  }
  
  @media screen {
    @media (min-width: 968px) {
      display: flex;
    }
  }
`

export default Home
