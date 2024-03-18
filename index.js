import React, {useState, useEffect} from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../../../shared/CustomTextInput';
import CustomButton from '../../../shared/CustomButton';
// import {signUp} from '../../../services/authService';
import styles from '../../../styles/register';
import inputStyles from '../../../styles/input';
import brandStyles from '../../../styles/brand';
import { signUp } from '../../services/authService';
const RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [role, setRole] = useState('buyer');
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [pincode, setPincode] = useState();
   

    const onSignUp = () => {
        if (!username || !contactNumber || !role || !password || !pincode) {
            alert('Fill Details');
            return;
        }
        console.log(contactNumber.toString().length);
        if (!(contactNumber.toString().length == 10)){
            alert("Invalid number, must be ten digits")
            return
        }
        if (!(pincode.toString().length == 6)){
            alert("Invalid pincode")
            return
        }


        const request = {
            maindata: {
                name: username,
                mobileNo: contactNumber,
                password: password,
                role: role,
                location: pincode
            }
        };

        signUp(request)
            .then((res) => {
                console.log(res);
                Alert.alert('Registration Successful, Please Login');
                navigation.navigate('loginscreen')})
            .catch((err) => console.error(err));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={[brandStyles.brand, {marginTop: 100}]}>DigitalVikreta</Text>

            <CustomTextInput
                value={username}
                style={inputStyles.input}
                
                // placeholder="Username"
                placeholder={"Enter Name"}
                onChange={(value) => setUsername(value)}
            />

            <CustomTextInput
                value={contactNumber}
                style={inputStyles.input}
                
                placeholder={"Contact Number"}
                keyboardType="numeric"
                onChange={(value) => setContactNumber(value)}
            />
            <CustomTextInput
                value={pincode}
                style={inputStyles.input}
                keyboardType="numeric"
                placeholder={"Pincode"}
                onChange={(value) => setPincode(value)}
            />

            <View>
                <Picker
                    selectedValue={role}
                    mode="dropdown"
                    style={inputStyles.picker}
                    onValueChange={(value) => setRole(value)}>
                    <Picker.Item label={"Select Role"} value="" />
                    <Picker.Item label={"Buyer"} value="buyer" />
                    <Picker.Item label={"Seller"} value="seller" />
                </Picker>
            </View>

            <CustomTextInput
                value={password}
                style={inputStyles.input}
                
                placeholder={('password')}
                secureTextEntry={true}
                onChange={(value) => setPassword(value)}
            />

            <CustomTextInput
                value={confirmPassword}
                style={inputStyles.input}
                
                placeholder={('confirm password')}
                secureTextEntry={true}
                onChange={(value) => setConfirmPassword(value)}
            />

            <CustomButton
                mode="contained"
                text={('sign up')}
                onPress={() => onSignUp()}
                styleBtn={{backgroundColor: 'black'}}
            />

            <View style={styles.createAccountWrapper}>
                <Text style={styles.newAccountText}>
                    {('already have an account')}?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('loginscreen')}>
                    <Text style={[styles.login, {color: 'black'}]}>{('login')}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default RegisterScreen;