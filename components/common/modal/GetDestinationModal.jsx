import { Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';
import { updateTourStatus } from "../../../utils/apiRequest";

const GetDestinationModal = ({ isVisible, setVisible, setAllowListen, tourInfor, setTourInfo, session }) => {
    const handleClick = async () => {
        try {
            setVisible(false);
            updateTourStatus(tourInfor._id, 'done', session);
            setTourInfo({});
            setAllowListen(false);
            // database.off(reachStationRef);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                handleClick();
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.headerText}>Tour Notification</Text>
                    <Text style={styles.contentText}>Turtlebot has just reached your destination! Thank you for your experience.</Text>
                    <View style={styles.btnWrapper}>
                        {/* <Pressable
                                style={[styles.button, styles.cancelBtn]}
                                onPress={handleCancel}
                            >
                                <Text style={styles.btnText}>Cancel Tour</Text>
                            </Pressable> */}
                        <Pressable
                            style={[styles.button, styles.confirmBtn]}
                            onPress={handleClick}
                        >
                            <Text style={styles.btnText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GetDestinationModal;