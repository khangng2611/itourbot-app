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
    marginRight: 5,
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
    marginVertical: 5,
  },
  stationWrapper: (stationsList, stationId) => ({
    paddingVertical: 5,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: stationsList.includes(stationId) ? COLORS.green : COLORS.secondary,
  }),
  stationText: {
    fontFamily: FONT.regular, 
    fontSize: SIZES.medium
  },
  confirmBtn: {
    padding: SIZES.medium,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: { 
    color: COLORS.white, 
    fontFamily: FONT.medium, 
    fontSize: SIZES.medium
  }, 
  flatlistStyle: {
    rowGap: 5,
    flex: 1,
  }
});
export default styles;
