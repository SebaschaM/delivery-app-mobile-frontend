import { StyleSheet, TouchableOpacity, ToastAndroid, Text } from 'react-native'
import { MyColors } from '../theme/AppTheme';

interface Props {
    text?: string;
    onPress: () => void;
}

export const RoundedButton = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity
            onPress={() => onPress()}

            style={styles.roundedButton}
        >
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roundedButton: {
        width: '100%',
        height: 40,
        borderRadius: 15,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
    }
});
