import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from 'react-native-vector-icons/Ionicons';

interface SectionProps {
    title: string;
    cantidad: number;
    fecha: string;
    filtro: any
};
const Line = () => {
    return (
      <View
        style={styles.linea}
      >
        
      </View>
    );
  };
function ListEvents({ title, cantidad, fecha, filtro }: SectionProps) {
    const isDarkMode = useColorScheme() === 'dark';
    const fechaFormated = fecha.split(', ');
    const day = fechaFormated[0];
    const date = fechaFormated[1];
    const hour = fechaFormated[2];

    const propoe = cantidad >= parseInt(filtro) ? true : false;
    return (
        <>

            {propoe && filtro != '' &&
                <View style={styles.sectionContainer}>
                    <View style={[styles.section2]}>
                    <Icon name="ios-wallet-outline" size={60} color="white" />
                    </View>
                    <View style={[styles.section3]}>
                    <Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.black : Colors.black,},]}>
                        {title}
                    </Text>
                    <Text style={[styles.descipcion]}>Ingreso: {cantidad} pesos</Text>
                    <Text style={[styles.descipcion]} >Fecha: {date}</Text>
                    <Text style={[styles.descipcion]} >Hora: {hour}</Text>
                    <TouchableOpacity style={[styles.tagMeta]}>
                    
                            <Text> <Icon name="ios-pricetag" size={12} color="lightblue" /> Sin meta asignada</Text>
                    </TouchableOpacity>    
                    </View>
                    <View style={[styles.section4]}>
                    <Text style={[styles.sectionDescription, { color: isDarkMode ? Colors.dark : Colors.dark, },]}>
                        <Text style={styles.highlight}>{day+'                    '}</Text>
                        <Text style={[{color: 'black', fontSize: 11, fontWeight: '100'}]}>En caja</Text>
                    </Text>
                    </View>
                </View>
            }

        </>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        //marginTop: 15,
        //borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: '#FBCAE6',
        //padding: 3,
        width: '100%',
        height: 130,
        //marginBottom: 10,
        flexDirection: 'row',
        borderBottomColor: '#DEDEDE', 
        borderBottomWidth: 7, 
        alignItems: 'center'


    },
    section2:{
        flex: 4,
        alignItems: 'center',
        paddingTop: 0,
    },
    section3: {
        flex: 8, 
        paddingTop: 1,
        

    },
    section4: {
        flex: 4, 
        //paddingTop: 0
    },
    linea:{
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        alignSelf: 'flex-start',
    },
    highlight: {
        fontWeight: '400',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: 'black'
    },
    sectionDescription: {
        marginTop: 1,
        fontSize: 18,
        fontWeight: '400',
        color: 'black'
        
    },
    descipcion: {
        fontSize: 12,
        color: 'black',
        fontWeight: '300',
    },
    tagMeta:{
        padding: 3,
    }
})

export default ListEvents;