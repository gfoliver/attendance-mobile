import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Button from '../components/Button';

const Scan = ({ navigation }) => {
    const [canScan, setCanScan] = useState(false);

    return (
        <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={{backgroundColor: '#fff', paddingTop: 48, paddingHorizontal: 32, paddingBottom: 32, alignItems: 'center'}}>
                <TouchableOpacity 
                    style={{position: 'absolute', top: 48, left: 24}}
                    activeOpacity={.8}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Image source={require('../assets/logout.png')} style={{width: 32, height: 32}} />
                </TouchableOpacity>
                <Image source={require('../assets/logo.png')} style={{marginBottom: 48}} />
                <Image source={{uri: 'https://picsum.photos/96', width: 96, height: 96}} style={{borderRadius: 1000, marginBottom: 16}} />
                <Text style={{color: '#000', fontSize: 24}}>Lucas Fonseca</Text>
            </View>
            {canScan ? (
                <View style={{flex: 1, backgroundColor: '#000'}}>
                    <QRCodeScanner
                        onRead={(e) => { setCanScan(false); navigation.navigate("Success") }}
                        checkAndroid6Permissions={true}
                    />
                </View>
            ) : (
                <View style={{backgroundColor: '#fff', padding: 32, alignItems: 'center', flex: 1}}>
                    <Button onPress={() => setCanScan(true)}>Escanear QRCode</Button>
                </View>
            )}
        </ScrollView>
        </SafeAreaView>
    );
}

export default Scan;