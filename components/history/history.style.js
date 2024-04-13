import { StyleSheet } from 'react-native';
import {
  COLORS, FONT, SHADOWS, SIZES,
} from '../../constants';

const styles = StyleSheet.create({
  switchBar: {
    paddingHorizontal: SIZES.medium,
  },
  switchBarTextStyle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
  container: {
    marginVertical: SIZES.medium,
    paddingHorizontal: SIZES.small,
    flex: 1,
  },
  itemWrapper: {
    marginVertical: SIZES.xSmall,
    marginHorizontal: 5,
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
    marginBottom: 5,
  },
  statusText: (color, size) => ({
    fontFamily: FONT.medium,
    color,
    fontSize: size,
  }),
  statusWrapper: (background) => ({
    backgroundColor: background,
    borderRadius: SIZES.xSmall,
    padding: 5,
  }),
  contentWrapper: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBlockColor: '#D9D9D9',
    paddingVertical: SIZES.small,
    marginLeft: 5,
    alignItems: 'flex-start'
  },
  stationText: (size) => ({
    fontFamily: FONT.medium,
    color: COLORS.primary,
    fontSize: size,
  }),
  forwardIcon: {
    tintColor: COLORS.secondary,
    resizeMode: 'contain',
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  ongoingContentWrapper: {
    marginTop: 5,
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
    marginRight: 5,
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
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
  },
});

export default styles;
