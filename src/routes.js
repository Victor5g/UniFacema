import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './screens/Login';
import Home from './screens/Home';

export default function Routes(){
    return(
        <NavigationContainer>

            <AppStack.Navigator  screenOptions={{headerShown:false}}>
                <AppStack.Screen name='Login' component = {Login}/>
                <AppStack.Screen name='Home' component = {Home}/>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}