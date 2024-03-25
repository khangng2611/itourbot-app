import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.large,
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.xLarge,
        color: COLORS.primary,
    },
    content: {
        marginTop: SIZES.small,
        fontFamily: FONT.medium,
        fontSize: SIZES.medium,
        color: COLORS.secondary,
        paddingBottom: SIZES.xxLarge,
    },
});

export default styles;
