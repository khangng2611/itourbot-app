import { View, Image, Text } from "react-native"
import styles from "./stationcard.style";
import { icons } from "../../../constants";

const InfoWrapper = ({size, item }) => {
    return (
        <View style={styles.infoWrapper(size)}>
            <Text style={styles.zoneName(size)}>{item?.name}</Text>
            <View style={styles.locationRow}>
                <View style={{ flexDirection: 'row' }} >
                    <Image source={icons.locationIcon} resizeMode='contain' style={styles.locationIcon(size)} />
                    <Text style={styles.location(size)}>Station {item?.stationId}</Text>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <Image source={icons.heartOutline} resizeMode='contain' style={styles.locationIcon(size)} />
                    <Text style={styles.location(size)}>{item?.rating}</Text>
                </View>
            </View>
        </View>
    )
}
export default InfoWrapper;