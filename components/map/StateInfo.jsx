import { View, Text } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import styles from './map.style';
import { COLORS, SIZES } from '../../constants';

export default function StateInfo({ x, y, battery, isFree }) {
    const state = (isFree == undefined) ? "" : ((isFree) ? "READY" : "BUSY");
    const location = (x == undefined || y == undefined) ? "" : `(${parseFloat(x).toFixed(2)}, ${parseFloat(y).toFixed(2)})`;
    return (
        <View style={styles.stateWrapper}>
            <CircularProgress
                value={battery || 0}
                activeStrokeWidth={SIZES.small}
                // radius={90}
                duration={2000}
                progressValueColor={COLORS.white}
                maxValue={100}
                title="Battery"
                titleColor={COLORS.white}
                titleStyle={{ fontWeight: 'bold' }}
            />
            <View style={styles.rightInfoWrapper}>
                <View style={styles.isFreeWrapper(state)}>
                    <Text style={styles.infoTitle}>Status: </Text>
                    <Text style={styles.isFreeText}>{state}</Text>
                </View>
                <View style={styles.locationWrapper}>
                    <Text style={styles.infoTitle}>Location: </Text>
                    <Text style={styles.isFreeText}>{location}</Text>
                </View>
            </View>
        </View>
    )
}
