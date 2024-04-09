import { useEffect } from 'react';
import { Alert, Modal, Text, Pressable, View, TouchableOpacity } from 'react-native';
import styles from './modal.style';
import * as database from 'firebase/database';
import { db, setRequestStage } from '../../../utils/firebase';
import { updateTourStatus } from "../../../utils/apiRequest";
import { couldStartTrivia } from 'typescript';

const GetPickupModal = ({ isVisible, setVisible, setAllowListen, tourInfor, setTourInfo, session }) => {
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
            console.log("isVisible");
            timeout = setTimeout(() => {
                setVisible(false);
                console.log(isVisible);
                handleCancel();
            }, 2000);
        }
        return () => clearTimeout(timeout);
    }, [isVisible]);
    return (
        <>
            <TouchableOpacity
                onPress={() => setVisible(true)}
            >
                <Text>Open Modal</Text>
            </TouchableOpacity>
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
                        <Text style={styles.contentText}>Turtlebot has just reached your pickup station! Please confirm to allow Turtlebot to start the tourguide.</Text>
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
        </>
    );
};

export default GetPickupModal;