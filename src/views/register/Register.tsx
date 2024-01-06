import { View, Text, Image, TextInput, StyleSheet, ToastAndroid, TouchableOpacity, ScrollView } from 'react-native'
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';

export const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/chef.jpg')} style={styles.imageBackground} />
            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/user_image.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>REGISTRARSE</Text>
                <View style={styles.formInput}>
                    <Image style={styles.formIcon} source={require('../../../assets/user.png')} />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Nombres'
                        keyboardType='default'
                    />
                </View>
                <View style={styles.formInput}>
                    <Image style={styles.formIcon} source={require('../../../assets/my_user.png')} />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Apellidos'
                        keyboardType='default'
                    />
                </View>
                <View style={styles.formInput}>
                    <Image style={styles.formIcon} source={require('../../../assets/phone.png')} />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Teléfono'
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.formInput}>
                    <Image style={styles.formIcon} source={require('../../../assets/email.png')} />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Correo electrónico'
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.formInput}>
                    <Image style={styles.formIcon} source={require('../../../assets/password.png')} />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.formInput}>
                    <Image style={styles.formIcon} source={require('../../../assets/confirm_password.png')} />
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Confirmar contraseña'
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </View>
                <View style={{
                    marginTop: 30,
                }}>
                    <RoundedButton text='Confirmar' onPress={
                        () => {
                            ToastAndroid.show('Registrando', ToastAndroid.SHORT);
                        }
                    } />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        position: 'relative',
    },
    imageBackground: {
        opacity: 0.7,
        width: '100%',
        height: '100%'

    },
    form: {
        width: '100%',
        height: '70%',
        backgroundColor: '#ffffff',
        position: 'absolute',
        bottom: 0,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        padding: 30
    },
    formText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
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
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: MyColors.primary,
        borderBottomWidth: 1,
        borderBottomColor: MyColors.primary,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center',
        top: '5%'
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    logoText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
});

