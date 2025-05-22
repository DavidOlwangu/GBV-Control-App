import React, { useState } from 'react'
import { Alert, TouchableOpacity, TextInput, Text, StyleSheet, View } from 'react-native'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'expo-router'
export default function Auth() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    if (!name.trim()) {
      Alert.alert('Please enter your name.')
      return
    }
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match.')
      return
    }
    setLoading(true)
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      if (error.message.toLowerCase().includes('user already registered') || error.message.toLowerCase().includes('already registered')) {
        Alert.alert('Account already exists, sign in.')
      } else {
        Alert.alert(error.message)
      }
      setLoading(false)
      return
    }

    // Insert user profile into 'users' table
    if (data.user) {
      const { error: insertError } = await supabase
        .from('users')
        .insert([{ id: data.user.id, name: name, email: email }])
      if (insertError) {
        Alert.alert('Error saving user profile: ' + insertError.message)
      } else {
        Alert.alert('Account created! Please check your inbox for email verification.')
      }
    } else {
      Alert.alert('Please check your inbox for email verification!')
    }
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Sign in or create an account</Text>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Full Name"
          autoCapitalize="words"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email address"
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={true}
          placeholder="Confirm Password"
          autoCapitalize="none"
          placeholderTextColor="#888"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          disabled={loading}
          onPress={signInWithEmail}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text >
        Already have an account?{' '}
        <Text  onPress={() => router.push('/login')}>
          Login
        </Text>
      </Text>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 24,
    backgroundColor: '#f8f9fa',
    flex: 1,
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#3a86ff',
    marginTop: 8,
  },
  buttonOutlineText: {
    color: 'purple',
  },
  buttonDisabled: {
    opacity: 0.6,
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
})