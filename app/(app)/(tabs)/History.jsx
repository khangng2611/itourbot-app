import { SafeAreaView } from "react-native";
import styles from '../../../styles/app.style';
import { HistoryHeader, SwitchBar, HistoryList, OngoingTour } from "../../../components";
import { useState, useContext } from "react";
import useFetch from "../../../hook/useFetch";
import { TourContext, DataContext } from "../../../components/context";

const History = () => {
    const { stationsList } = useContext(DataContext);
    const { data, isLoading, error, refetch } = useFetch("tours", null);
    const { tourInfor, setTourInfo, setAllowListen } = useContext(TourContext);
    const [isTab, setTab] = useState(0);
    const [isStopModal, setStopModal] = useState(false);
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <HistoryHeader />
            <SwitchBar isTab={isTab} setTab={setTab} />
            <HistoryList
                isVisible={isTab == 0}
                fetchData={{ data, isLoading, error, refetch }}
            />
            <OngoingTour
                isVisible={isTab == 1}
                tourContext={{ tourInfor, setTourInfo, setAllowListen }}
                isStopModal={isStopModal}
                setStopModal={setStopModal}
                stationsList={stationsList}
            />
        </SafeAreaView>
    )
}

export default History;