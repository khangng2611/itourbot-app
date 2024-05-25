import { TextInput } from "react-native"
import styles from "../auth.style"
import { forwardRef } from "react"

const DigitInput = forwardRef( function DigitInput (props, ref) {
    return (
        <TextInput
            style={styles.digitInput}
            keyboardType="numeric"
            maxLength={1}
            ref={ref}
            {...props}
        />
    )
})

export default DigitInput;