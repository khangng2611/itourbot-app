import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: 250,
    borderRadius: SIZES.large,
    marginVertical: SIZES.small,
    marginEnd: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    ...SHADOWS.medium,
  },
  cardImage: {
    borderRadius: SIZES.large,
    width: '100%',
    height: '100%'
  },
  infoWrapper: (size) => ({
    width: (size == SIZES.large) ? '90%' : '80%',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    padding: SIZES.medium,
    margin: SIZES.large,
    borderRadius: SIZES.medium,
    backgroundColor: 'black',
    opacity: 0.5
  }),
  zoneName: (size) => ({
    fontSize: size-1,
    fontFamily: FONT.bold,
    color: COLORS.white,
  }),
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  location: (size) => ({
    fontSize: size-1,
    fontFamily: FONT.medium,
    color: COLORS.white,
  }),
  locationIcon: (size) => ({
    tintColor: COLORS.white,
    width: size, 
    height: size,
    marginEnd: 5
  }),
  loveWrapper: (size) => ({
    width: 2*size,
    height: 2*size,
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    padding: size,
    margin: size-5,
    borderRadius: SIZES.xLarge,
    backgroundColor: 'black',
    opacity: 0.5
  }),
  loveIcon: (size) => ({
    alignSelf: 'center',
    tintColor: COLORS.white,
    width: size, 
    height: size,
  }),
  backWrapper: {
    width: SIZES.xxLarge,
    height: SIZES.xxLarge,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    padding: SIZES.large,
    margin: SIZES.medium,
    borderRadius: SIZES.xLarge,
    backgroundColor: 'black',
    opacity: 0.5
  },
  backIcon: {
    alignSelf: 'center',
    tintColor: COLORS.white,
    width: SIZES.xLarge, 
    height: SIZES.xLarge,
  },
});

export default styles;
