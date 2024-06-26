import SwitchSelector from "react-native-switch-selector";
import { COLORS, SIZES } from "../../constants";
import styles from "./history.style";

const SwitchBar = ({isTab, setTab}) => {
    return (
        <SwitchSelector
            initial={isTab}
            onPress={value => setTab(value)}
            textColor={COLORS.primary} 
            textStyle={styles.switchBarTextStyle}t
            selectedTextStyle={styles.switchBarTextStyle}
            selectedColor={COLORS.white}
            borderRadius={SIZES.medium}
            height={45}
            buttonColor={COLORS.primary}
            hasPadding
            animationDuration={200}
            options={[
                { label: "History", value: 0, }, 
                { label: "Ongoing", value: 1, }
            ]}
            testID="gender-switch-selector"
            accessibilityLabel="gender-switch-selector"
            style={styles.switchBar}
        />
    );
}

export default SwitchBar;