
import {Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';
import { COLORS } from '../../../constants';

const SignOutModal = ({isVisible, setVisible, handleConfirm}) => {
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
                    <Text style={[styles.headerText, {color: COLORS.primary}]}>Sign out</Text>
                    <Text style={styles.contentText}>Are you sure to sign out ?</Text>
                    <View style={styles.btnWrapper}>
                        <Pressable
                            style={[styles.button, styles.cancelBtn]}
                            onPress={() => setVisible(false)}
                        >
                            <Text style={[styles.btnText, {color: COLORS.red}]}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, {backgroundColor: COLORS.red}]}
                            onPress={handleConfirm}
                        >
                            <Text style={[styles.btnText, {color: COLORS.lightWhite}]}>Sign out</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default SignOutModal;