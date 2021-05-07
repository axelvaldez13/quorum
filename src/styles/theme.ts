const theme = {
  colours: {
    grey: {
      100: '#fff',
      200: '#F5F5F5',
      800: '#3A3A3A'
    },
    primary: '#EC7480'
  },
  typography: {
    desktop: {
      heading: '400 40px/48px Paytone One, sans-serif',
      subheading: '400 32px/40px Paytone One, sans-serif',
      paragraphBold: '700 24px/32px Mada, sans-serif',
      paragraphRegular: '400 24px/32px Mada, sans-serif',
      captions: '400 16px/24px Paytone One, sans-serif',
      captionsMadaRegular: '400 16px/24px Mada, sans-serif',
      captionsMadaBold: '700 16px/24px Mada, sans-serif'
    },
    mobile: {
      heading: '400 32px/40px Paytone One, sans-serif',
      subheading: '400 24px/32px Paytone One, sans-serif',
      paragraphBold: '700 16px/24px Mada, sans-serif',
      paragraphRegular: '400 16px/24px Mada, sans-serif',
      captions: '400 12px/16px Paytone One, sans-serif',
      captionsMadaRegular: '400 12px/16px Mada, sans-serif',
      captionsMadaBold: '700 12px/16px Mada, sans-serif'
    }
  },
  width: {
    fullWidth: '100%',
    halfWidth: '50%',
    extraLarge: '1200px',
    large: '992px',
    medium: '700px',
    small: '320px',
    extraSmall: '300px'
  },
  spacing: {
    topBottom: {
      super: '80px 0',
      extra: '40px 0',
      large: '32px 0',
      medium: '24px 0',
      small: '16px 0'
    },
    leftRight: {
      extra: '0 40px',
      large: '0 32px',
      medium: '0 24px',
      small: '0 16px'
    },
    leftRightTopBottom: {
      super: '80px 16px',
      extra: '40px 16px',
      large: '32px 16px',
      medium: '24px 16px',
      small: '16px'
    },
    bottom: {
      extraLarge: '0 0 40px 0',
      large: '0 0 32px 0',
      medium: '0 0 24px 0',
      small: '0 0 16px 0',
      extraSmall: '0 0 8px 0'
    },
    top: {
      extraLarge: '40px 0 0 0',
      large: '32px 0 0 0',
      medium: '24px 0 0 0',
      small: '16px 0 0 0',
      extraSmall: '8px 0 0 0'
    },
    right: {
      extraLarge: '0 40px 0 0',
      large: '0 32px 0 0',
      medium: '0 24px 0 0',
      small: '0 16px 0 0',
      extraSmall: '0 8px 0 0',
      none: '0'
    },
    left: {
      extraLarge: '0 0 0 40px',
      large: '0 0 0 32px',
      medium: '0 0 0 24px',
      small: '0 0 0 16px',
      extraSmall: '0 0 0 8px'
    },
    multiples: {
      extraLarge: '40px',
      large: '32px',
      medium: '24px',
      small: '16px',
      extraSmall: '8px',
      auto: '0 auto',
      none: '0'
    }
  },
  columns: {
    twoColumns: '1fr 1fr',
    threeColumns: '1fr 1fr 1fr',
    fourColumns: '1fr 1fr 1fr 1fr'
  }
}

export default theme
