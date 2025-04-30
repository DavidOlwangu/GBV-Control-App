import React from 'react';

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* About Us Section */}
      <View style={styles.card}>
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>We are GBV Dev Team.{"\n"}</Text> Committed to developing tools and resources to combat GBV and promote gender equality. Our mission is to empower communities through technology, education, and advocacy.
        </Text>
      </View>

      {/* Contact Us Section */}
      <View style={styles.card}>
        <Text style={styles.header}>Contact Us</Text>

        <View style={styles.contactRow}>
          <FontAwesome name="phone" size={20} color="#4CAF50" />
          <Text style={styles.phone}>0714 550 236</Text>
        </View>

        <View style={styles.contactRow}>
          <FontAwesome name="phone" size={20} color="#4CAF50" />
          <Text style={styles.phone}>0745 846 180</Text>
        </View>

        <View style={styles.contactRow}>
          <FontAwesome name="phone" size={20} color="#4CAF50" />
          <Text style={styles.phone}>0746 963 838</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
    backgroundColor: '#f9f9f9',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 24,
  },
  bold: {
    fontWeight: '600',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  phone: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});
