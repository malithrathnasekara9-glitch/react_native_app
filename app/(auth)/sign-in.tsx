import React, {JSX} from 'react';
import { View, Text } from 'react-native';
import {Link} from "expo-router";
const SignIn = (): JSX.Element => {
    return (
        <View>
            <Text>SignIn</Text>
            <Link href="/(auth)/sign-up" >Creat Account</Link>
        </View>
    );
};

export default SignIn;