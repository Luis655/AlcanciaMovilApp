import React from 'react';
import { StyleSheet, View } from 'react-native';

function Section(){

    return(
        <View style={[styles.section]}>
            
        </View>
    );
}

const styles = StyleSheet.create({
    section:{
        flex:1,
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'black'
    }
});