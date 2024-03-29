import { Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./stationcard.style";
import { icons } from "../../../constants";

const LoveWrapper = ({ size }) => {
    const [loved, setLoved] = useState(false);
    const handleLovePress = () => {
        setLoved(!loved);
    }
    return (
        <TouchableOpacity
            style={styles.loveWrapper(size)}
            onPress={() => handleLovePress()}
        >
            <Image source={loved ? icons.heart : icons.heartOutline } resizeMode='contain' style={styles.loveIcon(size)} />
        </TouchableOpacity>
    );
};

export default LoveWrapper;