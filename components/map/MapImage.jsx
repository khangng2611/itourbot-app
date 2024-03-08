import { images } from "../../constants";
import { Image } from "react-native";

export default function MapImage() {
    return (
        <Image
            source={images.map}
            style={{
                flex:2,
                width: "100%",
                objectFit: "contain",
            }}
        />
    )
}
