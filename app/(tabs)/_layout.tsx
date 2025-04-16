import React from 'react';

import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Foundation } from '@expo/vector-icons';



export default function TabLayout() { 
  return (
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
          bottom: 0,
          left: 0,
          right: 0,
          height: 70,
        },
      }}>
    
    
      <Tabs.Screen
        name = 'index'
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
  );
}
