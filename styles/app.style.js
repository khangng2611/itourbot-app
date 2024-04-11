import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../constants';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  container: {
    padding: SIZES.medium,
  },
  tabBarStyle: {
    paddingTop: 5,
    backgroundColor: COLORS.lightWhite,
    // borderRadius: SIZES.xLarge,
    // marginHorizontal: 5
  },
  tabBarLogo: (color) => ({
    width: 25,
    tintColor: color,
  }),
});

export default styles;
