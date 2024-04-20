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
    alignItems: 'flex-start'
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
  ongoingContentWrapper: {
    marginTop: SIZES.xxSmall,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBlockColor: '#D9D9D9',
    paddingVertical: SIZES.medium,
  },
  ongoingSideContentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.xLarge,
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
