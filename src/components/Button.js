import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

// import { Container } from './styles';

const Button = ({ children , ...rest}) => {
    return (
        <TouchableOpacity 
            activeOpacity={.8} 
            style={{backgroundColor: '#9E1824', padding: 16, width: '100%', borderRadius: 8, alignItems: 'center'}}
            {...rest}
        >
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>{children}</Text>
        </TouchableOpacity>
    );
}

export default Button;