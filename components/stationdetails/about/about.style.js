import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.large,
        flex: 1,
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
