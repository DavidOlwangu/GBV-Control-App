import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Header from '@/components/Header';
import MakeCall from '@/components/makeCall';
import SendEmergencyAlert from '@/components/SendEmergencyAlert';

interface HomeScreenProps {}

export default function HomeScreen({} : HomeScreenProps) {
  //Use useWindowDimensions hook for responsiveness
  // Updates automatically when screen dimension changes
  const { width } = useWindowDimensions();

  const isSmallDevice = width < 768; // Determines device size for responsive design

  //Function to calculate responsive font sizes
  const getFontSize = (baseSize: number): number => {
    if (width < 360) return baseSize *0.8; //Very small devices
    if (width < 768) return baseSize; //Regular phones
    if (width < 1024) return baseSize * 1.2; //Tablets
    return baseSize * 1.4; // larger devices
  };

  //Function to calculate responsive card width
  const cardWidth = isSmallDevice ? width * 0.9 : Math.min(width * 0.8, 600); // 80% of screen width for larger devices

  return (
    <SafeAreaView style={styles.safeArea}>

      <Header/>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>

          {/* Main Title */}
          <Text style={[
            styles.title,
             { fontSize: getFontSize(40) }, // Responsive font size
            ]}>
             Welcome To EquaGender
          </Text>

          {/* Subtitle */}
          <Text style={[
            styles.subtitle,
              {fontSize: getFontSize(18)}
            ]}>
             Where Awareness meets Action
          </Text>

          {/* Main Info Card */}
          
          <View style={[
            styles.mainCard,
              {
                width: cardWidth, // Responsive card width
                padding: isSmallDevice ? 15 : 25, // Responsive padding
                marginVertical: isSmallDevice ? 15 : 25, // Responsive margin
              }
           ]}>
        
            {/* Card Title */}
            <Text style={[
            styles.cardTitle,
              { fontSize: getFontSize(20) } // Responsive font size
            ]}>
            Empowering Survivors and Protecting Communituies
            </Text>

            {/* Main Description */}
            <Text style={[
            styles.mainDescription,
            { fontSize: getFontSize(16) }
            ]}>
             EquaGender is a confidential platform designed to support individuals
             affected by gender-based violence. Whether you're reporting an incident, 
             seeking guidance, or accessing resources, We are here to help you feel heard, 
             safe, and supported. Your voice matters—and every report brings us closer to ending 
             GBV and building safer communities for all.
            </Text>

            {/* Call to action text */}
            <Text style={[
           styles.ctaText,
             { fontSize: getFontSize(16) }
            ]}>
            Start the journey. Stand together. Be Aware & Empowered...Let's Kill GBV
            </Text>

           {/* Action Component Container*/}
           <View style={[styles.actionsContainer,
            { flexDirection: isSmallDevice ? 'column' : 'row', 
              width: cardWidth, 
            }
            ]}>
             
            {/* Emergency call component */}
            <View style={[
              styles.actionWrapper,
              { width: isSmallDevice ? '100%' : '48%'}
            ]}>
              <MakeCall/>
            </View>
            {/* Emergency alert component */}
            <View style={[
              styles.actionWrapper,
              { width: isSmallDevice ? '100%' : '48%'}
             ]}>
              <SendEmergencyAlert/>
            </View>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //Container for the safe area
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  //Container for the scroll view content
  scrollContent: {
    flexGrow: 1,
  },
  //Main container with centered content
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  //Main app title
  title: {
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  //Subtitle below the main title
  subtitle: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  //Main card container app description
  mainCard: {
    backgroundColor: 'rgb(245, 244, 248)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  //Title of the main card
  cardTitle: {
    color: '#1629fa',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  //Main description text inside the card
  mainDescription: {
    color: '#03012d',
    textAlign: 'center',
    marginBottom: 15,
  },
  //Call to action text inside the card
  ctaText: {
    color: '#191970',
    textAlign: 'center',
  },
  //Container for action components(MakeCall and SendEmergencyAlert)
  actionsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  //Wrapper for each action component
  actionWrapper: {
    marginVertical: 10,
  }
});