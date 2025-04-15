import React from 'react';
import { View, Text, TextInput, StyleSheet, Button, SafeAreaView, ScrollView } from 'react-native';
import Header from '@/components/Header';

export default function Report() {
    return (
        <SafeAreaView >
            <Header/>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Report a Case</Text>
                <Text style={styles.title}>Personal Information</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your full name"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your phone number"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    
                />
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
             </ScrollView>
        </SafeAreaView>
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
