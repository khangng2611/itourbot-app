import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { useState } from 'react';
import Input from '../common/input/Input';
import styles from './auth.style';
import { validateEmail } from '../../utils/checkFormat';
import { normalLogin } from '../../utils/apiRequest';
import { useRouter } from 'expo-router';
import { useAuth } from '../../components/context';
import { COLORS, FONT } from '../../constants';
import InavlidRequestModal from '../common/modal/InvalidModal';

const LoginForm = ({ setLoading }) => {
    const [inputs, setInputs] = useState({ email: 'khang@gmail.com', password: '123456' });
    const [errors, setErrors] = useState({});
    const [invalidModal, setInvalidModal] = useState({
        isVisible: false,
        headerText: "",
        contentText: ""
    });
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
            router.push("/(app)/(tabs)");
        } catch (error) {
            setInvalidModal({
                isVisible: true,
                headerText: "Login fail",
                contentText: error.message ? `${error.message}` : "Invalid Information"
            });
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
            <Text style={styles.forgotText}>Forgot Password ?</Text>
            <Text style={styles.signupText}>Don't have account?
                <Text onPress={() => router.push("/(auth)/Signup")} style={{color:COLORS.primary, fontFamily:FONT.bold}}> Sign Up</Text>
            </Text>
            <InavlidRequestModal
                isVisible={invalidModal.isVisible}
                setInvalidModal={setInvalidModal}
                headerText={invalidModal.headerText}
                contentText={invalidModal.contentText}
            />
        </View>
    );
};
export default LoginForm;