import { Stack, useLocalSearchParams } from "expo-router";
import styles from '../../../styles/app.style';
import { SafeAreaView, ScrollView, View } from "react-native";
import { Poster, RequestBar, About, BackWrapper } from '../../../components';

const StationDetails = () => {
  const data = useLocalSearchParams();
  const item = JSON.parse(data.data);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen
        options={{
          headerShown: false
          // headerStyle: { backgroundColor: COLORS.lightWhite },
          // headerShadowVisible: false,
          // headerBackVisible: false,
          // headerLeft: () => (
          //   <ScreenHeaderBtn
          //     iconUrl={icons.left}
          //     dimension='60%'
          //     handlePress={() => router.back()}
          //   />
          // ),
          // headerRight: () => (
          //   <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
          // ),
          // headerTitle: "",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        style={styles.container}
      >
        <Poster item={item} />
        <About item={item} />
      </ScrollView>
      <BackWrapper />
      <RequestBar item={item} />
    </SafeAreaView>
  );
};

export default StationDetails;
