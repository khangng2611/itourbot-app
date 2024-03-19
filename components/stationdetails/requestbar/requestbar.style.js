import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.medium,
        flexDirection: 'row',
    },
    button: {
        paddingHorizontal: SIZES.medium,
        alignSelf: 'flex-end',
        borderRadius: SIZES.large,
        backgroundColor: COLORS.tertiary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    sendIcon: {
        tintColor: COLORS.lightWhite,
        width: 30
    },
    dropdown: {
        borderColor: COLORS.gray,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: SIZES.xSmall,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: COLORS.white,
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    textStyle: {
        fontFamily: FONT.medium,
        fontSize: SIZES.medium,
        color: COLORS.primary,
    },  
    iconStyle: {
        width: 20,
        height: 20,
    },
});
export default styles;
