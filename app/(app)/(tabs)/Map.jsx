import { SafeAreaView, View, Text, StatusBar } from "react-native";
import styles from '../../../styles/app.style';
import { LocationSpot, MapImage, StateInfo } from "../../../components";
import { fetchState } from '../../../utils/firebase';
import { icons } from "../../../constants";

const Map = () => {
    const { x, y, battery, isFree } = fetchState();
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.title}>Maps</Text>
            </View>
            <View style={{ flex: 2 }}>
                <MapImage />
                <LocationSpot x={x} y={y} icon={icons.botLocation} />
            </View>
            <StateInfo x={x} y={y} battery={battery} isFree={isFree} />
            <StatusBar barStyle='dark-content' />
        </SafeAreaView>
    );
};

export default Map;
