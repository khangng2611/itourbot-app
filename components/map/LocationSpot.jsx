import {View, Image, useWindowDimensions} from 'react-native';
import {icons} from '../../constants'

const mapPosition = (x,y, baseLocation, unitLength) => {
    const [roundedX, roundedY] = [parseFloat(x).toFixed(2), parseFloat(y).toFixed(2)];
    return [baseLocation[0] + roundedX*unitLength, baseLocation[1] - roundedY*unitLength];
}

export default function LocationSpot({x,y}) {
    const windowWidth = useWindowDimensions().width;
    const unitLength = windowWidth/6;
    const spotWidth = unitLength;
    const baseLocation = [unitLength-spotWidth/2,unitLength*3];
    if (x === undefined || y === undefined) return null;
    return (
        <View style={{
            position:'absolute', 
            top:mapPosition(x,y, baseLocation, unitLength)[1], 
            left:mapPosition(x,y, baseLocation, unitLength)[0],
        }}>
            <Image
                style={{width: spotWidth}}
                source={icons.location}
                resizeMode='contain'
            />    
        </View>
    )
}