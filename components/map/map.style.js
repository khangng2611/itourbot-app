import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  botStateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.small,
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
  stateWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.xxLarge,
    marginHorizontal: 5,
  },
  rightInfoWrapper: {
    marginVertical: SIZES.medium,
    width: '40%',
  },
  isFreeWrapper: (state) => ({
    height: '40%',
    backgroundColor: state == 'READY' ? COLORS.green : COLORS.yellow,
    borderRadius: SIZES.small,
    justifyContent: 'center',
    padding: SIZES.xSmall
  }),
  locationWrapper: {
    marginTop: SIZES.small,
    height: '40%',
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.small,
    justifyContent: 'center',
    padding: SIZES.xSmall
  },
  isFreeText: {
    flex:1,
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    alignSelf: 'center',
    color: COLORS.white
  },
  infoTitle: {
    fontFamily: FONT.medium,
    fontSize: SIZES.small,
    color: COLORS.white
  }
});

export default styles;
