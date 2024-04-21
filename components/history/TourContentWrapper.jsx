import { View, Text, Image } from 'react-native';
import styles from './history.style';
import { SIZES, icons } from '../../constants';

const TourContentWrapper = ({ fromStation, toStationList }) => {
    return (
        <View style={styles.contentWrapper}>
            <View style={styles.fromStationBox}>
                <Image source={icons.pickupLocation} style={styles.icon(SIZES.large)} />
                <View style={styles.stationWrapper}>
                    <Text style={styles.stationText(SIZES.small)}>{fromStation.stationId} - {fromStation.name} </Text>
                </View>
            </View>
            <View style={styles.toStationBox}>
                <Image source={icons.desLocation} style={styles.icon(SIZES.large)} />
                <View style={styles.toStationListWrapper}>
                    {
                        toStationList.length > 0 &&
                        toStationList.map((station, id) => (
                            <View key={id} style={styles.stationWrapper}>
                                <Text style={styles.stationText(SIZES.small)}>{station}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export default TourContentWrapper;