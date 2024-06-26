import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { useRouter } from 'expo-router'
import styles from "./toursrequest.style";
import { useContext, useState } from "react";
import { DataContext, TourContext } from "../context";
import { addTour } from "../../utils/api";
import { fetchState, setRequestStage } from '../../utils/firebase'
import { COLORS, TOUR_STAGE } from "../../constants";
import InforModal from "../common/modal/InforModal";
import RequestModal from "../common/modal/RequestModal";

export default function RequestContent() {
    const router = useRouter();
    const { isFree } = fetchState();
    const { setAllowListen, setTourInfo } = useContext(TourContext);
    const { stationsList, setLoaderVisible } = useContext(DataContext);
    const [toStationList, setToStationList] = useState([]);
    const [fromStation, setFromStation] = useState(null);
    const [inforModal, setInforModal] = useState({
        isVisible: false,
        headerText: "",
        contentText: "",
        isInvalid: false
    });
    const [requestModal, setRequestModal] = useState(false);

    const validateRequest = () => {
        if (!fromStation) {
            setInforModal({
                isVisible: true,
                headerText: "Select pickup station",
                contentText: "Please select a pickup station.",
                isInvalid: true
            })
            return;
        }
        if (toStationList.length == 0) {
            setInforModal({
                isVisible: true,
                headerText: "Select destinations",
                contentText: "Please select the destinations.",
                isInvalid: true
            })
            return;
        }
        if (toStationList.includes(fromStation)) {
            setInforModal({
                isVisible: true,
                headerText: "Invalid stations",
                contentText: `Pickup station must not be included in destinations.`,
                isInvalid: true
            })
            return;
        }
        setRequestModal(true);
    }

    const requestTour = async () => {
        try {
            setLoaderVisible(true);
            const tour = await addTour(parseInt(fromStation), toStationList);
            const pickupStation = stationsList[parseInt(fromStation) - 1];
            setAllowListen(true)
            setRequestStage([pickupStation], TOUR_STAGE.pickup);
            setTourInfo(tour);
            router.back();
            setLoaderVisible(false);
        } catch (error) {
            setInforModal({
                isVisible: true,
                headerText: "Request fail",
                contentText: error.message,
                isInvalid: true
            })
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
                    <Text style={[styles.confirmText, { color: COLORS.white }]}>Turtlebot is in service</Text>
                }
            </TouchableOpacity>
            <InforModal
                isVisible={inforModal.isVisible}
                setInforModal={setInforModal}
                headerText={inforModal.headerText}
                contentText={inforModal.contentText}
                isInvalid={inforModal.isInvalid}
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