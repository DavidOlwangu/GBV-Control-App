import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


export default function Community() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Support</Text>
    </View>
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
