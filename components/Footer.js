import React from "react";
import { Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreScreen from './screens/ExploreScreen';

//React native icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// React navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Footer () {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Explore" component={ExploreScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
};
