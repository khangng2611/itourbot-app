import { useEffect, useState } from 'react';
import { Alert, Modal, Text, Pressable, View, TouchableOpacity } from 'react-native';
import styles from './modal.style';
import * as database from 'firebase/database';
import { db, setRequestStage } from '../../../utils/firebase';
import { updateTourStatus } from "../../../utils/apiRequest";
import { COLORS } from '../../../constants';

const GetPickupModal = ({ isVisible, setVisible, setAllowListen, tourInfor, setTourInfo, session }) => {
    const [remainingTime, setRemainingTime] = useState(10);
    const handleCancel = async () => {
        try {
            setVisible(!isVisible);
            updateTourStatus(tourInfor._id, 'canceled', session);
            setRequestStage(null, 0);
            setTourInfo({})
            setAllowListen(false);
            // database.off(reachStationRef);
        } catch (error) {
            console.log("error");
            console.log(error);
        }
    }
    const handleConfirm = async () => {
        try {
            setVisible(!isVisible);
            updateTourStatus(tourInfor._id, 'leading', session);
            setRequestStage(tourInfor.toStation, 2);
            setTourInfo({
                ...tourInfor,
                status: 'leading',
            });
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        let timeout;
        if (isVisible) {
            timeout = setTimeout(() => {
                if (remainingTime > 0) {
                    setRemainingTime(remainingTime - 1);
                } else {
                    setVisible(false);
                    handleCancel();
                }
            }, 1000);
        }
        return () => clearTimeout(timeout);
    }, [isVisible, remainingTime]);
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                handleCancel();
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.headerText}>Tour Notification</Text>
                    <Text style={styles.contentText}>
                        Turtlebot has just reached your pickup station! Please confirm in 
                        <Text style={{color:COLORS.red}}> {remainingTime}s </Text> 
                        to allow Turtlebot to start the tourguide. After this time, the tour request is automatically canceled.
                    </Text>
                    <View style={styles.btnWrapper}>
                        <Pressable
                            style={[styles.button, styles.cancelBtn]}
                            onPress={handleCancel}
                        >
                            <Text style={styles.btnText}>Cancel Tour</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.confirmBtn]}
                            onPress={handleConfirm}
                        >
                            <Text style={styles.btnText}>Confirm</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GetPickupModal;