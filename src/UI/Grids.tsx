import styled from 'styled-components'
import theme from '../styles/theme'

export const Container = styled.div`
  position: relative;
  padding: ${({ setPadding }) => setPadding || null};
  margin: ${theme.spacing.multiples.auto};

  width: ${theme.width.fullWidth};

  @media screen and (min-width: 768px) {
    width: ${theme.width.medium};
  }
  @media screen and (min-width: 1200px) {
    width: ${theme.width.large};
  }
  @media screen and (min-width: 1366px) {
    width: ${theme.width.extraLarge};
  }
`
export const ContainerFluid = styled.div`
  position: relative;
  width: ${theme.width.fullWidth};
  background: ${props => props.setBackground};
`
export const HalfContainer = styled.div`
  width: ${theme.width.fullWidth};
  @media screen and (min-width: 1200px) {
    width: ${theme.width.halfWidth};
  }
`

export const Grid = styled.div`
  padding: ${({ setPadding }) => setPadding || null};
  display: grid;
  row-gap: ${theme.spacing.multiples.large};
  column-gap: ${theme.spacing.multiples.large};

  @media screen and (min-width: 768px) {
    grid-template-columns: ${props => props.columnsTablet};
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: ${props => props.columnsDesktop};
  }
`
