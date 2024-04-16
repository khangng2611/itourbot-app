import { View, Text, SafeAreaView } from "react-native";
import styles from '../../../styles/app.style';
import { useAuth } from "../../../components/context";
import { SignOut, UserInfor } from "../../../components";

const Profile = () => {
    const { session, signOut } = useAuth();
    const userInfo = session.user;
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
            </View>
            <UserInfor user={userInfo}/>
            <SignOut signOut={signOut}/>
        </SafeAreaView>
    )
}

export default Profile;