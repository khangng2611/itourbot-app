import { Image, TouchableOpacity } from "react-native";
import styles from "./stationcard.style";
import { icons } from "../../../constants";
import { useRouter } from "expo-router";

const BackWrapper = () => {
    const router = useRouter();
    const handleBackPress = () => { 
        router.back();
    }
    return (
        <TouchableOpacity
            style={styles.backWrapper}
            onPress={() => handleBackPress()}
        >
            <Image source={icons.left} resizeMode='contain' style={styles.backIcon} />
        </TouchableOpacity>
    );
};

export default BackWrapper;