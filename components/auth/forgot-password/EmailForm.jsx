import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { useState } from 'react';
import Input from '../../common/input/Input';
import styles from '../auth.style';
import { forgotPassword } from '../../../utils/api';
import { useRouter } from 'expo-router';
import { validateEmail } from '../../../utils/checkFormat';

const EmailForm = ({ email, setEmail, setForgotPasswordStage, setLoading}) => {
    const [errors, setError] = useState();
    const router = useRouter();

    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!email) {
            handleError('Please input email');
            isValid = false;
        } else if (!validateEmail(email)) {
            handleError('Invalid email format');
            isValid = false;
        }
        if (isValid) {
            await submit(email);
        }
    }

    const submit = async (email) => {
        try {
            setLoading(true);
            await forgotPassword(email);
            setForgotPasswordStage(2);
        } catch (error) {
            setError(error.message || "Invalid Information")
        } finally {
            setLoading(false);
        }
    };

    const handleOnchange = (text) => {
        setEmail(text);
    };

    const handleError = (error) => {
        setError(error);
    };
    return (
        <View style={styles.formContainer}>
            <Text style={styles.forgotPasswordText}>Enter your email for the verification proccess, we will send 6 digits code to your email.</Text>
            <Input
                onChangeText={text => handleOnchange(text)}
                onFocus={() => handleError(null)}
                label="Email"
                placeholder="Enter your email address"
                error={errors}
            />
            <TouchableOpacity
                style={styles.authBtn}
                onPress={() => validate()}
            >
                <Text style={styles.authBtnText}>Send email</Text>
            </TouchableOpacity>
            <Text onPress={() => router.back()} style={styles.returnSigninText}>Return to Sign In</Text>
        </View>
    );
}
export default EmailForm;
