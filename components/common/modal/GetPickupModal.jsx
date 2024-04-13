import { useContext, useEffect, useState } from 'react';
import { Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';
import { db, setRequestStage } from '../../../utils/firebase';
import { updateTourStatus } from "../../../utils/apiRequest";
import { COLORS, TOUR_STAGE } from '../../../constants';

const GetPickupModal = ({ isVisible, setVisible, setAllowListen, tourInfor, setTourInfo, session, stationsList }) => {
    const [remainingTime, setRemainingTime] = useState(30);
    const handleCancel = async () => {
        try {
            setVisible(!isVisible);
            updateTourStatus(tourInfor._id, 'canceled', session);
            setRequestStage([], TOUR_STAGE.cancel);
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
            const toStationArr = tourInfor.toStation.map(stationId => stationsList[stationId-1]);
            setRequestStage(toStationArr, TOUR_STAGE.destination);
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
                    setRemainingTime(30);
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
                handleCancel();
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.headerText}>Tour Notification</Text>
                    <Text style={styles.contentText}>
                        Turtlebot has just reached your pickup station! Please confirm in
                        <Text style={{ color: COLORS.red }}> {remainingTime}s </Text>
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