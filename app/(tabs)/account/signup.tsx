import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Profile() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstname: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.firstname) newErrors.firstname = 'First name is required';
    if (!form.surname) newErrors.surname = 'Surname is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!form.email.endsWith('@gmail.com'))
      newErrors.email = 'Email must end with @gmail.com';
    if (!form.password) newErrors.password = 'Password is required';
    if (!form.confirmPassword) newErrors.confirmPassword = 'Confirm your password';
    else if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Account created!');
      router.replace('/account');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Stack.Screen
        options={{
          headerTitle: 'Profile',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#6a1b9a' },
        }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>

            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={form.firstname}
              onChangeText={(text) => setForm({ ...form, firstname: text })}
            />
            {errors.firstname && <Text style={styles.error}>{errors.firstname}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Surname"
              value={form.surname}
              onChangeText={(text) => setForm({ ...form, surname: text })}
            />
            {errors.surname && <Text style={styles.error}>{errors.surname}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Email (@gmail.com)"
              autoCapitalize="none"
              keyboardType="email-address"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={form.confirmPassword}
              onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
            />
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}

            {loading ? (
              <ActivityIndicator size="large" color="#6a1b9a" />
            ) : (
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            )}

            <Text style={styles.text}>
              Already have an account?
              <Text style={styles.link} onPress={() => router.push('/account')}>
                {' '}
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  container: {
    width: width * 0.9,
    maxWidth: 400,
    alignItems: 'stretch',
    backgroundColor: '#D8BFD8',
    padding: 20,
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'blue',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#6a1b9a',
    fontWeight: '500',
  },
});
