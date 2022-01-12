import React from "react";
import { Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreScreen from './screens/ExploreScreen';

//React native icons
import Icon from 'react-native-vector-icons/FontAwesome';

// React navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Footer () {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                        <Icon name="home" color="black" size={30} />
                        ),
                    }}
                />
                <Tab.Screen name="Explore" component={ExploreScreen}
                    options={{
                        tabBarLabel: 'Explore',
                        tabBarIcon: () => (
                          <Icon name="search" color="black" size={30} />
                        ),
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: () => (
                        <Icon name="user-circle" color="black" size={30} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
};
