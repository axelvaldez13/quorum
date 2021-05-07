import React from 'react'

// user interface
import { HeadingOne } from '../UI/Typography'
import { Loader } from '../UI/Pages'
// images
import Logo from '../assets/logo.svg'

// data
import theme from '../styles/theme'

const PageLoader: React.FC = () => {
  return (
    <Loader>
      <Logo />
      <HeadingOne
        setPadding={theme.spacing.topBottom.large}
        setColor={theme.colours.grey[100]}
      >
        Cargando...
      </HeadingOne>
    </Loader>
  )
}

export default PageLoader
