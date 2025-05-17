import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [showPassword, setPassword] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.username) newErrors.username = 'Username is required';
    if (!form.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Signed in!');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.wrapper}>

    <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                autoCapitalize="none"
                value={form.username}
                onChangeText={(text) => setForm({ ...form, username: text })}
            />
            {errors.username && <Text style={styles.error}>{errors.username}</Text>}

            <View style={styles.passwordWrapper}>
            <TextInput
                style={styles.passwordinput}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
            />
            <TouchableOpacity
             onPress={() => setPassword((prev) => !prev)}
             style={styles.eyeIcon}
            >
             <Ionicons
                  name={showPassword ? 'eye': 'eye-off' }
                  size={24}
                  color="purple"
              />
            </TouchableOpacity>
            </View>
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            {loading ? (
                <ActivityIndicator size="large" color="purple" />
            ) : (
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>   
            )}

            <Text style={styles.text}>
                Don't have an account? 
                <Text style={styles.link} onPress={() => router.push('/account/signup')}>
                     Create account
                </Text>
            </Text>
        </View>
    </ScrollView>
    </SafeAreaView>
    
  );
};

export default SignIn;

const styles = StyleSheet.create({
  wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
  scroll:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
  container: { 
        width: width * 0.9,
        maxWidth: 400,
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
    },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    paddingRight: 12,
    },
  passwordinput: {
        flex: 1,
        padding: 12,
    },
  eyeIcon: {
        paddingLeft: 8,
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
        paddingVertical: 14, 
        borderRadius: 8, 
        alignItems: 'center',
        marginTop: 10,
    },
  buttonText: { 
        color: '#fff', 
        fontSize: 16, 
        fontWeight: '600',
      },
    text:{
        textAlign: 'center',
        marginTop: 20,
    },
  link: { 
        color: 'purple', 
        textAlign: 'center', 
        marginTop: 20,
        fontWeight: '500',
    },
});

