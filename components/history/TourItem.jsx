import { View, Text, Image } from "react-native"
import styles from "./history.style";
import { COLORS, SIZES, TOUR_STATUSES, icons } from "../../constants";
import { DataContext } from "../context";
import { useContext } from "react";

const TourItem = ({ item }) => {
    const { stationsList } = useContext(DataContext);
    const fromStation = stationsList[item.fromStation - 1];
    const toStationList = item.toStation.map(stationId => `${stationId} - ${stationsList[parseInt(stationId) - 1].name}`);
    const tourStatus = TOUR_STATUSES[item.status];
    const tourId = item._id.slice(-10);
    const formattedTime = new Date(item.createdAt).toLocaleTimeString('vn-VN', { hour: 'numeric', minute: 'numeric', second: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' });
    const duration = new Date(Date.parse(item.updatedAt) - Date.parse(item.createdAt)).toISOString().substring(11, 19);
    return (
        <View style={styles.itemWrapper}>
            <View style={styles.headerWrapper}>
                <View style={styles.statusWrapper(tourStatus.background)}>
                    <Text style={styles.statusText(tourStatus.color, SIZES.small)}> {tourStatus.text} </Text>
                </View>
                <Text style={styles.statusText(COLORS.secondary, SIZES.small)}>No. {tourId}</Text>
            </View>
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
            <View style={styles.footer}>
                <Text style={styles.statusText(COLORS.secondary, SIZES.small)}>
                    {['picking', 'leading'].includes(item.status) ?
                        "" : `Duration: ${duration}`
                    }
                </Text>
                <Text style={styles.statusText(COLORS.secondary, SIZES.small)}>Date: {formattedTime}</Text>
            </View>
        </View>
    )
}

export default TourItem;