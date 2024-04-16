import { Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';
import { COLORS } from '../../../constants';

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
                    <Text style={[styles.headerText, {color: COLORS.primary}]}>Confirm Stop</Text>
                    <Text style={styles.contentText}>Are you sure to stop tour guide ? </Text>
                    <View style={styles.btnWrapper}>
                        <Pressable
                                style={[styles.button, styles.cancelBtn]}
                                onPress={() => setVisble(false)}
                            >
                                <Text style={[styles.btnText, {color:COLORS.red}]}>Cancel</Text>
                            </Pressable>
                        <Pressable
                            style={[styles.button, {backgroundColor: COLORS.red}]}
                            onPress={handleConfirm}
                        >
                            <Text style={[styles.btnText, {color: COLORS.lightWhite}]}>Stop Tour</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default StopTourModal;