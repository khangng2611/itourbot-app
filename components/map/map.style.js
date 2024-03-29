import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  botStateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
  },
  botStateTitle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  botStateValue: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  locationSpot: (leftPosition, bottomPosition) => ({
    position: 'absolute',
    left: leftPosition,
    bottom: bottomPosition,
  }),
  mapImage: {
    flex: 2,
    width: '100%',
    objectFit: 'contain',
  },
});

export default styles;
