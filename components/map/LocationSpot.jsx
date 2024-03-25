import { View, Image, useWindowDimensions } from 'react-native';
import { icons } from '../../constants'
import styles from './map.style';

export default function LocationSpot({ x, y }) {
    const mapPosition = (x, y, baseLocation, unitLength) => {
        const [roundedX, roundedY] = [parseFloat(x).toFixed(2), parseFloat(y).toFixed(2)];
        return [baseLocation[0] + roundedX * unitLength, baseLocation[1] - roundedY * unitLength];
    }
    const windowWidth = useWindowDimensions().width;
    const unitLength = windowWidth / 6;
    const spotWidth = unitLength;
    const baseLocation = [unitLength - spotWidth / 2, unitLength * 3];
    const position = mapPosition(x, y, baseLocation, unitLength);
    if (x === undefined || y === undefined) return null;
    return (
        <View style={styles.locationSpot(position[1], position[0])}>
            <Image
                style={{ width: spotWidth }}
                source={icons.location}
                resizeMode='contain'
            />
        </View>
    )
}