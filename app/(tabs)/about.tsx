import { View, Text, StyleSheet } from 'react-native';

export default function AboutUs() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>About Us</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 100,
        color: 'black',
    }
});