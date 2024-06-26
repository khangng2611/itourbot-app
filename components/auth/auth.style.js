import { StyleSheet } from 'react-native';
import {
  COLORS, FONT, SIZES, SHADOWS,
} from '../../constants';

const styles = StyleSheet.create({
  botImage: (windowHeight) => ({
    width: '100%',
    height: 0.5 * windowHeight,
    objectFit: 'contain',
  }),
  formContainer: {
    paddingHorizontal: SIZES.xLarge,
  },
  authBtn: {
    marginTop: SIZES.large,
    marginBottom: SIZES.medium,
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: SIZES.medium,
    ...SHADOWS.small,
  },
  authBtnText: {
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
  returnSigninText: {
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    alignSelf: 'center',
  },
  signupText: {
    marginTop: SIZES.medium,
    fontSize: SIZES.medium,
    // fontStyle: 'italic',
    color: COLORS.secondary,
    alignSelf: 'center',
  },
  oauthContainer: {
    paddingHorizontal: SIZES.xLarge,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    color: COLORS.primary,
  },
  oauthLogo: {
    resizeMode: 'contain',
    width: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,

  },
  forgotPasswordText: {
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  passcodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.medium,
  },
  digitInput: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: SIZES.xSmall,
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: SIZES.large,
    marginHorizontal: SIZES.xSmall,
  },
});

export default styles;
