
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const COLORS = {
  back_afc_color: "#951D1D",
  detail_color: "#EFEFEF",
  primary: "#2A4D50",
  secondary: "#DDF0FF",
  tertiary: "#FF7754",

  gray1: "#BEBEBE",
  gray2: "#6C6C6C",
  gray3 : "888888",

  white: "#F8F8F8",
  black: "#101010",

};


const SIZES = {
  xSmall: 10,
  small13: 13,
  small14: 14,
  medium16: 16,
  medium16: 16,
  medium18: 18,

  large22: 22,
  xLarge24: 24,
  xxLarge: 44,
  height,
  width
};


const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};


export { COLORS, SIZES , SHADOWS };
