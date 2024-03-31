import { View, Text, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { useState } from 'react';
import Input from '../common/input/Input';
import styles from './auth.style';
import { validateEmail } from '../../utils/checkFormat';
import { normalLogin } from '../../utils/apiRequest';
import { useRouter } from 'expo-router';

const LoginForm = ({setLoading}) => {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
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
            await normalLogin(inputs);
            router.replace("/Home");
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
        </View>
    );
};
export default LoginForm;