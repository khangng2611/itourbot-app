import { Image, View, useWindowDimensions } from 'react-native'
import styles from "../common/cards/stationcard.style";
import { SIZES } from '../../constants';
import InfoWrapper from '../common/cards/InfoWrapper';
import LoveWrapper from '../common/cards/LoveWrapper';

const Poster = ({ item }) => {
    const windowHeight = useWindowDimensions().height;
    return (
        <View>
            <Image
                source={{ uri: item.imgUrl }}
                resizeMode='cover'
                style={styles.cardImage(windowHeight)}
            />
            <InfoWrapper size={SIZES.large} item={item} />
            <LoveWrapper size={SIZES.large} />
        </View>
    );
}

export default Poster;