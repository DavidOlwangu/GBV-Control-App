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
  KeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { EntryExitTransition } from 'react-native-reanimated';


export default function Profile() {
  const { width } = useWindowDimensions();
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
  const containerWidth = Math.min(width * 0.9, 400);
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
          <View style={[styles.container, { width: containerWidth}]}>
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
              placeholder="Email (abc@gmail.com)"
              autoCapitalize="none"
              keyboardType="email-address"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={24}
                color="purple"
              />
            </TouchableOpacity>
            </View>
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
           
            <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              value={form.confirmPassword}
              onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword((prev) => !prev)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showConfirmPassword ? 'eye' : 'eye-off'}
                size={24}
                color="purple"
              />
            </TouchableOpacity>
            </View>
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
                {' '}Sign In
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
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
    width: '100%',
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    paddingRight: 12,
    width: '100%',
  },
  passwordInput: {
    flex: 1,
    padding: 12,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'purple',
    padding: 14,
    borderRadius: 8,
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
    color: 'purple',
    fontWeight: '500',
  },
});
