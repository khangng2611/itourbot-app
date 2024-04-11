import { Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';

const StopTourModal = ({ isVisible, setVisble, handleConfirm }) => {
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
                    <Text style={styles.headerText}>Confirm Stop</Text>
                    <Text style={styles.contentText}>Are you sure to stop tour guide ? </Text>
                    <View style={styles.btnWrapper}>
                        <Pressable
                                style={[styles.button, styles.cancelBtn]}
                                onPress={() => setVisble(false)}
                            >
                                <Text style={styles.btnText}>Cancel</Text>
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

export default StopTourModal;