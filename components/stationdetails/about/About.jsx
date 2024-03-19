import { Text, View } from "react-native";
import styles from "./about.style";
const About = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Overview </Text>
            <Text style={styles.content}>{item.description}</Text>
        </View>
    )
}

export default About;