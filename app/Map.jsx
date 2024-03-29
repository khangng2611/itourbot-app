import { SafeAreaView, View, Text, ScrollView, StatusBar } from "react-native";
import { Stack } from "expo-router";
import styles from '../styles/app.style';
import { TabNavigator, LocationSpot, MapImage, BotStateBox } from "../components";
import { fetchState } from '../hook/firebaseFetch';

const Map = () => {
    const chosenTab = "map";
    const { x, y, battery, isFree } = fetchState();
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.title}>Maps</Text>
            </View>
            <View style={{ flex: 2 }}>
                <MapImage />
                <LocationSpot x={x} y={y} />
            </View>
            <ScrollView style={[{ flex: 1 }, styles.container]}>
                <BotStateBox x={x} y={y} battery={battery} isFree={isFree} />
            </ScrollView>
            <TabNavigator chosenTab={chosenTab} />
            <StatusBar barStyle='dark-content' />
        </SafeAreaView>
    );
};

export default Map;
