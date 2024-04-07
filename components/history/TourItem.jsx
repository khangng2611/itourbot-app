import { View, Text, Image } from "react-native"
import styles from "./history.style";
import { COLORS, SIZES, icons } from "../../constants";
import {tourStatuses} from "../../constants";

const TourItem = ({ item }) => {
    const tourStatus = tourStatuses[item.status];
    const tourId = item._id.slice(-10);
    const formattedTime = new Date(item.createdAt).toLocaleTimeString('vn-VN', { hour: 'numeric', minute: 'numeric', second: 'numeric' , day: 'numeric', month: 'numeric', year: 'numeric'});
    return (
        <View style={styles.itemWrapper}>
            <View style={styles.headerWrapper}>
                <View style={styles.statusWrapper(tourStatus.background)}>
                    <Text style={styles.statusText(tourStatus.color, SIZES.small)}> {tourStatus.text} </Text>
                </View>
                <Text style={styles.statusText(COLORS.secondary, SIZES.small)}>No. {tourId}</Text>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.sideContentWrapper}>
                    <Text style={styles.stationIdText(SIZES.small)}>Station {item.fromStation.stationId}</Text>
                    <Text style={styles.stationNameText(SIZES.small)}>{item.fromStation.name}</Text>
                </View>
                <View>
                    <Image source={icons.fastForward} style={styles.forwardIcon}/>
                </View>
                <View style={styles.sideContentWrapper}>
                    <Text style={styles.stationIdText(SIZES.small)}>Station {item.toStation.stationId}</Text>
                    <Text style={styles.stationNameText(SIZES.small)}>{item.toStation.name}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.statusText(COLORS.secondary, SIZES.small)}>Time: {formattedTime}</Text>
            </View>
        </View>
    )
}

export default TourItem;