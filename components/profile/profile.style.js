import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.large,
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: COLORS.secondary,
    paddingVertical: 5
  },
  titleText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
    width: '20%'
  },
  infoText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary
  },
  signOutBtn: {
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.red,
    borderRadius: SIZES.small,
    marginTop: SIZES.large
  },
  signOutText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.red
  }
});

export default styles;
