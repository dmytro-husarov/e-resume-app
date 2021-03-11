import styled from 'styled-components'
import '../styles/vars.css'


export const Section = styled.section`
  padding: 1rem 0;
`
export const SectionTitle = styled.h2`
  margin-bottom: var(--mb-2);
  font-size: var(--h2-font-size);
  font-weight: var(--font-bold);
  color: var(--title-color);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.25rem;
  
  @media screen {
    @media (min-width: 968px) {
      text-align: initial;
    }
  }
`
export const Container = styled.div`
  width: calc(100% - 3rem);
  max-width: 480px;
  margin-left: var(--mb-3);
  margin-right: var(--mb-3);

  @media screen {
    @media (min-width: 480px) {
      margin-left: auto;
      margin-right: auto;
    }

    @media (min-width: 968px) {
      max-width: 968px;
    }
  }
`
export const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
`
