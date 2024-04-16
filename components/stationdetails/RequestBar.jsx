import { Text, View, TouchableOpacity, Image } from "react-native";
import { useContext, useState } from "react";
import styles from "./stationsdetails.style";
import { COLORS, SIZES, TOUR_STAGE, icons } from "../../constants";
import { Dropdown } from "react-native-element-dropdown"
import { fetchState, setRequestStage } from "../../utils/firebase";
import { addTour } from "../../utils/apiRequest";
import { useAuth, TourContext, DataContext } from "../context";
import InforModal from "../common/modal/InforModal";
import RequestModal from "../common/modal/RequestModal";

const RequestBar = ({ item }) => {
    const { session } = useAuth();
    const { setAllowListen, setTourInfo } = useContext(TourContext);
    const { stationsList, setLoaderVisible } = useContext(DataContext);
    const { isFree } = fetchState();
    const [fromStation, setFromStation] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [requestStatus, setRequestStatus] = useState([false, ""]);
    const [invalidModal, setInvalidModal] = useState({
        isVisible: false,
        headerText: "",
        contentText: ""
    });
    const [requestModal, setRequestModal] = useState(false);
    const dropdownList = stationsList.map((station) => ({ label: `(${station.stationId}) ${station.name}`, value: station.stationId }));

    const validateRequest = () => {
        if (!fromStation) {
            setInvalidModal({
                isVisible: true,
                headerText: "Select pickup station",
                contentText: "Please select a pickup station."
            })
            return;
        }
        if (fromStation == item.stationId) {
            setInvalidModal({
                isVisible: true,
                headerText: "Invalid station",
                contentText: `Pickup station must be different from ${item.name}`
            })
            return;
        }
        setRequestModal(true);
    }

    const requestTour = async () => {
        try {
            setLoaderVisible(true);
            const tour = await addTour(
                parseInt(fromStation),
                [parseInt(item.stationId)],
                session
            );
            const pickupStation = stationsList[parseInt(fromStation) - 1];
            setRequestStage([pickupStation], TOUR_STAGE.pickup);
            setTourInfo({
                _id: tour._id,
                status: 'picking',
                fromStation: parseInt(fromStation),
                toStation: [parseInt(item.stationId)],
            });
            setAllowListen(true);
            setLoaderVisible(false);
            setRequestStatus([true, "success"]);
        } catch (error) {
            setRequestStatus([true, error.message]);
            console.log(error);
        }
    }

    return (
        <View style={styles.requestBarContainer}>
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
                    <Text style={[styles.textStyle, { color: COLORS.primary, marginBottom: 5 }]}>Pickup station: </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
                        placeholderStyle={styles.textStyle}
                        selectedTextStyle={styles.textStyle}
                        inputSearchStyle={styles.textStyle}
                        iconStyle={styles.iconStyle}
                        data={dropdownList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search station"
                        value={fromStation}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={seletedItem => {
                            setFromStation(seletedItem.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
                <View style={{ width: "40%" }}>
                    <TouchableOpacity
                        style={styles.button(isFree)}
                        onPress={() => validateRequest()}
                        disabled={!isFree}
                    >
                        <Text style={[styles.textStyle, { color: COLORS.lightWhite, flexShrink: 1 }]}>{isFree ? "Request Tour" : "Turtlebot's in service"}</Text>
                        <Image source={icons.send} resizeMode='contain' style={styles.sendIcon} />
                    </TouchableOpacity>
                </View>
            </View>
            <InforModal
                isVisible={invalidModal.isVisible}
                setInforModal={setInvalidModal}
                headerText={invalidModal.headerText}
                contentText={invalidModal.contentText}
                isInvalid={true}
            />
            <RequestModal
                isVisible={requestModal}
                setVisible={setRequestModal}
                requestTour={requestTour}
                requestStations={{ fromStation, toStationList: [item.stationId] }}
                stationsList={stationsList}
            />
        </View>
    )
}

export default RequestBar;