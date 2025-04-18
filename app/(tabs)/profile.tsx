import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Profile(){
    return(
        <SafeAreaView style={styles.container}>

            <View style={styles.box}>
                <TouchableOpacity style={styles.button}>
                <FontAwesome name="user-circle-o" size={24} color="white" />
                    <Text style={styles.header}>Profile</Text>

                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,

    },
    box:{
        alignItems: 'flex-start',
        justifyContent:'center',
        padding: 10,
        
    },
    header: {
        fontSize: 20,
        padding:10,
        color:'white',
    },
    button:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'purple',
        width:'100%',
        height: 100,
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})
