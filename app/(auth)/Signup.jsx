import { SafeAreaView, ScrollView, StatusBar, KeyboardAvoidingView } from "react-native";
import styles from '../../styles/app.style';
import { LoginForm, LoginImage, Loader, BackWrapper } from "../../components";
import { useState } from "react";
import SignupForm from "../../components/auth/SignupForm";

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
                    <SignupForm setLoading={setLoading} />
                    <Loader visible={isLoading} />
                </ScrollView>
            </KeyboardAvoidingView>
            <BackWrapper />
            <StatusBar barStyle='dark-content' />
        </SafeAreaView>
    );
};

export default Login;
