import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign  from '@expo/vector-icons/AntDesign';

export default function TabsLayout() {
  const router = useRouter();

  //Function to navigate to the profile screen
  const navigateToProfile = () => {
    router.push('/profile');
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={styles.profileButton} 
        onPress={navigateToProfile}
      >
        <AntDesign name="user" size={24} color="purple" />
      </TouchableOpacity>
      
      
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#1629fa',
          tabBarInactiveTintColor: 'purple',
          tabBarLabelStyle: { 
            fontSize: 14,
          },
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            elevation: 0,
            position: 'absolute',
            height: 70,
          },
        }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: () => (
              <Entypo name="home" size={24} color='purple'/>
            ),
          }}
        />

        <Tabs.Screen
          name="report"
          options={{
            title: 'Report Case',
            tabBarIcon: () => (
              <AntDesign name="Safety" size={24} color='purple' />
            ),
          }}
        />

        <Tabs.Screen
          name="community"
          options={{
            title: 'Community',
            tabBarIcon: () => (
              <Entypo name="users" size={24} color='purple'/>
            ),
          }}
        />

        <Tabs.Screen
          name="emergency"
          options={{
            title: 'Emergency',
            tabBarIcon: () => (
              <Ionicons name="call-outline" size={24} color='purple' />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10, // Ensure it appears above other elements
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  }
});