import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import styles from '../../../styles/app.style';
import { SIZES } from "../../../constants";
import { PopularStations, Search, Welcome } from "../../../components";
import { useAuth } from "../../../components/context";

const Home = () => {
  const { user } = useAuth();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ padding: SIZES.medium }}
      >
        <Welcome user={user} />
        <Search />
        <PopularStations />
      </ScrollView>
      <StatusBar barStyle='dark-content' />
    </SafeAreaView>
  );
};

export default Home;
