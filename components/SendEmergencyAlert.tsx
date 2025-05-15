import{ Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function SendEmergencyAlert() {
    const handleEmergencyAlert = () => {
        Alert.alert(
            "Emergency Alert",
            "An emergency alert has been sent to your contacts.",
            [{ text: "OK", onPress: () => console.log("Message Sent") }],
        );
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Emergency Alert</Text>
            <Text style={styles.message}>Sending an emergency alert...</Text>
            <TouchableOpacity style={styles.button} onPress={handleEmergencyAlert}>
            <FontAwesome name="send" size={24} color="white" />
                <Text style={styles.buttonText}>Send Message</Text>
            </TouchableOpacity>

        </View>

    )}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            margin:10,
            padding:20,
            elevation: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',

            borderRadius: 10,
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'rgb(85, 14, 151)',
        },
        message: {
            fontSize: 16,
            color: 'rgb(85, 14, 151)',
            marginTop: 10,
        },
        button: {
            backgroundColor: '#c72d2d',
            borderRadius: 35,
            elevation: 10,
            padding: 15,
            marginTop: 20,
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            
        },
        buttonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            paddingLeft:10,
        },

    })