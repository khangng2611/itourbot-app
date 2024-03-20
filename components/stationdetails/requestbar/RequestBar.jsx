import { Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { useEffect, useState } from "react";
import styles from "./requestbar.style";
import { COLORS, SIZES, icons } from "../../../constants";
import { Dropdown } from "react-native-element-dropdown"
import stateFetch from "../../../hook/firebaseFetch";
import { postTours } from "../../../utils/apiRequest";

const RequestBar = ({ item }) => {
    const stationList = JSON.parse(item.stationList);
    const { isFree } = stateFetch();
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [requestStatus, setRequestStatus] = useState([false, ""]);


    const handleRequestTour = () => {
        if (value) {
            if (value == item.stationId) {
                Alert.alert('Invalid station', `Pickup station must be different from ${item.name}`, []);
            } else {
                Alert.alert('Confirm Request', `Are you sure to request a tour guide to ${item.name} ?`, [
                    { text: 'Cancel' },
                    {
                        text: 'Confirm', onPress: async () => {
                            try {
                                const response = await postTours({ fromStation: value, toStation: item.stationId })
                                setRequestStatus([true, "OK"]);
                            } catch (error) {
                                setRequestStatus([true, error.message]);
                                console.log(error);
                            }
                        }
                    }
                ]);
            }
        } else {
            Alert.alert('Select a station', 'Please select a station to continue', []);
        }
    }

    return (
        <View style={styles.container}>
            {requestStatus[0] ? (
                <TouchableOpacity
                    style={styles.requestStatus(requestStatus[1])}
                    onPress={() => setRequestStatus(false, "")}
                >
                    <Text style={[styles.textStyle, {color : requestStatus[1] === "OK" ? COLORS.red : COLORS.red}]}>
                        {requestStatus[1] === "OK" ? "Request Successfully !" : requestStatus[1]}
                    </Text>
                </TouchableOpacity>
            ) : null}
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1.5, marginEnd: SIZES.large }}>
                    <Text style={[styles.textStyle, { color: COLORS.secondary, marginBottom: 5 }]}>Pickup station: </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
                        placeholderStyle={styles.textStyle}
                        selectedTextStyle={styles.textStyle}
                        inputSearchStyle={styles.textStyle}
                        iconStyle={styles.iconStyle}
                        data={stationList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search station"
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={seletedItem => {
                            setValue(seletedItem.value);
                            setIsFocus(false);
                        }}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button(isFree)}
                    onPress={() => handleRequestTour()}
                    disabled={!isFree}
                >
                    <Text style={[styles.textStyle, { color: COLORS.lightWhite, flexShrink: 1 }]}>{isFree ? "Request Tour" : "Robot not available"}</Text>
                    <Image source={icons.send} resizeMode='contain' style={styles.sendIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RequestBar;