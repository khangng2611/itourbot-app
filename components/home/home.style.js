import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  welcomeMessage: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    marginTop: 2,
  },
  searchContainer : {

  },
  searchBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.medium,
    height: '100%',
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnImage: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.primary,
  },
  btnWrapper: {
    flexDirection: 'row',
    marginVertical: SIZES.xSmall,
    justifyContent: 'space-between',
  },
  loading : {
    marginVertical: SIZES.xxSmall,
    color: COLORS.primary,
  }, 
  searchResultWrapper: {
    marginTop: SIZES.xSmall,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchResultItem: {
    paddingVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.xSmall,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: SIZES.medium,
    margin: 3
  },
  mainFeatBtn: (screenHeight) => ({
    height: screenHeight / 9,
    borderRadius: SIZES.medium,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  mainFeatText: {
    fontFamily: FONT.medium,
    color: COLORS.primary,
    fontSize: SIZES.large,
    position: 'absolute',
  },
  // popular stations
  popularStationContainer: (windowHeight) => ({
    height: 0.55*windowHeight,
    marginTop: SIZES.small,
    marginBottom: SIZES.xxLarge
  }),
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    flex: 1,
  },
});

export default styles;
