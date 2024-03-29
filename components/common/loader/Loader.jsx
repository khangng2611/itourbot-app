import { useWindowDimensions, View, Text, ActivityIndicator } from 'react-native';
import { COLORS } from '../../../constants';
import styles from './loader.style';

const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[styles.container, {width, height}]}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.lightWhite} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    )
  );
};

export default Loader;