const COLORS = {
  primary: '#2F2F2F',
  secondary: '#888888',
  tertiary: '#2196F3', // blue

  gray: '#83829A',
  gray2: '#C1C0C8',

  white: '#F3F4F8',
  lightWhite: '#FAFAFC',

  lightgreen: '#EAFAEB',
  green: '#4CAF50',

  lightyellow: '#FEF7EC',
  yellow: '#F2AB58',

  lightred: '#FFB5B5',
  red: '#FF0000',

  blue: '#2196F3',
};

const FONT = {
  regular: 'DMRegular',
  medium: 'DMMedium',
  bold: 'DMBold',
};

const SIZES = {
  xxSmall: 5,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: SIZES.xxSmall,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: SIZES.xxSmall,
    elevation: 5,
  },
};

export {
  COLORS, FONT, SIZES, SHADOWS,
};
