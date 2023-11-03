import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import owl from './components/assets/owl1.png';

const App = () => {
  return (

<LinearGradient colors={['rgba(102, 210, 204, 1)', 'rgba(48, 98, 243, 1)']} style={styles.linearGradient}>
<Image source={owl} style={{ width: 130, height: 130}}/>
</LinearGradient>

  )
}
export default App

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'}
});