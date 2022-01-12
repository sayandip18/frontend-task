import * as React from 'react';
import { View, Text } from 'react-native';
import Display from '../Display';
import Header from '../Header';

export default function HomeScreen() {
    return (
        <>
            <Header />
            <Display />
        </>
    );
}