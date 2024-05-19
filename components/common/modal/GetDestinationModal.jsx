import { Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';
import { COLORS } from '../../../constants';

const GetDestinationModal = ({ isVisible, setVisible }) => {
    const handleClick = async () => {
        setVisible(false);
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
                        <Pressable
                            style={[styles.button, styles.confirmBtn]}
                            onPress={handleClick}
                        >
                            <Text style={[styles.btnText, { color: COLORS.green }]}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GetDestinationModal;