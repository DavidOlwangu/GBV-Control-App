import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{
        color: 'purple',
        fontSize: 30,
        fontWeight: 'bold',
      }}>Welcome To EquaGender</Text>
      <Text style={{
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',}}>Where Awareness meets Action</Text>
      <View>
        <View style={{
          backgroundColor:'rgb(245, 244, 248)',
          
          justifyContent:'center',  
          alignItems:'center',
          borderRadius: 5,
          elevation: 10,
          width: 480,
          height: 350,

        }}>
          <Text style={{
            fontSize: 20,
            color: '#1629fa',
            fontWeight: 'bold',
            textAlign:'center',
            marginBottom:10,
          }}

          >Empowering Survivors and Protecting Communituies</Text>
          <Text style={{
            fontSize: 16,
            color: '#03012d',
            textAlign:'center',
            fontWeight: 'medium',
            padding: 10,
            marginBottom:10,
          }}>EquaGender is a confidential platform designed to support individuals affected by gender-based violence. Whether you're reporting an incident, seeking guidance, or accessing resources, We are here to help you feel heard, safe, and supported. Your voice matters—and every report brings us closer to ending GBV and building safer communities for all.</Text>

<Text style={{
            fontSize: 16,
            color: '#191970',
            textAlign:'center',
            padding: 10,
            marginBottom:10,
          }}>Start the journey.Stand together. Be Aware & Empowered...Let's Kill GBV</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
});
