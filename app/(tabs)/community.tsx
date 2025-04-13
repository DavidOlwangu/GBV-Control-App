import React from 'react';
import { View, Text, StyleSheet, ScrollView,SafeAreaView} from 'react-native';
import Header from '@/components/Header';

export default function Community() {
  return (
    <SafeAreaView>
      <Header/>
      <ScrollView  style={styles.container}>
      <Text style={styles.title}>Community Support</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
