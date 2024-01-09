import { View, Text, Image} from 'react-native'

import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';

import useViewModel from './ViewModel';

import styles from './RegisterStyles';

export const RegisterScreen = () => {

    const { name, last_name, phone, email, password,  onChange, register } = useViewModel();

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/chef.jpg')} style={styles.imageBackground} />
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/user_image.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>

            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>REGISTRARSE</Text>
                <CustomTextInput
                    image={require('../../../../assets/user.png')}
                    placeholder='Nombres'
                    keyboardType='default'
                    property='name'
                    onChange={onChange}
                    value={name}
                />
                <CustomTextInput
                    image={require('../../../../assets/my_user.png')}
                    placeholder='Apellidos'
                    keyboardType='default'
                    property='last_name'
                    onChange={onChange}
                    value={last_name}
                />
                <CustomTextInput
                    image={require('../../../../assets/phone.png')}
                    placeholder='Teléfono'
                    keyboardType='numeric'
                    property='phone'
                    onChange={onChange}
                    value={phone}
                />
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
                {/* <CustomTextInput
                    image={require('../../../../assets/confirm_password.png')}
                    placeholder='Confirmar contraseña'
                    keyboardType='default'
                    secureTextEntry={true}
                    property='passwordConfirm'
                    onChange={onChange}
                    value={passwordConfirm}
                /> */}
                <View style={{
                    marginTop: 30,
                }}>
                    <RoundedButton text='Confirmar' onPress={
                        () => {
                            register()
                        }
                    } />
                </View>
            </View>
        </View>
    )
}


