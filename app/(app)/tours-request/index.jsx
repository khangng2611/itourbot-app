import { SafeAreaView } from "react-native";
import styles from '../../../styles/app.style';
import { RequestHeader, RequestContent } from "../../../components";

const ToursRequest = () => {
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <RequestHeader />
            <RequestContent />
        </SafeAreaView>
    )
}

export default ToursRequest;