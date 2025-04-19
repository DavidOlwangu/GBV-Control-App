import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack } from 'expo-router';
import Header from '@/components/Header';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
        
      {/* Add navigation header */}
      <Stack.Screen 
        options={{
          headerTitle: "Profile",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "" }
        }} 
      />

      <View >
        <Header/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  box: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
  },
  header: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
    width: '100%',
    height: 100,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});