import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, icons } from "../../constants";
import styles from "./history.style";

const HistoryHeader = () => {
    const router = useRouter();
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Your tours</Text>
            <TouchableOpacity
                onPress={() => router.push("/(app)/tours-request")}
                style={styles.headerBtn}
            >
                <Image source={icons.plus} style={styles.icon(SIZES.xLarge)} />
                <Text style={styles.stationText(SIZES.small)}>New Tour</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HistoryHeader;