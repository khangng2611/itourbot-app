
import { Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';
import { COLORS, SIZES } from '../../../constants';

const RequestModal = ({ isVisible, setVisible, requestTour, requestStations, stationsList }) => {
    const fromStationName = requestStations.fromStation ?
        stationsList[parseInt(requestStations.fromStation, 10) - 1].name :
        "";
    const toStationNameArr = requestStations.toStationList.length > 0 ?
        requestStations.toStationList.map(stationId => stationsList[parseInt(stationId, 10) - 1].name) :
        [];

    const handleConfirm = async () => {
        try {
            setVisible(!isVisible);
            await requestTour();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        fromStationName && (
            <Modal
                animationType='fade'
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                    handleCancel();
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.headerText, { marginBottom: 5 }]}>Tourguide Request</Text>
                        <Text style={styles.inforText}>Please check your request information again: </Text>
                        <Text style={styles.inforText}>
                            Pickup station:
                            <Text style={styles.stationText}> {fromStationName} </Text>
                        </Text>
                        <Text style={styles.inforText}>
                            Destination station:
                            <Text style={styles.stationText}> {toStationNameArr.join(', ')} </Text>
                        </Text>
                        <View style={[styles.btnWrapper, { marginTop: SIZES.small }]}>
                            <Pressable
                                style={[styles.button, styles.cancelBtn]}
                                onPress={() => setVisible(!isVisible)}
                            >
                                <Text style={[styles.btnText, {color: COLORS.red}]}>Cancel Tour</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.confirmBtn]}
                                onPress={handleConfirm}
                            >
                                <Text style={[styles.btnText, {color: COLORS.green}]}>Confirm Tour</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    );
};

export default RequestModal;