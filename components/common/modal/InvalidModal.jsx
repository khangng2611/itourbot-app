
import {Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';
import { COLORS } from '../../../constants';

const InavlidModal = ({isVisible, setInvalidModal, headerText, contentText}) => {
    const handleCancel = async () => {
        setInvalidModal({
            isVisible: false,
            headerText: "",
            contentText: ""
        });
    }
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
                    <Text style={[styles.headerText, {color:COLORS.red}]}>{headerText}</Text>
                    <Text style={styles.contentText}>{contentText}</Text>
                    <View style={styles.btnWrapper}>
                        <Pressable
                            style={[styles.button, styles.infoBtn]}
                            onPress={handleCancel}
                        >
                            <Text style={styles.btnText}>Back</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default InavlidModal;