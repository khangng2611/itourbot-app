import { useState } from "react";
import { SafeAreaView, ScrollView, View, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import styles from '../../../styles/app.style';
import { SIZES } from "../../../constants";
import { PopularStations, Search, Welcome } from "../../../components";
import { useAuth } from "../../../components/context";

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ flexGrow: 1 }} 
        style = {{ padding: SIZES.medium }}
      >
        {/* <View
          style={{
            padding: SIZES.medium,
            flex: 1
          }} 
        > */}
          <Welcome user={user} />
          <Search
            // searchTerm={searchTerm}
            // setSearchTerm={setSearchTerm}
            // handleClick={() => {
            //   if (searchTerm) {
            //     router.push(`/search/${searchTerm}`)
            //   }
            // }}
          />
          <PopularStations />
        {/* </View> */}
      </ScrollView>
      <StatusBar barStyle='dark-content' />
    </SafeAreaView>
  );
};

export default Home;
