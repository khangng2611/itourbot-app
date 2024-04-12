import { FlatList, TouchableOpacity, Text, View } from "react-native";
import styles from "./toursrequest.style";
import { useContext, useState } from "react";
import { DataContext, TourContext, useAuth } from "../context";
import { addTour } from "../../utils/apiRequest";
import { setRequestStage } from '../../utils/firebase'

export default function RequestContent() {
    const { session } = useAuth();
    const {setAllowListen, setTourInfo} = useContext(TourContext);
    const { stationsList } = useContext(DataContext);
    const [toStationList, setToStationList] = useState([]);
    const [fromStation, setFromStation] = useState(null);

    const requestTour = async () => {
        try {
            const tour = await addTour(
                fromStation = parseInt(fromStation),
                toStation = toStationList,
                session
            );
            const pickupStation = stationsList[parseInt(fromStation) - 1];
            setRequestStage(pickupStation, 1);
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
                        <Text style={styles.stationText}>Station {item.stationId} - {item.name}</Text>
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
                        <Text style={styles.stationText} >Station {item.stationId} - {item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.flatlistStyle}
            />
            <TouchableOpacity
                style={styles.confirmBtn}
                onPress={() => requestTour()}
            >
                <Text style={styles.confirmText}>Request Tourguide</Text>
            </TouchableOpacity>
        </View>
    )
};