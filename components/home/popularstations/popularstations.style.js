import { StyleSheet } from 'react-native';
import { FONT, SIZES, COLORS } from '../../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.small,
  },
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
