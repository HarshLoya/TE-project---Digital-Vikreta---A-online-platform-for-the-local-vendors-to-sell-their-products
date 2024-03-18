import React from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

export const CustomTextInput = ({
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    onChange = () => {},
    style,
    value = '',
    onFocus = () => {},
}) => {
    return (
        <View style={style}>
            <TextInput
                value={value}
                onFocus={onFocus}
                secureTextEntry={secureTextEntry}
                type="outlined"
                keyboardType={keyboardType}
                label={placeholder}
                onChangeText={onChange}
                theme={{ colors: { primary: 'black',underlineColor:'transparent',}}}
            />
        </View>
    );
};

export default CustomTextInput;