import { View, Text, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import Input from '../common/input/Input';
import styles from './auth.style';
import { validateEmail } from '../../utils/checkFormat';
import { normalLogin } from '../../utils/apiRequest';
import { useRouter } from 'expo-router';
import { useAuth } from '../../components/context/AuthContext';

const LoginForm = ({ setLoading }) => {
    const [inputs, setInputs] = useState({ email: 'khang@gmail.com', password: '123456' });
    const [errors, setErrors] = useState({});
    const { signIn } = useAuth();
    const router = useRouter();

    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!inputs.email) {
            handleError('Please input email', 'email');
            isValid = false;
        } else if (!validateEmail(inputs.email)) {
            handleError('Invalid email format', 'email');
            isValid = false;
        }
        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        }
        if (isValid) {
            await login(inputs);
        }
    };

    const login = async (inputs) => {
        try {
            setLoading(true);
            const response = await normalLogin(inputs, signIn);
            router.push("/(app)");
        } catch (error) {
            Alert.alert('Login fail', error.message ? `${error.message}` : "Invalid Information", [
                { text: 'Cancel' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (error, input) => {
        setErrors(prevState => ({ ...prevState, [input]: error }));
    };
    return (
        <View style={styles.formContainer}>
            <Input
                onChangeText={text => handleOnchange(text, 'email')}
                onFocus={() => handleError(null, 'email')}
                label="Email"
                placeholder="Enter your email address"
                error={errors.email}
            />
            <Input
                onChangeText={text => handleOnchange(text, 'password')}
                onFocus={() => handleError(null, 'email')}
                label="Password"
                placeholder="Enter your password"
                error={errors.password}
                password={true}
            />
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => validate()}
            >
                <Text style={styles.loginBtnText}>Sign In</Text>
            </TouchableOpacity>
            <Text onPress={() => validate()} style={styles.forgotText}>Forgot Password ?</Text>
            <Text onPress={() => router.push("/(auth)/Signup")} style={styles.signupText}>Don't have account? Sign Up</Text>
        </View>
    );
};
export default LoginForm;