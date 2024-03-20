import { useState } from "react";
import { SafeAreaView, ScrollView, View, StatusBar } from "react-native";
import { Stack, useRouter } from "expo-router";
import styles from '../styles/app.style';
import { COLORS, icons, images, SIZES } from "../constants";
import { PopularStations, ScreenHeaderBtn, Welcome, TabNavigator } from "../components";

const Home = () => {
  const chosenTab = "home";
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen
        options={{
          headerShown: false,
          // headerStyle: { backgroundColor: COLORS.lightWhite },
          // headerShadowVisible: false,
          // headerLeft: () => (
          //   <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          // ),
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          // ),
          // headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
        <View
          style={{
            padding: SIZES.medium,
            flex: 1
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <PopularStations />
        </View>
      </ScrollView>
      <TabNavigator chosenTab={chosenTab} />
      <StatusBar barStyle='dark-content' />
    </SafeAreaView>
  );
};

export default Home;
