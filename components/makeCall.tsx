import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function MakeCall() {
  const handleEmergencyCall = () => {
    Linking.openURL('tel:0745846180'); // Or your emergency number
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency Contacts</Text>
      <View style={styles.viewBox}>
        <Text style={styles.viewTitle}>Call for Help</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleEmergencyCall}>
           <Ionicons name="call-outline" size={24} color='white' />
          <Text style={styles.callButtonText}>Emergency Call</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  viewBox: {
    backgroundColor: 'rgb(245, 242, 244)',
    borderRadius: 10,
    margin: 10,
    padding: 20,
    alignItems: 'flex-start',
    elevation: 20,
  },
  viewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 5,
    margin: 10,
    textAlign: 'left',
    color: 'rgb(85, 14, 151)',
  },
  title: {
    margin: 10,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgb(85, 14, 151)',
  },
  callButton: {
    backgroundColor: '#c72d2d',
    borderRadius: 35,
    elevation: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: 10,
  },
  callButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
  },
});