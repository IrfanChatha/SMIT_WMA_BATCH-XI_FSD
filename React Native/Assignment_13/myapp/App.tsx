import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startscreen1 from './src/components/screens/startscreen1/Startscreen1';
import Startscreen2 from './src/components/screens/startscreen2/Startscreen2';
import Startscreen3 from './src/components/screens/startscreen3/Startscreen3';
// import SplashScreen from 'react-native-splash-screen';
import Splashscreen from './src/components/screens/splashscreen/Splashscreen';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="Splash_Screen" component={Splashscreen} />
        <Stack.Screen name="Screen_1" component={Startscreen1} />
        <Stack.Screen name="Screen_2" component={Startscreen2} />
        <Stack.Screen name="Screen_3" component={Startscreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation