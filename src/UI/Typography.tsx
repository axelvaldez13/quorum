import styled from 'styled-components'
import theme from '../styles/theme'

export const HeadingOne = styled.h1`
  font: ${theme.typography.mobile.heading};
  padding: ${({ setPadding }) => setPadding || null};
  color: ${({ setColor }) => setColor || theme.colours.grey[800]};
  @media screen and (min-width: 768px) {
    font: ${theme.typography.desktop.heading};
  }
`
export const HeadingTwo = styled.h2`
  font: ${theme.typography.mobile.subheading};
  text-transform: uppercase;
  padding: ${({ setPadding }) => setPadding || null};
  color: ${({ setColor }) => setColor || theme.colours.grey[800]};
  @media screen and (min-width: 768px) {
    font: ${theme.typography.desktop.subheading};
  }
`

export const ParagraphBold = styled.p`
  font: ${theme.typography.mobile.paragraphBold};
  padding: ${({ setPadding }) => setPadding || null};
  color: ${({ setColor }) => setColor || theme.colours.grey[800]};
  @media screen and (min-width: 768px) {
    font: ${theme.typography.desktop.paragraphBold};
  }
`

export const ParagraphRegular = styled.p`
  font: ${theme.typography.mobile.paragraphRegular};
  padding: ${({ setPadding }) => setPadding || null};
  color: ${({ setColor }) => setColor || theme.colours.grey[800]};
  @media screen and (min-width: 768px) {
    font: ${theme.typography.desktop.paragraphRegular};
  }
`

export const Caption = styled.p`
  font: ${theme.typography.desktop.captions};
  padding: ${({ setPadding }) => setPadding || null};
  color: ${({ setColor }) => setColor || theme.colours.grey[800]};
`

export const CaptionMadaRegular = styled.p`
  padding: ${({ setPadding }) => setPadding || null};
  color: ${({ setColor }) => setColor || theme.colours.grey[800]};
  font: ${theme.typography.desktop.captionsMadaRegular};
`

export const CaptionMadaBold = styled.p`
  padding: ${({ setPadding }) => setPadding || null};
  color: ${({ setColor }) => setColor || theme.colours.grey[800]};
  font: ${theme.typography.desktop.captionsMadaBold};
`
