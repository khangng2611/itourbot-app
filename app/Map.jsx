import { SafeAreaView, View, Text, ScrollView, StatusBar } from "react-native";
import { Stack } from "expo-router";
import styles from '../styles/app.style';
import { ScreenHeaderBtn, TabNavigator, LocationSpot, MapImage, BotStateBox } from "../components";
import stateFetch from '../hook/firebaseFetch';
import { SIZES } from "../constants";

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
            <View style={{flex:2}}>
                <MapImage/>
                <LocationSpot x={x} y={y}/>
            </View>
            <ScrollView
                style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}
            >
                <BotStateBox x={x} y={y} battery={battery} isFree={isFree}/>
            </ScrollView>
            <TabNavigator chosenTab={chosenTab} />
            <StatusBar barStyle='dark-content' />
        </SafeAreaView>
    );
};

export default Map;
