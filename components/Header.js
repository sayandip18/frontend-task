import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView, FlatList} from 'react-native';

const Header = () => {
    return(      
      <SafeAreaView style={styles.container}>
          <TextInput style={styles.input} />
      </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        right: 0,
    },
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50
    },
});

export default Header;