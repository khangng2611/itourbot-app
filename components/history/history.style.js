import { StyleSheet } from 'react-native';
import {
  COLORS, FONT, SHADOWS, SIZES,
} from '../../constants';

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SIZES.medium,
    marginBottom: SIZES.xxSmall,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  headerBtn: {
    alignItems: 'center',
  },
  switchBar: {
    paddingHorizontal: SIZES.medium,
  },
  switchBarTextStyle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
  listContainer: {
    marginVertical: SIZES.xxSmall,
    paddingHorizontal: SIZES.small,
    flex: 1,
  },
  itemWrapper: {
    marginVertical: SIZES.xSmall,
    marginHorizontal: SIZES.xxSmall,
    padding: SIZES.small,
    borderBlockColor: COLORS.lightWhite,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.small,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: SIZES.xxSmall,
  },
  statusBox: {
    paddingHorizontal: SIZES.large,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  statusText: (color, size) => ({
    fontFamily: FONT.medium,
    color,
    fontSize: size,
  }),
  statusWrapper: (background) => ({
    backgroundColor: background,
    borderRadius: SIZES.xSmall,
    padding: SIZES.xxSmall,
  }),
  contentWrapper: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBlockColor: '#D9D9D9',
    paddingVertical: SIZES.small,
    marginLeft: SIZES.xxSmall,
    alignItems: 'flex-start',
  },
  fromStationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  toStationBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  toStationListWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: SIZES.xxSmall,
    columnGap: SIZES.xxSmall,
  },
  stationWrapper: {
    borderColor: COLORS.secondary,
    borderWidth: 1,
    paddingHorizontal: SIZES.xxSmall,
    paddingVertical: 3,
    borderRadius: SIZES.medium,
  },
  stationText: (size) => ({
    fontFamily: FONT.medium,
    color: COLORS.primary,
    fontSize: size,
    alignSelf: 'center',
  }),
  footer: {
    flexDirection: 'row',
    marginTop: SIZES.xxSmall,
    justifyContent: 'space-between',
  },
  // ongoingContentWrapper: {
  //   marginTop: SIZES.xxSmall,
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   borderBottomWidth: 1,
  //   borderTopWidth: 1,
  //   borderBlockColor: '#D9D9D9',
  //   paddingVertical: SIZES.medium,
  // },
  // ongoingSideContentWrapper: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   flex: 1
  // },
  icon: (size) => ({
    resizeMode: 'contain',
    width: size,
    height: size,
    marginRight: SIZES.xxSmall,
  }),
  stopBtn: {
    width: '60%',
    justifyContent: 'center',
    marginTop: SIZES.small,
    marginBottom: SIZES.xLarge,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: COLORS.red,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  stopBtnText: {
    color: COLORS.red,
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  },
});

export default styles;
