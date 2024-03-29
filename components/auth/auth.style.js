import { StyleSheet } from 'react-native';
import {
  COLORS, FONT, SIZES, SHADOWS,
} from '../../constants';

const styles = StyleSheet.create({
  botImage: {
    width: '100%',
    height: '50%',
    objectFit: 'cover',
  },
  formContainer: {
    paddingHorizontal: SIZES.xLarge,
  },
  loginBtn: {
    marginVertical: SIZES.large,
    height: 50,
    backgroundColor: COLORS.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: SIZES.medium,
    ...SHADOWS.small,
  },
  loginBtnText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
});

export default styles;
