import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { useState } from 'react';
import Input from '../../common/input/Input';
import styles from '../auth.style';
import { resetPassword } from '../../../utils/api';
import { useRouter } from 'expo-router';
import InforModal from '../../common/modal/InforModal';
import { SIZES, COLORS } from '../../../constants';

const NewPasswordForm = ({ email, passcode, setLoading }) => {
    const [password, setPassword] = useState({ newPassword: '', confirmPassword: '' });
    const [errors, setErrors] = useState({ newPassword: '', confirmPassword: '', resetPasswordResult: '' });
    const [isModalVisible, setModalVisible] = useState({
        isVisible: false,
        headerText: "",
        contentText: "",
        isInvalid: false
    });
    const router = useRouter();

    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;
        if (!password.newPassword) {
            handleError('Please input new password', 'newPassword');
            isValid = false;
        } else if (password.newPassword !== password.confirmPassword) {
            handleError('Password is not match', 'confirmPassword');
            isValid = false;
        }
        if (password.newPassword.length < 6) {
            handleError('Password must be greater than 6 characters long', 'newPassword');
            isValid = false;
        }
        if (isValid) {
            await submit(email, password.newPassword);
        }
    }

    const submit = async (email, newPassword) => {
        try {
            setLoading(true);
            await resetPassword(email, passcode, newPassword);
            setModalVisible(true);
        } catch (error) {
            setErrors(prev => ({ ...prev, resetPasswordResult: error.message || "Invalid Information" }));
        } finally {
            setLoading(false);
        }
    };

    const handleOnchange = (value, field) => {
        setPassword(prev => ({ ...prev, [field]: value }));
    };

    const handleError = (error, field) => {
        setErrors(prev => ({ ...prev, [field]: error }));
    };
    return (
        <View style={styles.formContainer}>
            <Text style={styles.forgotPasswordText}>Set the new password for your account so you can login and access all the features.</Text>
            <Input
                onChangeText={text => handleOnchange(text, 'newPassword')}
                onFocus={() => handleError(null, 'newPassword')}
                label="New password"
                placeholder="Enter your new password"
                error={errors.newPassword}
                password={true}
            />
            <Input
                onChangeText={text => handleOnchange(text, 'confirmPassword')}
                onFocus={() => handleError(null, 'confirmPassword')}
                label="Confirm new password"
                placeholder="Confirm your new password"
                error={errors.confirmPassword}
                password={true}
            />
            <TouchableOpacity
                style={styles.authBtn}
                onPress={() => validate()}
            >
                <Text style={styles.authBtnText}>Reset Password</Text>
            </TouchableOpacity>
            <Text onPress={() => router.back()} style={styles.returnSigninText}>Return to Sign In</Text>
            {
                errors.resetPasswordResult && (
                    <Text style={{ marginTop: SIZES.xSmall, color: COLORS.red, fontSize: SIZES.small }}>
                        {errors.resetPasswordResult}
                    </Text>
                )
            }
            <InforModal
                isVisible={isModalVisible}
                setInforModal={setModalVisible}
                headerText="Reset password successfully"
                contentText="You have successfully reset your password. Please login to continue."
                isInvalid={false}
            // onPress={() => router.back()}
            />
        </View>
    );
}
export default NewPasswordForm;
