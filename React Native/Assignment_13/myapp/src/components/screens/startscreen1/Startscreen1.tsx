import { View, Image, Text } from 'react-native'
import React from 'react'
import TravelMono1 from '../../assets/TravelingMonochromatic1.png'

const Startscreen1 = () => {
    return (

        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Image source={TravelMono1} style={{ width: 200, height: 200 }} />
            <Text>Start Screen 1</Text>
        </View>

    )
}
export default Startscreen1

// const styles = StyleSheet.create({})