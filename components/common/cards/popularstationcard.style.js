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
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    width: '80%',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    padding: SIZES.medium,
    margin: SIZES.large,
    borderRadius: SIZES.medium,
    backgroundColor: 'black',
    opacity: 0.6
  },
  zoneName: {
    fontSize: SIZES.medium-1,
    fontFamily: FONT.bold,
    color: COLORS.white,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  location: {
    fontSize: SIZES.small,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
  ratingIcon: {
    tintColor: COLORS.white,
    width: 15, 
    height: 15,
    marginEnd: 5
  }
});

export default styles;
