import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    botImage: {
        width: "100%",
        height: "50%",
        objectFit: 'cover',
    },
    formContainer: {
        paddingHorizontal: SIZES.medium,
    }
});

export default styles;