import { View, Text, TouchableOpacity, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Equal Gender</Text>
      <TouchableOpacity style={styles.menuButton}>      
      <MaterialIcons name="more-vert" size={30} color="white" />
      </TouchableOpacity>
    </View>
  
    
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'rgb(96, 6, 138)',
    padding: 20,
    height: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
    elevation: 10, // Add shadow for Android  
  },
  headerText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 10,
  },
  menuButton: {
    padding: 10, 
    
  },
});