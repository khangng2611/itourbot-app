import { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./home.style";
import { SIZES, icons, images } from "../../constants";
import { DataContext } from "../context";

const Welcome = ({ user }) => {
  const router = useRouter();
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
          <Image
            source={images.requestBg}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: SIZES.medium
            }}
          />
          <Text style={styles.mainFeatText}>Request multi-stations</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
