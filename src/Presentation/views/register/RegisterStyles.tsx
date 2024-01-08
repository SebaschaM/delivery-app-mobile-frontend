import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

const RegisterStyles = StyleSheet.create({
    container: {
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
        marginTop: 20,
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

export default RegisterStyles;