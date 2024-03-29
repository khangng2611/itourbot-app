import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  label: {
    marginTop: SIZES.small,
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.primary,
  },
  inputContainer: {
    height: 40,
    backgroundColor: COLORS.lightWhite,
    flexDirection: 'row',
    paddingHorizontal: SIZES.small,
    borderWidth: 1,
    borderRadius: SIZES.small,
  },
  hidePassword: {
    width: 20,
    height: 20,
    tintColor: COLORS.secondary,
  },
});

export default styles;
