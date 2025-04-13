import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Emergency(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Emergency Contacts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20 },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
    button: {  
        backgroundColor: '#007BFF',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    icon: {
        fontSize: 100,
        color: 'black',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})