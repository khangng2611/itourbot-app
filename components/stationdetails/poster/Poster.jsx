import { Image, View } from 'react-native'
import styles from "../../common/cards/popularstationcard.style";
import { SIZES } from '../../../constants';
import InfoWrapper from '../../common/cards/InfoWrapper';
import LoveWrapper from '../../common/cards/LoveWrapper';
import BackWrapper from '../../common/cards/BackWrapper';

const Poster = ({ item }) => {
    return (
        <View style={{ flex: 2 }}>
            <Image
                source={{ uri: item.imgUrl }}
                resizeMode='cover'
                style={styles.cardImage}
            />
            <InfoWrapper size={SIZES.large} item={item} />
            <LoveWrapper size={SIZES.large} />
            <BackWrapper />
        </View>
    );
}

export default Poster;