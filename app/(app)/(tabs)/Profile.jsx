import { View, Text, SafeAreaView } from "react-native";
import styles from '../../../styles/app.style';
import { useAuth } from "../../../components/context";
import { SignOut, UserInfor } from "../../../components";

const Profile = () => {
    const { user, signOut } = useAuth();
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
            </View>
            <UserInfor user={user} />
            <SignOut signOut={signOut} />
        </SafeAreaView>
    )
}

export default Profile;