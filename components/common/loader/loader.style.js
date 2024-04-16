import { StyleSheet } from 'react-native';
import { FONT, COLORS, SIZES } from '../../../constants';

const styles = StyleSheet.create({
  loader: {
    height: 70,
    width: '40%',
    alignSelf: 'center',
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  loadingText: {
    marginLeft: SIZES.small,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
});

export default styles;
