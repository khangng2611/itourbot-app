import { View, Text, SafeAreaView } from "react-native";
import styles from '../../../styles/app.style';
import { SwitchBar, HistoryList, OngoingTour } from "../../../components";
import { useState, useContext } from "react";
import useFetch from "../../../hook/useFetch";
import { useAuth } from "../../../components/context/AuthContext";
import { TourContext } from "../../../components/context/TourContext";

const History = () => {
    const { session } = useAuth();
    const { data, isLoading, error, refetch } = useFetch("tours", null, session);
    const { tourInfor, setTourInfo, setAllowListen } = useContext(TourContext);
    const [isTab, setTab] = useState(0);
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.title}>Requests</Text>
            </View>
            <SwitchBar setTab={setTab} />
            <HistoryList isVisible={isTab == 0} fetchData={{ data, isLoading, error, refetch }} />
            <OngoingTour isVisible={isTab == 1} tourContext={{ tourInfor, setTourInfo, setAllowListen }} session={session} />
        </SafeAreaView>
    )
}

export default History;