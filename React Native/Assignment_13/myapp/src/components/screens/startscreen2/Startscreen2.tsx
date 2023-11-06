import { View, Image, Text } from 'react-native'
import { React } from 'react'
import owl from '../../assets/owl1.png';

const Startscreen2 = () => {
    return (

        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <Image source={owl} style={{ width: 250, height: 250, marginTop: '30%' }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={{ fontSize: 32, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Make your own private travel plan</Text>
                <Text style={{ fontSize: 22, color: 'lightgray', textAlign: 'center', marginTop: '5%' }}>Formulate your strategy to receive wonderful gift packs</Text>
            </View>
        </>
    )
}
export default Startscreen2

// const styles = StyleSheet.create({})