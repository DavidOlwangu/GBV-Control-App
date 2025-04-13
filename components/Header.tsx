import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Equal Gender</Text>
      <TouchableOpacity style={styles.menuButton}>
        <Entypo name="menu" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'rgb(96, 6, 138)',
    padding: 10,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
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