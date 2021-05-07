import styled from 'styled-components'
import theme from '../styles/theme'
import { CaptionMadaRegular } from './Typography'

// from PageLoader.tsx
export const Loader = styled.div`
  height: 100vh;
  width: ${theme.width.fullWidth};
  background: ${theme.colours.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    animation: loadingAnimation 2s linear infinite;

    @keyframes loadingAnimation {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
`

// from Navbar.tsx
export const Nav = styled.nav`
  padding: ${theme.spacing.leftRightTopBottom.large};
  margin: ${theme.spacing.multiples.auto};

  width: ${theme.width.fullWidth};

  ul {
    list-style: none;
    li {
      display: inline-block;
      margin: ${theme.spacing.right.medium};
      font: ${theme.typography.desktop.captions};
      & > a {
        text-decoration: none;
        color: ${theme.colours.grey[800]};
        padding: ${theme.spacing.bottom.extraSmall};

        &:hover {
          border-bottom: 2px solid ${theme.colours.primary};
          color: ${theme.colours.primary};
          transition: 0.2s ease-in-out color;
        }
      }
    }
  }
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
// from Hero.tsx
export const HeroAppImage = styled.img`
  width: ${theme.width.fullWidth};
  margin-bottom: -120px;

  @media screen and (min-width: 768px) {
    width: 320px;
    margin-left: auto;
  }

  @media screen and (min-width: 1200px) {
    width: 478px;
    position: absolute;
    right: 0;
    top: -80px;
  }
`
export const HeroCover = styled.div`
  width: ${theme.width.fullWidth};
  padding: ${theme.spacing.topBottom.medium};
  background: linear-gradient(
      180deg,
      rgba(236, 116, 128, 0) -49.18%,
      #ec7480 100%
    ),
    url('/assets/background-hero-artfol.jpg') no-repeat center center / cover;
  position: relative;

  img:not(${HeroAppImage}) {
    width: 140px;
    margin: ${theme.spacing.right.small};
  }

  @media screen and (min-width: 1200px) {
    img:not(${HeroAppImage}) {
      width: 200px;
      margin: ${theme.spacing.right.large};
    }
  }
`

// from Secondary.tsx
export const Cards = styled.div`
  display: flex;
  flex-direction: column;

  width: ${theme.width.fullWidth};
  height: 300px;

  border-radius: 5px;
  padding: ${theme.spacing.multiples.small};

  text-transform: uppercase;
  transition: background 1s ease-in;

  p:nth-of-type(3) {
    margin-top: auto;
  }

  background: linear-gradient(
      179.66deg,
      rgba(236, 116, 128, 0) -20%,
      #ec7480 20%
    ),
    url(${props => props.background}) no-repeat center / cover;

  @media screen and (min-width: 1024px) {
    flex-direction: column-reverse;

    background: linear-gradient(
        179.65deg,
        rgba(236, 116, 128, 0) 10%,
        #ec7480 100%
      ),
      url(${props => props.background}) no-repeat bottom center / cover;

    ${CaptionMadaRegular} {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.5s linear;
    }
    &:hover {
      flex-direction: column;
      transition: background 1s ease-in;

      background: linear-gradient(
          179.66deg,
          rgba(236, 116, 128, 0) -20%,
          #ec7480 20%
        ),
        url(${props => props.background}) no-repeat center / cover;

      ${CaptionMadaRegular} {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    height: 460px;
  }
`

// from Faqs.tsx
export const ToggleFaqs = styled.div`
  svg {
    width: 15px;
    margin: ${theme.spacing.right.small};
    color: ${theme.colours.primary};
  }
  @media screen and (min-width: 1200px) {
    &:hover {
      opacity: 0.5;
      cursor: pointer;
      transition: 0.5s ease-in-out opacity;
    }
  }
`

// from Footer.tsx
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    li {
      display: inline-block;
      margin: ${theme.spacing.right.medium};
      padding: ${theme.spacing.topBottom.medium};
      &:hover {
        opacity: 0.3;
        transition: 0.5s ease-in-out opacity;
      }
    }
  }
  svg {
    width: 20px;
    color: ${theme.colours.grey[100]};
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`
