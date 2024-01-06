import { StyleSheet, View, Image, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';

export const HomeScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/chef.jpg')} style={styles.imageBackground} />
            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logo.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>FOOD APP</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>INGRESAR</Text>
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
                <View style={{
                    marginTop: 30,
                }}>
                    <RoundedButton text='Login' onPress={
                        () => {
                            ToastAndroid.show('Bienvenido', ToastAndroid.SHORT);
                        }
                    } />
                </View>
                <View style={styles.formRegister}>
                    <Text>¿No tiene cuenta?</Text>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Register');
                    }}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
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
        height: '40%',
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
        position: 'absolute',
        alignSelf: 'center',
        top: '15%'
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

