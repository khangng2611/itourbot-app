import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./toursrequest.style";
import { useRouter } from 'expo-router';
import { icons } from "../../constants";

export default function RequestHeader() {
    const router = useRouter();
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                onPress={() => router.back()}
            >
                <Image source={icons.left} resizeMode='contain' style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Tours Request</Text>
        </View>
    )
};