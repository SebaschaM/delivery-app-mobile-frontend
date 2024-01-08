import { Key, KeyboardEvent } from 'react';
import { View, TextInput, Image, StyleSheet, KeyboardType } from 'react-native';

interface Props {
    image: any;
    placeholder: string;
    value: string;
    keyboardType: KeyboardType;
    secureTextEntry?: boolean;
    property: string;
    onChange: (property: string, value: any) => void;
}

export const CustomTextInput = ({
    image,
    placeholder,
    keyboardType,
    property,
    onChange,
    value,
    secureTextEntry = false,
}: Props) => {
    return (
        <View style={styles.formInput}>
            <Image style={styles.formIcon}
                source={image}
            />
            <TextInput
                style={styles.formTextInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={(text) => {
                    onChange(property, text);
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15,
    },
})

