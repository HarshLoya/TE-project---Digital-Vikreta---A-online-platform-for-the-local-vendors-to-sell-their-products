import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

export const CustomButton = ({
    text,
    onPress,
    mode = 'contained',
    uppercase = true,
    labelStyle,
    disabled = false,
    styleBtn = {},
    btnView = {},
}) => {
    return (
        <View style={{...styles.btnView, ...btnView}}>
            <Button
                style={styleBtn}
                labelStyle={labelStyle}
                mode={mode}
                uppercase={uppercase}
                onPress={onPress}
                disabled={disabled}>
                {text}
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    btnView: {
        marginTop: 10,
    },
});

export default CustomButton;
