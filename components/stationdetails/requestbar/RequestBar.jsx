import { Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import styles from "./requestbar.style";
import { COLORS, SIZES, icons } from "../../../constants";
import { Dropdown } from "react-native-element-dropdown"
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

const RequestBar = ({ item }) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);    return (
        <View style={styles.container}>
            <View style={{flex: 1, marginEnd: SIZES.large}}>
                <Text style={[styles.textStyle, {color: COLORS.secondary, marginBottom: 5}]}>Pickup station: </Text>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
                    placeholderStyle={styles.textStyle}
                    selectedTextStyle={styles.textStyle}
                    inputSearchStyle={styles.textStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    // renderLeftIcon={() => (
                    //     <AntDesign
                    //         style={styles.icon}
                    //         color={isFocus ? 'blue' : 'black'}
                    //         name="Safety"
                    //         size={20}
                    //     />
                    // )}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleBackPress()}
            >
                <Text style={[styles.textStyle, {color: COLORS.lightWhite}]}>Request  </Text>
                <Image source={icons.send} resizeMode='contain' style={styles.sendIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default RequestBar;