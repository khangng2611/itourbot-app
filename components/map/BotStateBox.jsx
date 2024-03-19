import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, FONT, SIZES } from "../../constants";

export default function BotStateBox({x, y, battery, isFree}) {
    const state = (isFree==undefined) ? "" : ((isFree) ? "READY" : "BUSY");
    const location = (x==undefined || y==undefined) ? "" :  `(${parseFloat(x).toFixed(2)}, ${parseFloat(y).toFixed(2)})`;
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.row}>
                <Text style={styles.title}>Turtlebot's location:</Text>
                <Text style={styles.value}>{location}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Turtlebot's battery:</Text>
                <Text style={styles.value}>{battery}%</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Turtlebot's state: </Text>
                <Text style={styles.value}>{state}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.small,
    },
    title: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.primary,
    },
    value: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },
});