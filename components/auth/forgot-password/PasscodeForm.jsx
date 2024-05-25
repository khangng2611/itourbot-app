import { View, Text, TouchableOpacity } from 'react-native';
import { useState, useRef } from 'react';
import styles from '../auth.style';
import { verifyPasscode } from '../../../utils/api';
import { useRouter } from 'expo-router';
import DigitInput from './DigitInput';
import { SIZES, COLORS } from '../../../constants';

const PasscodeForm = ({ email, setValidPasscode, setForgotPasswordStage, setLoading }) => {
    const [error, setError] = useState();
    const router = useRouter();
    const [passcode, setPasscode] = useState([null, null, null, null, null, null]);
    const inputRefs = useRef([]);

    const validate = () => {
        const isPasscodeNotNull = passcode.every((digit) => digit !== null);
        if (isPasscodeNotNull) {
            const joinedPasscode = passcode.join('');
            submit(joinedPasscode);
        } else {
            setError("Please enter a valid passcode");
        }
    };

    const focusNextInput = (index) => {
        if (index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleChangePasscode = (index, value) => {
        setPasscode(prev => {
            const newPasscode = [...prev];
            newPasscode[index] = value;
            return newPasscode;
        });
    }

    const submit = async (joinedPasscode) => {
        try {
            setLoading(true);
            await verifyPasscode(email, joinedPasscode);
            setValidPasscode(joinedPasscode);
            setForgotPasswordStage(3);
        } catch (error) {
            setError(error.message || "Invalid Passcode")
        } finally {
            setLoading(false);
        }
    };
    return (
        <View style={styles.formContainer}>
            <Text style={styles.forgotPasswordText}>Enter the 6-digits code that you received on your email.</Text>
            <View style={styles.passcodeContainer}>
                {
                    passcode.map((value, index) => (
                        <DigitInput
                            key={index}
                            value={value}
                            onChangeText={value => {
                                handleChangePasscode(index, value)
                                if (value) focusNextInput(index)
                            }}
                            onFocus={() => setError(null)}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                        />
                    ))
                }
            </View>
            {
                error && (
                    <Text style={{ marginTop: SIZES.xSmall, color: COLORS.red, fontSize: SIZES.small }}>
                        {error}
                    </Text>
                )
            }
            <TouchableOpacity
                style={styles.authBtn}
                onPress={() => validate()}
            >
                <Text style={styles.authBtnText}>Continue</Text>
            </TouchableOpacity>
            <Text onPress={() => router.back()} style={styles.returnSigninText}>Return to Sign In</Text>
        </View>
    );
}
export default PasscodeForm;
