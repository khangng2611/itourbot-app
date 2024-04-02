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
  forgotText: {
    fontSize: SIZES.medium,
    fontStyle: 'italic',
    color: COLORS.tertiary,
    alignSelf: 'center'
  },
  oauthContainer: {
    paddingHorizontal: SIZES.xLarge,
    flexDirection: 'row', 
    justifyContent: 'space-around' 
  },
  oauthBtn: {
    marginVertical: SIZES.medium,
    width: '45%',
    height: 50,
    backgroundColor: COLORS.lightWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    ...SHADOWS.small,
    flexDirection: 'row',
  },
  oauthText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.tertiary,
  },
  oauthLogo: {
    resizeMode: 'contain',
    width: 30,
    marginRight: 10
  }
});

export default styles;
