
import { Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';
import { COLORS } from '../../../constants';
import { useRouter } from 'expo-router';

const InforModal = ({ isVisible, setInforModal, headerText, contentText, isInvalid }) => {
    const router = useRouter();
    const handleCancel = async () => {
        setInforModal({
            isVisible: false,
            headerText: "",
            contentText: ""
        });
        if (!isInvalid) {
            router.back()
        };
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
                    <Text style={[styles.headerText, { color: isInvalid ? COLORS.red : COLORS.green }]}>{headerText}</Text>
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

export default InforModal;