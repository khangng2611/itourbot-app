import { StyleSheet } from 'react-native';
import {
  COLORS, FONT, SHADOWS, SIZES,
} from '../../../constants';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.medium,
    padding: SIZES.large,
    marginHorizontal: SIZES.large,
    alignItems: 'center',
    ...SHADOWS.medium,
    elevation: 5,
    minWidth: '70%',
  },
  headerText: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.green,
  },
  contentText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginVertical: SIZES.xxSmall,
  },
  btnWrapper: {
    marginTop: SIZES.xxSmall,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: SIZES.small,
    padding: SIZES.xSmall,
    elevation: 2,
    height: 40,
    minWidth: 100,
    marginHorizontal: SIZES.medium,
    ...SHADOWS.small,
  },
  cancelBtn: {
    borderWidth: 1,
    borderColor: COLORS.red,
    backgroundColor: COLORS.lightWhite,
  },
  confirmBtn: {
    borderWidth: 1,
    borderColor: COLORS.green,
    backgroundColor: COLORS.lightWhite,
  },
  infoBtn: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.lightWhite,
  },
  btnText: {
    fontFamily: FONT.medium,
    textAlign: 'center',
  },
  inforText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
    alignSelf: 'flex-start',
  },
  stationText: {
    color: COLORS.green,
    fontFamily: FONT.bold,
  },
});

export default styles;
