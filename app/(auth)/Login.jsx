import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import styles from '../../styles/app.style';
import { LoginForm, LoginImage, Loader, OAuthLogin } from "../../components";
import { useState } from "react";

const Login = () => {
    const [isLoading, setLoading] = useState(false);
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                <LoginImage />
                <LoginForm setLoading={setLoading} />
                {/* <OAuthLogin /> */}
                <Loader visible={isLoading} />
            </ScrollView>
            <StatusBar barStyle='dark-content' />
        </SafeAreaView>
    );
};

export default Login;