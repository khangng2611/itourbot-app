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
        flex:1
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
        flexDirection: 'row' , 
        justifyContent: 'space-between', 
        alignItems:'baseline',
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
        alignItems:'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBlockColor: "#D9D9D9",
        padding: SIZES.medium,
    },
    leftContentWrapper: {
        flex:1,
        alignItems: 'center',
    },
    rightContentWrapper: {
        flex:1,
        alignItems: 'center',
    },
    stationIdText: {
        fontFamily: FONT.medium,
        color: COLORS.primary,
        fontSize: SIZES.small
    },
    stationNameText: {
        fontFamily: FONT.medium,
        color: COLORS.secondary,
        fontSize: SIZES.small
    },
    forwardIcon: {
        tintColor: COLORS.secondary,
        resizeMode: 'contain',
        width: 20,
        height: 20,
        alignSelf: 'center'
    },
    footer: {
        flexDirection: 'row',
        marginTop: 5
    },
});

export default styles;
