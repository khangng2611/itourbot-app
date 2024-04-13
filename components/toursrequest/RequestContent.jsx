import { FlatList, TouchableOpacity, Text, View } from "react-native";
import styles from "./toursrequest.style";
import { useContext, useState } from "react";
import { DataContext, TourContext, useAuth } from "../context";
import { addTour } from "../../utils/apiRequest";
import { fetchState, setRequestStage } from '../../utils/firebase'
import { COLORS, TOUR_STAGE } from "../../constants";
import InavlidRequestModal from "../common/modal/InvalidModal";
import RequestModal from "../common/modal/RequestModal";

export default function RequestContent() {
    const { isFree } = fetchState();
    const { session } = useAuth();
    const { setAllowListen, setTourInfo } = useContext(TourContext);
    const { stationsList } = useContext(DataContext);
    const [toStationList, setToStationList] = useState([]);
    const [fromStation, setFromStation] = useState(null);
    const [invalidModal, setInvalidModal] = useState({
        isVisible: false,
        headerText: "",
        contentText: ""
    });
    const [requestModal, setRequestModal] = useState(false);

    const validateRequest = () => {
        if (!fromStation) {
            setInvalidModal({
                isVisible: true,
                headerText: "Select pickup station",
                contentText: "Please select a pickup station."
            })
            return;
        }
        if (toStationList.includes(fromStation)) {
            setInvalidModal({
                isVisible: true,
                headerText: "Invalid stations",
                contentText: `Pickup station must not be included in destinations.`
            })
            return;
        }
        setRequestModal(true);
    }

    const requestTour = async () => {
        try {
            const tour = await addTour(parseInt(fromStation), toStationList, session);
            const pickupStation = stationsList[parseInt(fromStation) - 1];
            setRequestStage([pickupStation], TOUR_STAGE.pickup);
            setTourInfo({
                _id: tour._id,
                status: 'picking',
                fromStation: fromStation,
                toStation: toStationList
            });
            setAllowListen(true);
            // setRequestStatus([true, "success"]);
        } catch (error) {
            // setRequestStatus([true, error.message]);
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select destinations: </Text>
            <FlatList
                data={stationsList}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.stationWrapper(toStationList, item.stationId)}
                        onPress={() => {
                            if (toStationList.includes(item.stationId)) {
                                setToStationList((prev) => prev.filter(id => id !== item.stationId));
                            } else {
                                setToStationList((prev) => [...prev, item.stationId]);
                            }
                        }}
                    >
                        <Text style={styles.stationText(toStationList, item.stationId)}>Station {item.stationId} - {item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.flatlistStyle}
            />
            <Text style={styles.title}>Select where Turtlebot should pickup: </Text>
            <FlatList
                data={stationsList}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.stationWrapper([fromStation], item.stationId)}
                        onPress={() => {
                            setFromStation(item.stationId);
                        }}
                    >
                        <Text style={styles.stationText([fromStation], item.stationId)} >Station {item.stationId} - {item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.flatlistStyle}
            />
            <TouchableOpacity
                style={styles.confirmBtn(isFree)}
                onPress={() => validateRequest()}
                disabled={!isFree}
            >
                {isFree ? 
                    <Text style={styles.confirmText}>Request Tourguide</Text> :
                    <Text style={[styles.confirmText, {color: COLORS.white}]}>Turtlebot is in service</Text>
                }
            </TouchableOpacity>
            <InavlidRequestModal
                isVisible={invalidModal.isVisible}
                setInvalidModal={setInvalidModal}
                headerText={invalidModal.headerText}
                contentText={invalidModal.contentText}
            />
            <RequestModal
                isVisible={requestModal}
                setVisible={setRequestModal}
                requestTour={requestTour}
                requestStations={{ fromStation, toStationList }}
                stationsList={stationsList}
            />
        </View>
    )
};