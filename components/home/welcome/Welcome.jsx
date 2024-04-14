import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons } from "../../../constants";
import { DataContext } from "../../context";

// const jobTypes = ["All", "Most visited", "Nearby"];
const Welcome = ({ user, searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  // const [activeJobType, setActiveJobType] = useState("Full-time");
  const { screenHeight } = useContext(DataContext);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hi, {user.name} 👋</Text>
        <Text style={styles.welcomeMessage}>Explore our world !</Text>
      </View>

      <View style={styles.btnWrapper}>
        <TouchableOpacity
          onPress={() => router.push("/tours-request")}
          style={styles.mainFeatBtn(screenHeight)}
        >
          <Text style={styles.mainFeatText}>Request tourguide</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace({
            pathname: `/(app)/(tabs)/History`,
            params: { initialTab: 1 }
          })}
          style={styles.mainFeatBtn(screenHeight)}
        >
          <Text style={styles.mainFeatText}>Check your tour</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
              disabled
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View> */}
    </View>
  );
};

export default Welcome;
