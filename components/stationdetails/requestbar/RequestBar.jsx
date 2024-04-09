import { Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { useContext, useState } from "react";
import styles from "./requestbar.style";
import { COLORS, SIZES, icons } from "../../../constants";
import { Dropdown } from "react-native-element-dropdown"
import { fetchState, setRequestStage } from "../../../utils/firebase";
import { addTour } from "../../../utils/apiRequest";
import { useAuth } from "../../context/AuthContext";
import { TourContext } from "../../context/TourContext";
import InavlidRequestModal from "../../common/modal/InvalidModal";
import RequestModal from "../../common/modal/RequestModal";

const RequestBar = ({ item }) => {
    const { session } = useAuth();
    const { setAllowListen, setTourInfo } = useContext(TourContext)
    const { isFree } = fetchState();
    const [chosenStation, setChosenStation] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [requestStatus, setRequestStatus] = useState([false, ""]);
    const stationList = (item.stations).map((station) => ({ label: `(${station.stationId}) ${station.name}`, value: station.stationId }));
    const [invalidModal, setInvalidModal] = useState({
        isVisible: false,
        headerText: "",
        contentText: ""
    });
    const [requestModal, setRequestModal] = useState(false);

    const handleRequestTour = () => {
        if (!chosenStation) {
            setInvalidModal({
                isVisible: true,
                headerText: "Select a station",
                contentText: "Please select a station to continue"
            })
            return;
        }
        if (chosenStation == item.stationId) {
            setInvalidModal({
                isVisible: true,
                headerText: "Invalid station",
                contentText: `Pickup station must be different from ${item.name}`
            })
            return;
        }
        console.log("chosenStation: ", chosenStation);
        setRequestModal(true);
        // Alert.alert('Confirm Request', `Are you sure to request a tour guide to ${item.name} ?`, [
        //     { text: 'Cancel' },
        //     { text: 'Confirm', onPress: () => requestTour() }
        // ]);
    }

    const requestTour = async () => {
        try {
            const tour = await addTour(
                fromStation = parseInt(chosenStation),
                toStation = parseInt(item.stationId),
                session
            );
            const pickupStation = item.stations.find(station => station.stationId === parseInt(chosenStation));
            setRequestStage(pickupStation, 1);
            setTourInfo({
                _id: tour._id,
                status: 'picking',
                fromStation: pickupStation,
                toStation: { ...item, stations: [] }
            });
            setAllowListen(true);
            setRequestStatus([true, "success"]);
        } catch (error) {
            setRequestStatus([true, error.message]);
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            {/* Show the request status */}
            {requestStatus[0] ? (
                <TouchableOpacity
                    style={styles.requestStatus(requestStatus[1])}
                    onPress={() => setRequestStatus(false, "")}
                >
                    <Text style={[styles.textStyle, { color: requestStatus[1] === "success" ? COLORS.green : COLORS.red }]}>
                        {requestStatus[1] === "success" ? "Request Successfully !" : requestStatus[1]}
                    </Text>
                </TouchableOpacity>
            ) : null}

            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <View style={{ flex: 1.5, marginEnd: SIZES.large }}>
                    <Text style={[styles.textStyle, { color: COLORS.secondary, marginBottom: 5 }]}>Pickup station: </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
                        placeholderStyle={styles.textStyle}
                        selectedTextStyle={styles.textStyle}
                        inputSearchStyle={styles.textStyle}
                        iconStyle={styles.iconStyle}
                        data={stationList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search station"
                        value={chosenStation}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={seletedItem => {
                            setChosenStation(seletedItem.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
                <View style={{ width: "40%" }}>
                    <Text style={{ alignSelf: 'center', color: COLORS.yellow }}>{!isFree ? "Robot is in service" : ""} </Text>
                    <TouchableOpacity
                        style={styles.button(isFree)}
                        onPress={() => handleRequestTour()}
                        disabled={!isFree}
                    >
                        <Text style={[styles.textStyle, { color: COLORS.lightWhite, flexShrink: 1 }]}>Request Tour</Text>
                        <Image source={icons.send} resizeMode='contain' style={styles.sendIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <InavlidRequestModal
                isVisible={invalidModal.isVisible}
                setInvalidModal={setInvalidModal}
                headerText={invalidModal.headerText}
                contentText={invalidModal.contentText}
            />
            <RequestModal isVisible={requestModal} setVisible={setRequestModal} requestTour={requestTour} tourData={{...item, chosenStation}}  />
        </View>
    )
}

export default RequestBar;