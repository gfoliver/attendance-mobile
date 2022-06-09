import React from 'react';
import { SafeAreaView, View, Image, Text } from 'react-native';

const Success = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fff', paddingVertical: 48, paddingHorizontal: 32, alignItems: 'center'}}>
                <Image source={require('../assets/logo.png')} style={{marginBottom: 144}} />
                <Image source={require('../assets/success.png')} style={{marginBottom: 32, width: 80, height: 80}} />
                <Text style={{color: '#000', fontSize: 24, fontWeight: 'bold'}}>Presença Confirmada!</Text>
            </View>
        </SafeAreaView>
    );
}

export default Success;