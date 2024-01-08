import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Presentation/views/home/Home";
import { RegisterScreen } from "./src/Presentation/views/register/Register";

import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

export type RootStackParamsList = {
  Home: undefined;
  Register: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}
        >
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
        name="Register" 
        component={RegisterScreen}
        options={{
          headerShown: false,
          title: 'Nuevo usuario',
        }}
        />
      </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}

export default App;