import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Resources() {
  const handleEmergencyCall = () => {
    Linking.openURL('tel:0745846180'); // Or your emergency number
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Government Services</Text>
      <View style={styles.viewBox}>
        <Text style={styles.viewTitle}>National Hotline</Text>
        <Text style={styles.viewParagraph}>24/7 confidential support for GBV survivors</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleEmergencyCall}>
          <Text style={styles.callButtonText}>Read More</Text>
        </TouchableOpacity>
      </View>

       <View style={styles.viewBox}>
        <Text style={styles.viewTitle}>GVRC (Gender-Based Violence Recovery Centre)</Text>
        <Text style={styles.viewParagraph}>Comprehensive medical, psychosocial, and legal support</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleEmergencyCall}>
          <Text style={styles.callButtonText}>Read More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewBox}>
        <Text style={styles.viewTitle}>FIDA Kenya</Text>
        <Text style={styles.viewParagraph}>Provides legal aid and protection services for women and children</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleEmergencyCall}>
          <Text style={styles.callButtonText}>Read More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewBox}>
        <Text style={styles.viewTitle}>UN Women - Ending Violence Against Women</Text>
        <Text style={styles.viewParagraph}>Educational material and global initiatives against GBV.</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleEmergencyCall}>
          <Text style={styles.callButtonText}>Read More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewBox}>
        <Text style={styles.viewTitle}>Human Rights Agenda (HURIA)</Text>
        <Text style={styles.viewParagraph}>Promotes human rights and legal support for GBV victims in the coastal region</Text>
        <TouchableOpacity style={styles.callButton} onPress={handleEmergencyCall}>
          <Text style={styles.callButtonText}>Read More</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
        paddingHorizontal: 15,
        paddingVertical: 20,
  },
  cardContainer: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    backgroundColor:'#fff',
  },
  viewBox: {
    width: '100%', // Each card takes up 30% of the container's width
    marginBottom: 10,
    backgroundColor: 'baige',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  viewParagraph: {
    margin: 3,
    fontSize: 15,
    marginBottom: 10,
    color: 'blue',
  },
  callButton: {
    backgroundColor: 'blue',
    borderRadius: 35,
    elevation: 5,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 5,
  },
  callButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
  },
});