import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.xSmall,
    height: '10%',
    paddingTop: SIZES.xSmall,
  },
  button: (isFree) => ({
    paddingHorizontal: SIZES.medium,
    alignSelf: 'flex-end',
    borderRadius: SIZES.large,
    backgroundColor: isFree ? COLORS.tertiary : COLORS.gray2,
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
    borderRadius: 8,
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
