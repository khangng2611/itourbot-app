import { SafeAreaView, ScrollView, StatusBar, KeyboardAvoidingView } from "react-native";
import styles from '../../styles/app.style';
import { LoginForm, LoginImage, Loader } from "../../components";
import { useState } from "react";

const Login = () => {
    const [isLoading, setLoading] = useState(false);
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={"position"}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <LoginImage />
                    <LoginForm setLoading={setLoading} />
                    {/* <OAuthLogin /> */}
                </ScrollView>
            </KeyboardAvoidingView>
            <StatusBar barStyle='dark-content' />
            <Loader visible={isLoading} />
        </SafeAreaView>
    );
};

export default Login;
