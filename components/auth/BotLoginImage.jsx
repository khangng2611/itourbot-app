import { images } from "../../constants";
import { Image } from "react-native";
import styles from "./auth.style";

const BotLoginImage = () => {
    return (
        <Image
            source={images.botLogin}
            resizeMode="contain"
            style={styles.botImage}
        />
    )
}; 

export default BotLoginImage;
