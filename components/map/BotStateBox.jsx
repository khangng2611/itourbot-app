import { View, Text } from 'react-native';
import styles from './map.style';

export default function BotStateBox({x, y, battery, isFree}) {
    const state = (isFree==undefined) ? "" : ((isFree) ? "READY" : "BUSY");
    const location = (x==undefined || y==undefined) ? "" :  `(${parseFloat(x).toFixed(2)}, ${parseFloat(y).toFixed(2)})`;
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.botStateRow}>
                <Text style={styles.botStateTitle}>Turtlebot's location:</Text>
                <Text style={styles.botStateValue}>{location}</Text>
            </View>
            <View style={styles.botStateRow}>
                <Text style={styles.botStateTitle}>Turtlebot's battery:</Text>
                <Text style={styles.botStateValue}>{battery}%</Text>
            </View>
            <View style={styles.botStateRow}>
                <Text style={styles.botStateTitle}>Turtlebot's state: </Text>
                <Text style={styles.botStateValue}>{state}</Text>
            </View>
        </View>
    )
}
