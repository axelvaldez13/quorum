import React from 'react'

// user interface
import { Container, Grid } from '../UI/Grids'
import { HeadingOne } from '../UI/Typography'
import { HeroCover, HeroAppImage } from '../UI/Pages'

// images
import Logo from '../assets/logo.svg'

// data
import data from '../data/data'
import theme from '../styles/theme'

const Hero: React.FC = () => {
  return (
    <HeroCover>
      <Container setPadding={theme.spacing.leftRightTopBottom.extra}>
        <Grid columnsDesktop={theme.columns.twoColumns}>
          <div>
            <Logo />
            <HeadingOne
              setPadding={theme.spacing.topBottom.large}
              setColor={theme.colours.grey[100]}
            >
              {data.hero.text.title}
            </HeadingOne>
            {data.hero.nativeApp.map(app => (
              <a href="http://google.com" key={app.id}>
                <img src={app.src} />
              </a>
            ))}
          </div>
          <HeroAppImage src="/assets/app-screens-artfol.png" />
        </Grid>
      </Container>
    </HeroCover>
  )
}

export default Hero
