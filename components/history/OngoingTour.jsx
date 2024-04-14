import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import MapImage from "../../components/map/MapImage";
import LocationSpot from "../map/LocationSpot";
import { fetchState } from "../../utils/firebase";
import styles from "./history.style";
import { FONT, SIZES, icons, TOUR_STATUSES, TOUR_STAGE } from "../../constants";
import { updateTourStatus } from "../../utils/apiRequest";
import { setRequestStage } from "../../utils/firebase";
import StopTourModal from "../common/modal/StopTourModal";

const OnGoingTour = ({ isVisible, tourContext, session, isStopModal, setStopModal, stationsList }) => {
    const { tourInfor, setTourInfo, setAllowListen } = tourContext;
    if (!isVisible) return null;
    if (!tourInfor._id) return (
        <View style={{ padding: SIZES.medium, alignItems: 'center', marginVertical: SIZES.medium }}>
            <Text style={{ fontFamily: FONT.regular }}>You haven't request a tourguide yet.</Text>
        </View>
    );
    const fromStation = stationsList[tourInfor.fromStation - 1];
    const { x, y } = fetchState();
    const tourStatus = TOUR_STATUSES[tourInfor.status];
    const toStationList = tourInfor.toStation.map(stationId => stationsList[stationId - 1]);
    const toStationSpotsComponent = toStationList.map((station) => (
        <LocationSpot key={station.stationId} x={station.location.x} y={station.location.y} icon={icons.desLocation} caption={`(${station.stationId})`} />
    ));
    const toStationListName = toStationList.map((station) => `Station ${station.stationId} - ${station.name}`);
    const cancelTour = () => {
        setStopModal(false);
        updateTourStatus(tourInfor._id, 'canceled', session);
        setAllowListen(false);
        setRequestStage([], TOUR_STAGE.cancel);
        setTourInfo({});
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
                <MapImage />
                <LocationSpot x={x} y={y} icon={icons.botLocation} />
                <LocationSpot x={fromStation.location.x} y={fromStation.location.y} icon={icons.pickupLocation} />
                {/* <LocationSpot x={toStationList.location.x} y={toStationList.location.y} icon={icons.desLocation} /> */}
                {toStationSpotsComponent}
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
                            <Image source={icons.pickupLocation} style={styles.icon(0.8 * SIZES.xxLarge)} />
                            <Text style={[styles.stationText(SIZES.small), { alignSelf: 'flex-start' }]}>Station {fromStation.stationId} {'\n'}{fromStation.name}</Text>
                        </View>
                        <View style={styles.ongoingSideContentWrapper}>
                            <Image source={icons.desLocation} style={styles.icon(SIZES.xxLarge)} />
                            <Text style={styles.stationText(SIZES.small)}>{toStationListName.join('\n')}</Text>
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
            <StopTourModal isVisible={isStopModal} setVisble={setStopModal} handleConfirm={cancelTour} />
        </View>
    );
}

export default OnGoingTour;