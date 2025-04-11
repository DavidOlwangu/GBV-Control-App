import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function Report() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Report a Case</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter details of the case"
                multiline
                numberOfLines={4}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter location"
            />
            <Button title="Submit" onPress={() => {}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
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
});
