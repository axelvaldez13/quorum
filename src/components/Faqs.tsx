import React, { useState } from 'react'
import data from '../data/data'
import theme from '../styles/theme'
import { Container, ContainerFluid, Grid } from '../UI/Grids'
import { HeadingTwo, ParagraphBold, ParagraphRegular } from '../UI/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { ToggleFaqs } from '../UI/Pages'

const Faqs: React.FC = () => {
  const [open, setOpen] = useState(0)

  return (
    <ContainerFluid setBackground={theme.colours.grey[200]} id={'FAQsSection'}>
      <Container setPadding={theme.spacing.leftRightTopBottom.extra}>
        <HeadingTwo>FAQ</HeadingTwo>
        <Grid
          setPadding={theme.spacing.topBottom.extra}
          columnsTablet={theme.columns.twoColumns}
        >
          {data.faq.map(dato => (
            <ToggleFaqs key={dato.id} onClick={() => setOpen(dato.id)}>
              <ParagraphBold>
                <FontAwesomeIcon icon={faPlay} />
                {dato.title}
              </ParagraphBold>
              {open !== dato.id ? null : (
                <ParagraphRegular setPadding={theme.spacing.left.large}>
                  {dato.text}
                </ParagraphRegular>
              )}
            </ToggleFaqs>
          ))}
        </Grid>
      </Container>
    </ContainerFluid>
  )
}

export default Faqs
