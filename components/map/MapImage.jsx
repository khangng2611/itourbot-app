import { images } from "../../constants";
import { Image } from "react-native";
import styles from "./map.style";

export default function MapImage() {
    return (
        <Image
            source={images.map}
            style={styles.mapImage}
        />
    )
}
