import React from 'react';
import {View, Text} from 'react-native';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function AuthLayout(){
    return(
      <View style={{
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'purple',
        padding: 10
      }}>
        <View>
           <Text> EquaGender</Text>
        </View>
       
      
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
               name = 'register'
               options={{
                 title: 'Profile',
                 tabBarIcon: () => (
                  <AntDesign name="adduser" size={24} color="white" />
                 ),
               }}
             />
       
            
       
           </Tabs>
      </View>
    )   
}