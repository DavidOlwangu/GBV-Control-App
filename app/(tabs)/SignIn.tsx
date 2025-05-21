import React, { useState } from 'react';
import { Alert, StyleSheet, View, AppState, TouchableOpacity, Text, TextInput } from 'react-native';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome...</Text>
            <Text style={styles.subtitle}>Sign In to Use Our Services</Text>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          autoCapitalize="none"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={signInWithEmail}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 12,
    backgroundColor: 'white', // Set screen background to white
    alignItems: 'center',
  },
   title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4a4e69',
    marginBottom: 24,
    textAlign: 'center',
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  mt20: {
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginBottom: 4,
    width: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: 280,
    shadowColor: '#3a86ff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: '#a3a3a3', // Disabled button color
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
