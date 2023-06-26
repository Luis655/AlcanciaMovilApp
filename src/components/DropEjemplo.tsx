import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Button, DatePickerIOSBase } from 'react-native';
import ListEvents from './ListEvents';
import { Picker } from '@react-native-picker/picker';

function ExpandableComponent() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expand, setExpand] = useState(false);


  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleExpansion2 = () => {
    setExpand(!expand);
  };

  return (
    <>
      <View style={[styles.containes,]}>
        <TouchableOpacity onPress={toggleExpansion}>
          <Text style={{ fontSize: 18 }}>Nuevo Recordatorio{'                                      '} +</Text>
        </TouchableOpacity>
        {isExpanded && (
          <View style={{ marginTop: 10, marginBottom: 10, alignItems: 'center' }}>
            <Text>Nombre del recordatorio</Text>
            <TextInput style={[styles.textInput]} ></TextInput>
            <Text>Monto de la meta</Text>
            <TextInput style={[styles.textInput]}></TextInput>
            <TouchableOpacity style={[styles.button]} onPress={toggleExpansion2}>
            <Text style={[styles.buttonText]}>Guardar</Text>
            </TouchableOpacity>          
        </View>
        )}
      </View>

      <View style={[styles.containes,]}>
        <TouchableOpacity onPress={toggleExpansion2}>
          <Text style={{ fontSize: 18 }}>Recordatorios{'                                                 '} +</Text>

        </TouchableOpacity>
        {expand && (
          <View style={{ marginTop: 10 }}>
                        <ListEvents title='Meta de Navidad' cantidad={20} fecha='lunes, 21 de junio de 2023, 3:43:33 pm' filtro='0' />
                        <ListEvents title='Meta de Navidad' cantidad={20} fecha='lunes, 21 de junio de 2023, 3:43:33 pm' filtro='0' />
                        <ListEvents title='Meta de Navidad' cantidad={20} fecha='lunes, 21 de junio de 2023, 3:43:33 pm' filtro='0' />
                        <ListEvents title='Meta de Navidad' cantidad={20} fecha='lunes, 21 de junio de 2023, 3:43:33 pm' filtro='0' />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containes: {
    flexDirection: 'column',
    padding: 20,
    borderColor: '#DEDEDE',
    borderWidth: 2

  },
  textInput: {
    backgroundColor: 'white',
    marginBottom: 12,
    color: 'black',
    borderRadius: 10,
    width: '90%'
    
  },
  button: {
    borderWidth: 1, // Tamaño del borde
    //borderColor: 'black', // Color del borde
    borderRadius: 40, // Radio de la esquina del borde
    padding: 5, // Espacio interno del botón
    //marginRight: 20,
    marginTop: 10,
    width: '90%',
    backgroundColor: 'red',
    
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
    textAlign: 'center'
  },
})


export default ExpandableComponent;
