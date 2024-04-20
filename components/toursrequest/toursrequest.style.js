import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    padding: SIZES.medium,
  },
  container: {
    paddingHorizontal: SIZES.medium,
    flex: 1,
  },
  backIcon: {
    alignSelf: 'center',
    tintColor: COLORS.primary,
    width: SIZES.xxLarge,
    height: SIZES.xxLarge,
    marginRight: SIZES.xxSmall,
  },
  headerTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  title: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginVertical: SIZES.xxSmall,
  },
  stationWrapper: (stationsList, stationId) => ({
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: stationsList.includes(stationId) ? COLORS.green : COLORS.secondary,
  }),
  stationText: (stationsList, stationId) => ({
    fontFamily: FONT.medium, 
    fontSize: SIZES.medium,
    color: stationsList.includes(stationId) ? COLORS.green : COLORS.secondary,
  }),
  confirmBtn: (isFree) => ({
    padding: SIZES.medium,
    backgroundColor: isFree ? COLORS.primary : COLORS.gray2,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  confirmText: { 
    color: COLORS.white, 
    fontFamily: FONT.medium, 
    fontSize: SIZES.medium
  }, 
  flatlistStyle: {
    rowGap: SIZES.xSmall,
    flex: 1,
    marginHorizontal: SIZES.xSmall
  }
});
export default styles;
