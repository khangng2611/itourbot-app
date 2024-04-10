import { StyleSheet } from 'react-native';
import { COLORS, FONT, SHADOWS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    switchBar: {
        paddingHorizontal: SIZES.medium,
    },
    switchBarTextStyle: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
    },
    container: {
        marginVertical: SIZES.medium,
        paddingHorizontal: SIZES.small,
        flex: 1
    },
    itemWrapper: {
        marginVertical: SIZES.small,
        marginHorizontal: 5,
        padding: SIZES.small,
        borderBlockColor: COLORS.lightWhite,
        borderRadius: SIZES.small,
        backgroundColor: COLORS.lightWhite,
        ...SHADOWS.small
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 5
    },
    statusText: (color, size) => ({
        fontFamily: FONT.medium,
        color: color,
        fontSize: size
    }),
    statusWrapper: (background) => ({
        backgroundColor: background,
        borderRadius: SIZES.xSmall,
        padding: 5
    }),
    contentWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBlockColor: "#D9D9D9",
        padding: SIZES.medium,
    },
    sideContentWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    stationIdText: (size) => ({
        fontFamily: FONT.medium,
        color: COLORS.primary,
        fontSize: size
    }),
    stationNameText: (size) => ({
        fontFamily: FONT.medium,
        color: COLORS.secondary,
        fontSize: size
    }),
    forwardIcon: {
        tintColor: COLORS.secondary,
        resizeMode: 'contain',
        width: 20,
        height: 20,
        alignSelf: 'center',
    },
    footer: {
        flexDirection: 'row',
        marginTop: 5
    },
    ongoingContentWrapper: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBlockColor: "#D9D9D9",
        paddingVertical: SIZES.medium,
    },
    ongoingSideContentWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ongoingIcon: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        marginRight: 5
    },
    stopBtn: {
        width: '60%',
        justifyContent: 'center',
        marginTop: SIZES.small,
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        // backgroundColor: COLORS.lightred,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: COLORS.red,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    stopBtnText: {
        color: COLORS.red,
        fontFamily: FONT.bold,
        fontSize: SIZES.medium
    }
});

export default styles;
