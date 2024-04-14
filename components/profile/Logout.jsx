import { Text, TouchableOpacity, View } from "react-native";
import styles from "./profile.style";
import { useState } from "react";
import { useRouter, Redirect } from "expo-router";
import LogOutModal from "../common/modal/LogOutModal";

const Logout = ({ signOut }) => {
    const router = useRouter();
    const [isModalVisible, setModalVisible] = useState(false);
    const handleLogOut = () => {
        signOut();
        // router.replace('/')
        return <Redirect href="/(app)" />;
    }
    return (
        <View>
            <TouchableOpacity
                style={styles.logoutBtn}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
            <LogOutModal
                isVisible={isModalVisible}
                setVisible={setModalVisible}
                handleConfirm={handleLogOut}
            />
        </View>
    )
}

export default Logout;