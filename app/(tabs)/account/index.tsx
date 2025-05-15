import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
    <SafeAreaView style={{ flex: 1}}>

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

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : (
                <Button title="Submit" onPress={handleSubmit} />
            )}

            <Text style={styles.text}>
                Don't have an account? 
                <Text style={styles.link} onPress={() => router.push('/account/signup')}> Create account</Text>
            </Text>
        </View>
    </ScrollView>
    </SafeAreaView>
    
  );
};

export default SignIn;

const styles = StyleSheet.create({
  scroll:{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 40,
    },
  container: { 
        width: width * 0.9,
        maxWidth: 400,
        alignItems: 'stretch',
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
  error: { 
        color: 'red', 
        marginBottom: 8,
    },
    text:{
        textAlign: 'center',
    },
  link: { 
        color: 'blue', 
        textAlign: 'center', 
        marginTop: 20,
    },
});

