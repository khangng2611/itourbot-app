import { Text, TouchableOpacity, View } from "react-native";
import styles from "./profile.style";
import { useState } from "react";
import { Redirect } from "expo-router";
import SignOutModal from "../common/modal/SignOutModal";

const SignOut = ({ signOut }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const handleLogOut = () => {
        signOut();
        return <Redirect href="/(app)" />;
    }
    return (
        <View>
            <TouchableOpacity
                style={styles.signOutBtn}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.signOutText}>Sign out</Text>
            </TouchableOpacity>
            <SignOutModal
                isVisible={isModalVisible}
                setVisible={setModalVisible}
                handleConfirm={handleLogOut}
            />
        </View>
    )
}

export default SignOut;