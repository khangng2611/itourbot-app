import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: SIZES.large,
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    content: {
        marginTop: SIZES.medium,
        fontFamily: FONT.medium,
        fontSize: SIZES.medium,
        color: COLORS.secondary,
    },
});

export default styles;
