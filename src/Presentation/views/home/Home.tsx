import { View, Image, Text, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../../App';

import { CustomTextInput } from '../../components/CustomTextInput';

import useViewModel from './ViewModel';

import styles from './HomeStyles';

export const HomeScreen = () => {

    const { email, password, onChange, login } = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

    return (

        <View style={styles.container}>
            <Image source={require('../../../../assets/chef.jpg')} style={styles.imageBackground} />
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>FOOD APP</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>INGRESAR</Text>
                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeholder='Correo electrónico'
                    keyboardType='email-address'
                    property='email'
                    onChange={onChange}
                    value={email}
                />
                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeholder='Contraseña'
                    keyboardType='default'
                    secureTextEntry={true}
                    property='password'
                    onChange={onChange}
                    value={password}
                />


                <View style={{
                    marginTop: 30,
                }}>
                    <RoundedButton text='Login' onPress={
                        () => {
                            login()
                        }
                    } />
                </View>

                <View style={styles.formRegister}>
                    <Text>¿No tiene cuenta?</Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Register');
                    }}>
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

