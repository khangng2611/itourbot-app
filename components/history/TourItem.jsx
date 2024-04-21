import { View, Text, Image } from "react-native"
import styles from "./history.style";
import { COLORS, SIZES, TOUR_STATUSES } from "../../constants";
import { DataContext } from "../context";
import { useContext } from "react";
import { getDuration } from "../../utils/checkFormat";
import TourContentWrapper from "./TourContentWrapper";

const TourItem = ({ item }) => {
    const { stationsList } = useContext(DataContext);
    const fromStation = stationsList[item.fromStation - 1];
    const toStationList = item.toStation.map(stationId => `${stationId} - ${stationsList[parseInt(stationId) - 1].name}`);
    const tourStatus = TOUR_STATUSES[item.status];
    const tourId = item._id.slice(-10);
    const formattedDate = new Date(item.createdAt).toLocaleTimeString('vn-VN', { hour: 'numeric', minute: 'numeric', second: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' });
    const duration = getDuration(item.createdAt, item.updatedAt);
    return (
        <View style={styles.itemWrapper}>
            <View style={styles.headerWrapper}>
                <View style={styles.statusWrapper(tourStatus.background)}>
                    <Text style={styles.statusText(tourStatus.color, SIZES.small)}> {tourStatus.text} </Text>
                </View>
                <Text style={styles.statusText(COLORS.secondary, SIZES.small)}>No. {tourId}</Text>
            </View>
            <TourContentWrapper 
                fromStation={fromStation}
                toStationList={toStationList}
            />
            <View style={styles.footer}>
                <Text style={styles.statusText(COLORS.secondary, SIZES.small)}>
                    {['picking', 'leading'].includes(item.status) ?
                        "" : `Duration: ${duration}`
                    }
                </Text>
                <Text style={styles.statusText(COLORS.secondary, SIZES.small)}>Date: {formattedDate}</Text>
            </View>
        </View>
    )
}

export default TourItem;