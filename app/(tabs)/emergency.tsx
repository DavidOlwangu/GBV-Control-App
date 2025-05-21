import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import EmergencyContacts from '@/components/EmergencyContacts';
import MakeCall from '@/components/makeCall';
import Header from '@/components/Header';


export default function Emergency(){
    return(
        <SafeAreaView style={styles.container}>
            <Header/>
            
          <ScrollView> 
            
            <MakeCall/>
            <EmergencyContacts/>
        </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
         
        flex: 1,
        backgroundColor:'white',

      
    },
    
})