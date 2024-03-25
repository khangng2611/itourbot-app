import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Input from '../common/input/Input';
import styles from './auth.style';

const LoginForm = () => {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
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
                onChangeText={text => handleOnchange(text, 'email')}
                onFocus={() => handleError(null, 'email')}
                label="Password"
                placeholder="Enter your email address"
                error={errors.email}
                password={true}
            />
        </View>
    );
};

export default LoginForm;