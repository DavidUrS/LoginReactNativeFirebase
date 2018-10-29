import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({size})=>{
    const { viewStyles } = styles;
    return(
        <View style={viewStyles}>
            <ActivityIndicator 
            size={size}
            />
        </View>
    )
}

const styles = {
    viewStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner }