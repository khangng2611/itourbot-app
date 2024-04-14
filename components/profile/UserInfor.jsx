import { View, Text } from "react-native";
import styles from "./profile.style";

const UserInfor = ({user}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.titleText}>User Id: </Text>
                <Text style={styles.infoText}>{user.id}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.titleText}>Name: </Text>
                <Text style={styles.infoText}>{user.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.titleText}>Email: </Text>
                <Text style={styles.infoText}>{user.email}</Text>
            </View>
        </View>
    )
}

export default UserInfor;