import { useState } from "react";
import { SafeAreaView, ScrollView, View, StatusBar } from "react-native";
import { Stack, Tabs, useRouter } from "expo-router";
import styles from '../../../styles/app.style';
import { COLORS, icons, images, SIZES } from "../../../constants";
import { PopularStations, ScreenHeaderBtn, Welcome, TabNavigator } from "../../../components";
import { useAuth } from "../../../components/context/AuthContext";

const Home = () => {
  const { session } = useAuth();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Tabs.Screen
        options={{
          headerShown: false,
          gestureEnabled: false, // Prevent swipe left
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
      /> */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
        <View
          style={{
            padding: SIZES.medium,
            flex: 1
          }}
        >
          <Welcome
            user={session.user}
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
      <StatusBar barStyle='dark-content' />
    </SafeAreaView>
  );
};

export default Home;
