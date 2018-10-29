import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

const Input = ({texto, onChangeText, value, placeholder, secureTextEntry})=>{
    const {viewStyle, etiquetaStyle, inputStyle} = styles;
    return(
        <View style={viewStyle}>
            <Text style={etiquetaStyle}>{texto}</Text>
            <TextInput
            placeholder={placeholder}
            style={inputStyle}
            onChangeText={onChangeText}
            value={value}
            secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = {
    viewStyle:{
        flex:1,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center'
    },
    etiquetaStyle:{
        fontSize: 19,
        paddingLeft: 15,
        flex: 1
    },
    inputStyle:{
        color: 'black',
        width: 100,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 19,
        lineHeight: 24,
        flex: 2
    }
}

export {Input}