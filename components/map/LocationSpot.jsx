import { Text, View, Image, useWindowDimensions } from 'react-native';
import styles from './map.style';
import { SIZES } from '../../constants';

// original position from O(0,0)
const originalPosition = [1, 2];
const originalPosition1 = [1.43, 4.16];
// const originalPosition1 = [0, 0];

export default function LocationSpot({ x, y, icon, caption = '' }) {
    const windowWidth = useWindowDimensions().width;
    const unitLength = windowWidth / 6;
    const spotWidth = unitLength;
    const iconWidth = spotWidth * 2 / 3;
    const mapPosition = (x, y, baseLocation, unitLength) => {
        const [roundedX, roundedY] = [parseFloat(x).toFixed(2), parseFloat(y).toFixed(2)];
        return [
            baseLocation[0] + roundedX * unitLength,
            baseLocation[1] + roundedY * unitLength
        ];
    }
    // O(0,0) on screen
    const zeroPositionOnScreen = [0 - iconWidth / 2, 0];
    // original position on screen
    const originalPositionOnScreen = [
        zeroPositionOnScreen[0] + unitLength * originalPosition1[0],
        zeroPositionOnScreen[1] + unitLength * originalPosition1[1]
    ]
    const positionOnScreen = mapPosition(x, y, originalPositionOnScreen, unitLength);

    if (x === undefined || y === undefined) return null;
    return (
        <View style={styles.locationSpot(positionOnScreen[0], positionOnScreen[1])}>
            <Image
                style={{ width: iconWidth}}
                source={icon}
                resizeMode='contain'
            >
            </Image>
            {
                caption !== '' && (
                    <View style={styles.locationCaptionWrapper}>
                        <Text style={styles.locationCaption}>{caption}</Text>
                    </View>
                )
            }
        </View>
    )
}