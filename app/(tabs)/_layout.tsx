import React from 'react';

import { Drawer } from 'expo-router/drawer';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Layout for the drawer navigation 
export default function Layout() { 
  
  return (
    <Drawer
      screenOptions={{
        headerShown: true,//display header for all screens
        drawerActiveTintColor: '#1629fa', 
        drawerInactiveTintColor: '#070b38',
        drawerLabelStyle: {
          fontSize: 16,//Font size for drawer labels
          fontWeight: 'bold',//Font weight of drawer labels
        },
        //Menu icon in the top left
        drawerIcon: ({ color, size }: { color: string; size: number }) => 
        <Entypo name="menu" size={size} color={color} />,
            }}
           >
            {/*Home Screen*/}
      <Drawer.Screen
        name="index" 
        options={{ 
          title: 'Home',
          drawerIcon: ({color, size}:{color: string; size: number}) =>(
            <Entypo name="home" size={size} color={color} />
          ),
        }} 
      />

      {/*Profile Screen*/}
      <Drawer.Screen 
        name="profile" 
        options={{ 
          title: 'Profile',
          drawerIcon: ({color, size}:{color: string; size: number}) =>(
            <Entypo name="user" size={size} color={color} />
          ),
        }} 
      />

        {/*Contact Us Screen*/}
      <Drawer.Screen
        name="contacts" 
        options={{ 
          title: 'Contact Us',
          drawerIcon: ({color, size}:{color: string; size: number}) =>(
            <Entypo name="old-phone" size={size} color={color} />
          ),
        }} 
      />

      {/*Help & Feedback Screen*/}
      <Drawer.Screen 
        name="support" 
        options={{ 
          title: 'Help & Feedback',
          drawerIcon: ({color, size}:{color: string; size: number}) =>(
            <MaterialIcons name="help-center" size={size} color={color} />
          ),
        }} 
      />
      
      {/*About Us Screen*/}
      <Drawer.Screen 
        name="about" 
        options={{ 
        title: 'About Us',
        drawerIcon: ({ color, size }:{color: string; size: number}) =>(
          <Ionicons name="information-circle" size={size} color={color} />
        ),
      }} 
      />

      {/*Sign Out Screen*/}
      <Drawer.Screen 
        name="signout" 
        options={{ 
          title: 'Sign Out',
          drawerIcon: ({color, size}:{color: string; size: number}) =>(
            <FontAwesome name="sign-out" size={size} color={color} />
          ),
        }}
        />

    </Drawer>
  );
}
