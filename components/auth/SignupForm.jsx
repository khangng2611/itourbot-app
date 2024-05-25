import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { useState } from 'react';
import Input from '../common/input/Input';
import styles from './auth.style';
import { validateEmail } from '../../utils/checkFormat';
import { register } from '../../utils/api';
import { useRouter } from 'expo-router';
import InforModal from '../common/modal/InforModal';

const SignupForm = ({ setLoading }) => {
    const [inputs, setInputs] = useState({ name: '', email: '', password: '', retypePassword: '' });
    const [errors, setErrors] = useState({});
    const [inforModal, setInforModal] = useState({
        isVisible: false,
        headerText: "",
        contentText: "",
        isInvalid: false
    });
    const router = useRouter();

    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!inputs.name) {
            handleError('Please input your name', 'name');
            isValid = false;
        }
        if (!inputs.email) {
            handleError('Please input your email', 'email');
            isValid = false;
        } else if (!validateEmail(inputs.email)) {
            handleError('Invalid email format', 'email');
            isValid = false;
        }
        if (!inputs.password) {
            handleError('Please input password', 'password');
            isValid = false;
        } else if (inputs.password.length < 6) {
            handleError('Password must be greater than 6 characters long', 'password');
            isValid = false;
        }
        if (!inputs.retypePassword) {
            handleError('Please retype password', 'retypePassword');
            isValid = false;
        } else if (inputs.retypePassword !== inputs.password) {
            handleError('Retype password is not match', 'retypePassword');
            isValid = false;
        }
        if (isValid) {
            await signup(inputs);
        }
    };

    const signup = async (inputs) => {
        try {
            setLoading(true);
            const response = await register(inputs);
            setInforModal({
                isVisible: true,
                headerText: 'Signup successfully',
                contentText: "You have successfully signed up. Please login to continue.",
                isInvalid: false
            });
        } catch (error) {
            setInforModal({
                isVisible: true,
                headerText: 'Signup fail',
                contentText: error.message ? `${error.message}` : "Invalid Information",
                isInvalid: true
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
                onChangeText={text => handleOnchange(text, 'name')}
                onFocus={() => handleError(null, 'name')}
                label="Your name"
                placeholder="Enter your name"
                error={errors.name}
            />
            <Input
                onChangeText={text => handleOnchange(text, 'email')}
                onFocus={() => handleError(null, 'email')}
                label="Your email"
                placeholder="Enter your email address"
                error={errors.email}
            />
            <Input
                onChangeText={text => handleOnchange(text, 'password')}
                onFocus={() => handleError(null, 'password')}
                label="Your password"
                placeholder="Enter your password"
                error={errors.password}
                password={true}
            />
            <Input
                onChangeText={text => handleOnchange(text, 'retypePassword')}
                onFocus={() => handleError(null, 'retypePassword')}
                label="Retype your pasword"
                placeholder="Enter your password again"
                error={errors.retypePassword}
                password={true}
            />
            <TouchableOpacity
                style={styles.authBtn}
                onPress={() => validate()}
            >
                <Text style={styles.authBtnText}>Sign Up</Text>
            </TouchableOpacity>
            <InforModal
                isVisible={inforModal.isVisible}
                setInforModal={setInforModal}
                headerText={inforModal.headerText}
                contentText={inforModal.contentText}
                isInvalid={inforModal.isInvalid}
            />
        </View>
    );
};
export default SignupForm;