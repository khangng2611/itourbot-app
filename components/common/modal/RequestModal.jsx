
import { Modal, Text, Pressable, View } from 'react-native';
import styles from './modal.style';
import { SIZES } from '../../../constants';

const RequestModal = ({ isVisible, setVisible, requestTour, tourData, stationsList }) => {
    const pickupStation = stationsList.find(station => station.stationId === parseInt(tourData.chosenStation));
    const handleCancel = async () => {
        try {
            setVisible(!isVisible);
        } catch (error) {
            console.log("error");
            console.log(error);
        }
    }
    const handleConfirm = async () => {
        try {
            setVisible(!isVisible);
            await requestTour();
            // updateTourStatus(tourInfor._id, 'leading', session);
            // setRequestStage(tourInfor.toStation, 2);
            // setTourInfo({
            //     ...tourInfor,
            //     status: 'leading',
            // });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        pickupStation && (
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
                            <Text style={styles.stationText}> {pickupStation.name} </Text>
                        </Text>
                        <Text style={styles.inforText}>
                            Destination station:
                            <Text style={styles.stationText}> {tourData.name} </Text>
                        </Text>
                        <View style={[styles.btnWrapper, { marginTop: SIZES.small }]}>
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
                                <Text style={styles.btnText}>Confirm Tour</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    );
};

export default RequestModal;