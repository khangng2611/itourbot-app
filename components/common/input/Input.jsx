import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../../constants';
import {icons} from '../../../constants';
import styles from './input.style';

const Input = ({ label, iconName, error, password, onFocus = () => { }, ...props }) => {
    const [hidePassword, setHidePassword] = useState(password);
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={{}}>
            <Text style={styles.label}>{label}</Text>
            <View
                style={[
                    styles.inputContainer,
                    {
                        borderColor: error ? COLORS.red : isFocused ? COLORS.primary : COLORS.secondary,
                        alignItems: 'center',
                    },
                ]}>
                <TextInput
                    autoCorrect={false}
                    onFocus={() => {
                        onFocus();
                        setIsFocused(true);
                    }}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={hidePassword}
                    style={{ color: COLORS.primary, flex: 1 }}
                    {...props}
                />
                {password &&
                    <TouchableOpacity
                        onPress={() => setHidePassword(!hidePassword)}
                    >
                        <Image source={icons.hidePassword} resizeMode='contain' style={styles.hidePassword} />
                    </TouchableOpacity>
                    // && (
                    //     <Icon
                    //         onPress={() => setHidePassword(!hidePassword)}
                    //         name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                    //         style={{ color: COLORS.darkBlue, fontSize: 22 }}
                    //     />
                    // )
                }
            </View>
            {
                error && (
                    <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
                        {error}
                    </Text>
                )
            }
        </View >
    );
};

export default Input;