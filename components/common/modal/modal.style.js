import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: COLORS.lightWhite,
        borderRadius: SIZES.medium,
        padding: SIZES.large,
        marginHorizontal: SIZES.large,
        alignItems: 'center',
        ...SHADOWS.medium,
        elevation: 5,
    },
    headerText: {
        fontFamily: FONT.bold,
        fontSize: SIZES.medium,
        color: COLORS.green,
    },
    contentText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.medium,
        color: COLORS.primary,
        marginVertical: 5,
    },
    btnWrapper: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        borderRadius: SIZES.small,
        padding: SIZES.small,
        elevation: 2,
        height: 40,
        minWidth: 100,
        marginHorizontal: SIZES.medium,
        ...SHADOWS.small
    },
    cancelBtn: {
        backgroundColor: COLORS.red,
    },
    confirmBtn: {
        backgroundColor: COLORS.blue,
    },
    infoBtn: {
        backgroundColor: COLORS.primary,
    },
    btnText: {
        color: COLORS.white,
        // fontWeight: 'bold',
        fontFamily: FONT.medium,
        textAlign: 'center',
    },
    inforText: {
        fontFamily: FONT.regular,
        fontSize: SIZES.small,
        color: COLORS.primary,
        alignSelf: 'flex-start',
    },
    stationText: {
        color: COLORS.green,
        fontFamily: FONT.bold
    }
});

export default styles;