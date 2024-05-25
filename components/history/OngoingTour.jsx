import { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import MapImage from "../../components/map/MapImage";
import LocationSpot from "../map/LocationSpot";
import { fetchState } from "../../utils/firebase";
import styles from "./history.style";
import { FONT, SIZES, icons, TOUR_STATUSES, TOUR_STAGE, COLORS } from "../../constants";
import { updateTourStatus } from "../../utils/api";
import { setRequestStage } from "../../utils/firebase";
import StopTourModal from "../common/modal/StopTourModal";
import { getDuration } from "../../utils/checkFormat";
import TourContentWrapper from "./TourContentWrapper";

const OnGoingTour = ({ isVisible, tourContext, isStopModal, setStopModal, stationsList }) => {
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
    const toStationLocations = tourInfor.toStation.map(toStationId => ({
        stationId: stationsList[toStationId - 1].stationId,
        location: stationsList[toStationId - 1].location
    }));
    const formattedToStationList = tourInfor.toStation.map(stationId => `${stationId} - ${stationsList[stationId - 1].name}`);
    const cancelTour = () => {
        setStopModal(false);
        updateTourStatus(tourInfor._id, 'canceled');
        setAllowListen(false);
        setRequestStage([], TOUR_STAGE.cancel);
        setTourInfo({});
    }
    const [countTime, setCountTime] = useState("00:00:00");
    useEffect(() => {
        const interval = setInterval(() => {
            const duration = getDuration(tourInfor.createdAt);
            setCountTime(duration);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [tourInfor.createdAt]);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2 }}>
                <MapImage />
                <LocationSpot x={x} y={y} icon={icons.botLocation} />
                <LocationSpot x={fromStation.location.x} y={fromStation.location.y} icon={icons.pickupLocation} />
                {
                    toStationLocations.map((station) => (
                        <LocationSpot key={station.stationId} x={station.location.x} y={station.location.y} icon={icons.desLocation} caption={`${station.stationId}`} />
                    ))
                }
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.statusBox}>
                    <View style={styles.statusWrapper(tourStatus.background)}>
                        <Text style={styles.statusText(tourStatus.color, SIZES.medium)}> {tourStatus.text} </Text>
                    </View>
                    <View style={styles.statusWrapper(COLORS.gray2)}>
                        <Text style={styles.statusText(COLORS.primary, SIZES.medium)}> {countTime} </Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: SIZES.medium, marginTop: SIZES.xxSmall }}>
                    <TourContentWrapper 
                        fromStation={fromStation}
                        toStationList={formattedToStationList}
                    />
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
    );}

export default OnGoingTour;