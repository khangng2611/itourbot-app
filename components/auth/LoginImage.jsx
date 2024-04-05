import { images } from "../../constants";
import { Image, useWindowDimensions } from "react-native";
import styles from "./auth.style";

const LoginImage = () => {
    const windowHeight = useWindowDimensions().height;
    return (
        <Image
            source={images.botLogin}
            resizeMode="contain"
            style={styles.botImage(windowHeight)}
        />
    )
}; 

export default LoginImage;
