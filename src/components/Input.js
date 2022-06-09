import React from 'react';
import { View, Text, TextInput } from 'react-native';

// import { Container } from './styles';

const Input = ({ label, placeholder, ...rest }) => {
    return (
        <View style={{width: '100%', marginBottom: 24}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 8}}>{label}</Text>
            <TextInput style={{ padding: 16, backgroundColor: '#E7E7E7', borderRadius: 8, color: '#000' }} placeholderTextColor="#444" placeholder={placeholder} {...rest} />
        </View>    
    );
}

export default Input;