import { View, Text, SafeAreaView } from "react-native";
import styles from '../../../styles/app.style';
import { SwitchBar, HistoryList,  OngoingTour } from "../../../components";
import { useState } from "react";

const History = () => {
    const [isTab, setTab] = useState(0);
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.title}>Requests</Text>
            </View>
            <SwitchBar setTab={setTab} />
            <HistoryList isVisible={isTab==0}/> 
            <OngoingTour isVisible={isTab==1}/>
        </SafeAreaView>
    )
}

export default History;