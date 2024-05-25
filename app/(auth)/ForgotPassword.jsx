import { SafeAreaView, StatusBar, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from '../../styles/app.style';
import { EmailForm, Loader, PasscodeForm, NewPasswordForm } from "../../components";
import { useState } from "react";

const ForgotPassword = () => {
    const [isLoading, setLoading] = useState(false);
    const [forgotPasswordStage, setForgotPasswordStage] = useState(1);
    const [email, setEmail] = useState('');
    const [validPasscode, setValidPasscode] = useState('');
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={[styles.title, styles.container]}>Forgot Password</Text>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={"padding"}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    { forgotPasswordStage == 1 && <EmailForm email={email} setEmail={setEmail} setForgotPasswordStage={setForgotPasswordStage} setLoading={setLoading} /> }
                    { forgotPasswordStage == 2 && <PasscodeForm email={email} setValidPasscode={setValidPasscode} setForgotPasswordStage={setForgotPasswordStage} setLoading={setLoading} /> }
                    { forgotPasswordStage == 3 && <NewPasswordForm email={email} passcode={validPasscode} setLoading={setLoading} /> }
                </ScrollView>
            </KeyboardAvoidingView>
            <StatusBar barStyle='dark-content' />
            <Loader visible={isLoading} />
        </SafeAreaView>
    );
};

export default ForgotPassword;
