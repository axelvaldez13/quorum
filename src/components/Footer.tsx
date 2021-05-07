import React from 'react'
import theme from '../styles/theme'
import { Container, ContainerFluid } from '../UI/Grids'
import { CaptionMadaBold } from '../UI/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FooterContent } from '../UI/Pages'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
  return (
    <ContainerFluid setBackground={theme.colours.grey[800]}>
      <Container setPadding={theme.spacing.leftRightTopBottom.small}>
        <FooterContent>
          <ul>
            <li>
              <a href="http://google.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="http://google.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          </ul>
          <CaptionMadaBold setColor={theme.colours.grey[100]}>
            @Copyright 2021 Artfol Ltd. All Rights Reserved
          </CaptionMadaBold>
        </FooterContent>
      </Container>
    </ContainerFluid>
  )
}

export default Footer
