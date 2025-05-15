import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';
import Header from '@/components/Header';
import Resources from '@/components/resource';
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
             { fontSize: getFontSize(30) }, // Responsive font size
            ]}>
             Welcome To Our Resource Hub
          </Text>

          {/* Subtitle */}
          <Text style={[
            styles.subtitle,
              {fontSize: getFontSize(18)}
            ]}>
             Empowering You with Knowledge and Resources
          </Text>

           <Text style={[
            styles.paragraph,
              {fontSize: getFontSize(14)}
            ]}>
             Gender-Based Violence refers to harmful acts directed at an indivual based on their gender. It might be physical,sexual,psycological, economical often rooted on social norms and power.
          </Text>
        
            {/* Card Title */}


           {/* Action Component Container*/}
           <View style={[styles.actionsContainer,
            { flexDirection: isSmallDevice ? 'column' : 'row', 
              width: cardWidth, 
            }
            ]}>
              <Resources/>
              </View>
            {/* Action Component Container*/}
           <View style={[styles.actionsContainer,
            { flexDirection: isSmallDevice ? 'column' : 'row', 
              width: cardWidth, 
            }
            ]}>
              <Resources/>
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

   paragraph: {
    color: 'blue',
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
    flex: 1,
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
    flex:1,
    backgroundColor:'purple',
  },
  //Wrapper for each action component
  actionWrapper: {
    marginVertical: 10,
  }
});