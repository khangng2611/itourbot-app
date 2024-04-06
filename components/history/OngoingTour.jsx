import { View, Text, ActivityIndicator } from "react-native";
import MapImage from "../../components/map/MapImage";
import LocationSpot from "../map/LocationSpot";
import { fetchState } from "../../utils/firebase";
import styles from "./history.style";
import { TourContext } from "../context/TourContext";
import { useContext } from "react";
import { FONT, SIZES, icons, tourStatuses } from "../../constants";

const OnGoingTour = ({ isVisible }) => {
    if (!isVisible) return null;
    const { tourInfor } = useContext(TourContext);
    if (!tourInfor._id) return (
        <View style={{ padding: SIZES.medium, alignItems: 'center' }}>
            <Text style={{ fontFamily: FONT.regular }}>You haven't request a tourguide yet.</Text>
        </View>
    );
    const desLocation = tourInfor.toStation.location;
    const pickupLocation = tourInfor.fromStation.location;
    const { x, y } = fetchState();
    const tourStatus = tourStatuses[tourInfor.status];
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
                <MapImage />
                <LocationSpot x={x} y={y} icon={icons.botLocation} />
                <LocationSpot x={pickupLocation.x} y={pickupLocation.y} icon={icons.pickupLocation} />
                <LocationSpot x={desLocation.x} y={desLocation.y} icon={icons.desLocation} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{alignSelf:'center'}}>
                    <View style={styles.statusWrapper(tourStatus.background)}>
                        <Text style={styles.statusText(tourStatus.color, SIZES.medium)}> {tourStatus.text} </Text>
                    </View>
                </View>
                <View>
                    
                </View>
            </View>
        </View>
    );
}

export default OnGoingTour;