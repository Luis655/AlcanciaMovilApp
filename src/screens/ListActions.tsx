import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ListEvents from '../components/ListEvents';
import Search from '../components/Search';

function ListActions(){
    return(
        <>
        <ScrollView style={[{backgroundColor: '#FBCAE6'}]}>
        <View style={[{flexDirection: 'row', alignSelf: 'center',}]}>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'pink'}]}>
        <Text style={styles.buttonText}>Todo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>En caja</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Retirado</Text>
        </TouchableOpacity>
        </View>
        <View>
        <Search/>
        </View>
        </ScrollView>
        </>
        )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1, // Tamaño del borde
        //borderColor: 'black', // Color del borde
        borderRadius: 40, // Radio de la esquina del borde
        padding: 5, // Espacio interno del botón
        marginRight: 20,
        marginTop: 10,
        width: '19%',
      },
      buttonText: {
        fontSize: 13,
        fontWeight: '300',
        color: 'black',
        textAlign: 'center'
      },
})
export default ListActions;