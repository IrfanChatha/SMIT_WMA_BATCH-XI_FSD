import { View, Image, Text } from 'react-native'
import { React } from 'react'
import TravelMono1 from '../../assets/TravelingMonochromatic1.png'

const Startscreen1 = () => {
    return (

        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <Image source={TravelMono1} style={{ width: 250, height: 250, marginTop: '30%' }} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={{ fontSize: 32, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Make your own private travel plan</Text>
                <Text style={{ fontSize: 22, color: 'lightgray', textAlign: 'center', marginTop: '5%' }}>Formulate your strategy to receive wonderful gift packs</Text>
            </View>
        </>
    )
}
export default Startscreen1

// const styles = StyleSheet.create({})