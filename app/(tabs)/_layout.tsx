import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#1629fa',
          tabBarInactiveTintColor: 'purple',
          tabBarLabelPosition: 'below-icon',
          tabBarLabelStyle: {
            fontSize: 12,
            textAlign: 'center',
            flexWrap: 'nowrap',
            includeFontPadding: false,
          },
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            elevation: 0,
            height: 70,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="report"
          options={{
            title: 'Report Case',
            tabBarIcon: ({ color }) => <AntDesign name="Safety" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="resources"
          options={{
            title: 'Resources',
            tabBarIcon: ({ color }) => <Entypo name="book" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="emergency"
          options={{
            title: 'Emergency',
            tabBarIcon: ({ color }) => <Ionicons name="call-outline" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
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
});