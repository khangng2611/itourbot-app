import { SafeAreaView, View, Text } from "react-native";
import { Stack } from "expo-router";
import styles from './app.style';
import { ScreenHeaderBtn, TabNavigator, LocationSpot, MapImage, BotStateBox } from "../components";
import stateFetch from '../hook/firebaseFetch';

const Map = () => {
    const chosenTab = "map";
    const {x,y, battery, isFree} = stateFetch();
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Stack.Screen   
                options={{
                    headerShown: false,
                    // headerStyle: { backgroundColor: COLORS.lightWhite },
                    // headerShadowVisible: false,
                    // headerLeft: () => (
                    //     <ScreenHeaderBtn
                    //         iconUrl={icons.left}
                    //         dimension='60%'
                    //         handlePress={() => router.back()}
                    //     />
                    // ),
                    // headerTitle: "",
                }}
            />
            <View style={styles.container}>
                <Text style={styles.title}>Maps</Text>
            </View>
            <MapImage/>
            <LocationSpot x={x} y={y}/>
            <BotStateBox/>
            <TabNavigator chosenTab={chosenTab} />
        </SafeAreaView>
    );
};

export default Map;
