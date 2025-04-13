import React from 'react';

import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation } from '@expo/vector-icons';


export default function TabLayout() { 
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#1629fa',
        tabBarInactiveTintColor: '#555',
        tabBarLabelStyle: { fontSize: 14},
      }}>
    
    
      <Tabs.Screen
        name = 'index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Entypo name="home" size={size} color={color}/>
          ),
        }}
      />

      <Tabs.Screen
          name="report"
          options={{
            title: 'Report Case',
            tabBarIcon: ({color, size}) => (
              <Foundation name="clipboard-pencil" size={size} color={color}/>
            ),
          }}
      />

      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({color, size}) => (
            <Entypo name="users" size={size} color={color}/>
          ),
        }}
      />

      <Tabs.Screen
        name="emergency"
        options={{
          title: 'Emergency',
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialIcons name="emergency-share" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
