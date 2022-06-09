import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text } from 'react-native';
import { HideWithKeyboard } from 'react-native-hide-with-keyboard';

import Button from '../components/Button';
import Input from '../components/Input';

// import { Container } from './styles';

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#fff', paddingVertical: 48, paddingHorizontal: 32, alignItems: 'center'}}>
                <HideWithKeyboard>
                    <Image source={require('../assets/logo.png')} style={{marginBottom: 144}} />
                </HideWithKeyboard>
                <Text style={{fontSize: 32, fontWeight: 'bold', marginBottom: 32, color: '#000'}}>Sistema de Chamada</Text>
                <Input label="Usuário" placeholder="Nome de Usuário" />
                <Input label="Senha" placeholder="Digite sua Senha" secureTextEntry />
                <Button onPress={() => navigation.navigate("Scan")}>Entrar</Button>
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

export default Login;