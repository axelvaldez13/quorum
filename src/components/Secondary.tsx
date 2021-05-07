import React from 'react'
import data from '../data/data'
import theme from '../styles/theme'
import { Container, Grid, HalfContainer } from '../UI/Grids'
import { Cards } from '../UI/Pages'
import {
  Caption,
  CaptionMadaRegular,
  HeadingTwo,
  ParagraphRegular
} from '../UI/Typography'

const Secondary: React.FC = () => {
  return (
    <Container setPadding={theme.spacing.leftRightTopBottom.super}>
      <HalfContainer>
        <HeadingTwo setPadding={theme.spacing.bottom.small}>
          {data.secondary.text.title}
        </HeadingTwo>
        <ParagraphRegular setPadding={theme.spacing.bottom.large}>
          {data.secondary.text.subtitle}
        </ParagraphRegular>
      </HalfContainer>
      <Grid
        columnsTablet={theme.columns.twoColumns}
        columnsDesktop={theme.columns.fourColumns}
      >
        {data.secondary.cards.map(card => (
          <Cards key={card.id} background={card.src}>
            <Caption
              setColor={theme.colours.grey[100]}
              setPadding={theme.spacing.bottom.small}
            >
              {card.title}
            </Caption>
            <CaptionMadaRegular
              setColor={theme.colours.grey[100]}
              setPadding={theme.spacing.bottom.medium}
            >
              {card.text}
            </CaptionMadaRegular>
            <CaptionMadaRegular
              setColor={theme.colours.grey[100]}
              setMargin={theme.spacing.bottom.medium}
            >
              {card.creator}
            </CaptionMadaRegular>
          </Cards>
        ))}
      </Grid>
    </Container>
  )
}

export default Secondary
