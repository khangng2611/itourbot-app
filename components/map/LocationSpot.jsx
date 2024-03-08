import {View, Image} from 'react-native';
import {icons} from '../../constants'

const unitLength = 75;
const baseLocation = [55,355];
const mapPosition = (x,y) => {
    const [roundedX, roundedY] = [parseFloat(x).toFixed(2), parseFloat(y).toFixed(2)];
    return [baseLocation[0] + roundedX*unitLength, baseLocation[1] - roundedY*unitLength];
}

export default function LocationSpot({x,y}) {
    return (
        <View style={{
            position:'absolute', 
            top:mapPosition(x,y)[1], 
            left:mapPosition(x,y)[0],
        }}>
            <Image
                style={{width:70}}
                source={icons.location}
                resizeMode='contain'
            />    
        </View>
    )
}