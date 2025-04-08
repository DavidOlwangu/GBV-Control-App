import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>GBV CONTROL</Text>
      <View>
        <View style={{
          backgroundColor:'rgb(245, 244, 248)',
          
          justifyContent:'center',  
          alignItems:'center',
          borderRadius: 5,
          elevation: 10,
          width: 450,
          height: 320,

        }}>
          <Text style={{
            fontSize: 28,
            color: '#1629fa',
            fontWeight: 'bold',
            textAlign:'center',
            marginBottom:10,
          }}

          >Emergency Alert</Text>
          <Text>Send an Emergency message to your emergency contact</Text>
          <TouchableOpacity style={{
            alignItems:'center',
            justifyContent:'center',
            padding: 10,
            margin:10,
            backgroundColor: '#1629fa',
            borderRadius: 5,
            marginTop:40,
            
          }}>
            <Text style={{
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
            }}>Send  message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
});
