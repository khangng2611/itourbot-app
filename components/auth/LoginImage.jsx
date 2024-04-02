import { images } from "../../constants";
import { Image } from "react-native";
import styles from "./auth.style";

const LoginImage = () => {
    return (
        <Image
            source={images.botLogin}
            resizeMode="contain"
            style={styles.botImage}
        />
    )
}; 

export default LoginImage;
