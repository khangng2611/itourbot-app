import { Text, View } from "react-native";
import styles from "./stationsdetails.style";

const About = ({ item }) => {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutTitle}>Overview </Text>
            <Text style={styles.aboutContent}>{item.description}</Text>
        </View>
    )
}

export default About;