import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import MapImage from "../../components/map/MapImage";
import LocationSpot from "../map/LocationSpot";
import { fetchState } from "../../utils/firebase";
import styles from "./history.style";
import { FONT, SIZES, icons, tourStatuses } from "../../constants";
import { updateTourStatus } from "../../utils/apiRequest";
import { setRequestStage } from "../../utils/firebase";
import StopTourModal from "../common/modal/StopTourModal";

const OnGoingTour = ({ isVisible, tourContext, session, isStopModal, setStopModal }) => {
    const { tourInfor, setTourInfo, setAllowListen } = tourContext;
    if (!isVisible) return null;
    if (!tourInfor._id) return (
        <View style={{ padding: SIZES.medium, alignItems: 'center' , marginVertical: SIZES.medium}}>
            <Text style={{ fontFamily: FONT.regular }}>You haven't request a tourguide yet.</Text>
        </View>
    );
    const toStation = tourInfor.toStation;
    const fromStation = tourInfor.fromStation;
    const { x, y } = fetchState();
    const tourStatus = tourStatuses[tourInfor.status];
    const cancelTour = () => {
        setStopModal(false);
        updateTourStatus(tourInfor._id, 'canceled', session);
        setAllowListen(false);
        setRequestStage(null, 0);
        setTourInfo({});
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
                <MapImage />
                <LocationSpot x={x} y={y} icon={icons.botLocation} />
                <LocationSpot x={fromStation.location.x} y={fromStation.location.y} icon={icons.pickupLocation} />
                <LocationSpot x={toStation.location.x} y={toStation.location.y} icon={icons.desLocation} />
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ alignSelf: 'center' }}>
                    <View style={styles.statusWrapper(tourStatus.background)}>
                        <Text style={styles.statusText(tourStatus.color, SIZES.medium)}> {tourStatus.text} </Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: SIZES.medium }}>
                    <View style={styles.ongoingContentWrapper}>
                        <View style={styles.ongoingSideContentWrapper}>
                            <Image source={icons.pickupLocation} style={styles.ongoingIcon} />
                            <View>
                                <Text style={styles.stationIdText(SIZES.medium)}>Station {fromStation.stationId}</Text>
                                <Text style={styles.stationNameText(SIZES.medium)}>{fromStation.name}</Text>
                            </View>
                        </View>
                        <Image source={icons.fastForward} style={styles.forwardIcon} />
                        <View style={styles.ongoingSideContentWrapper}>
                            <Image source={icons.desLocation} style={styles.ongoingIcon} />
                            <View>
                                <Text style={styles.stationIdText(SIZES.medium)}>Station {toStation.stationId}</Text>
                                <Text style={styles.stationNameText(SIZES.medium)}>{toStation.name}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.stopBtn}
                    onPress={() => setStopModal(true)}
                >
                    <Text style={styles.stopBtnText}>STOP THE TOUR</Text>
                </TouchableOpacity>
            </ScrollView>
            <StopTourModal isVisible={isStopModal} setVisble={setStopModal} handleConfirm={cancelTour}/>
        </View>
    );
}

export default OnGoingTour;