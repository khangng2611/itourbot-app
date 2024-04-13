import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  aboutContainer: {
    marginTop: SIZES.large,
  },
  aboutTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  aboutContent: {
    marginTop: SIZES.small,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    paddingBottom: SIZES.xxLarge,
    textAlign: 'justify',
  },
  requestBarContainer: {
    paddingHorizontal: SIZES.medium,
    paddingTop: SIZES.xSmall,
  },
  button: (isFree) => ({
    paddingHorizontal: SIZES.medium,
    alignSelf: 'flex-end',
    borderRadius: SIZES.xLarge,
    backgroundColor: isFree ? COLORS.primary : COLORS.gray2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }),
  sendIcon: {
    tintColor: COLORS.lightWhite,
    width: 20,
    marginLeft: SIZES.xSmall,
  },
  dropdown: {
    borderColor: COLORS.gray,
    borderWidth: 0.5,
    borderRadius: SIZES.xSmall,
    paddingHorizontal: SIZES.xSmall,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  textStyle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  requestStatus: (status) => ({
    height: 30,
    top: -SIZES.large,
    left: 0,
    right: 0,
    marginHorizontal: SIZES.medium,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: SIZES.small,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: status === 'success' ? COLORS.lightgreen : COLORS.lightred,
  }),
});
export default styles;
