import { View, Text, SafeAreaView } from "react-native";
import styles from '../../../styles/app.style';
import { SwitchBar, HistoryList, OngoingTour } from "../../../components";
import { useState, useContext } from "react";
import useFetch from "../../../hook/useFetch";
import { useAuth, TourContext, DataContext } from "../../../components/context";

const History = () => {
    const { session } = useAuth();
    const { stationsList } = useContext(DataContext);
    const { data, isLoading, error, refetch } = useFetch("tours", null, session);
    const { tourInfor, setTourInfo, setAllowListen } = useContext(TourContext);
    const [isTab, setTab] = useState(0);
    const [isStopModal, setStopModal] = useState(false);
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.title}>Your tours</Text>
            </View>
            <SwitchBar setTab={setTab} />
            <HistoryList
                isVisible={isTab == 0}
                fetchData={{ data, isLoading, error, refetch }}
            />
            <OngoingTour
                isVisible={isTab == 1}
                tourContext={{ tourInfor, setTourInfo, setAllowListen }}
                session={session}
                isStopModal={isStopModal}
                setStopModal={setStopModal}
                stationsList={stationsList}
            />
        </SafeAreaView>
    )
}

export default History;