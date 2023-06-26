import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from "react-native/Libraries/NewAppScreen";

interface CardProps {
  title: string;
  icon: string;
  description: number;
  meta: string;
  alcancia: string;
  metaFin: number;
}

function CardEvent({ title, icon, description, meta, alcancia, metaFin }: CardProps) {
  const faltante = metaFin-description;
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.flex1]}>
          <Image source={require('../images/logo.png')}
            style={styles.imageBackground} />

          <TouchableOpacity style={[styles.tagMeta]}>
            <Text style={[styles.text, { color: isDarkMode ? Colors.black : Colors.white, },]}>
              <Icon name="ios-pricetag" size={12} color="lightblue" /> {meta}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.flex2]}>
        {metaFin==0 ?
        <View>
        <Text style={[{color: 'black'}]}>{alcancia} <Icon name="ios-checkmark" size={20} color="blue" /></Text>
        <Text style={[styles.textMoney]}>{'$ ' + description} </Text>
        <Text style={[styles.text2]}>Dinero ahorrado</Text>
        </View>
         : 
         <View>
         <Text style={[{color: 'black'}]}>Meta: {meta}</Text>
         <Text style={[styles.textMoney]}>{'$ ' + description+'/'+metaFin} </Text>
         <Text style={[styles.text2]}>Te falta ${faltante} para cumplir tu meta</Text>
         </View>
         }

        </View>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center'
  },
  text: {
    fontSize: 10,
    fontWeight: '300',


  },
  text2: {
    color: 'black',
    marginLeft: 5,
    fontSize: 13,
    fontWeight: '400'
  },
  textMoney: {
    fontSize: 35,
    fontWeight: '700',
    color: 'black',
    marginTop: 1
  },
  container: {
    //borderRadius: 1,
    backgroundColor: '#FBCAE6',
    height: 200,
    width: '100%',
    flexDirection: 'row',
    //marginTop: 10,
    //marginBottom: '0',
    flex: 1,

  },
  flex1: {
    flex: 5,
    paddingTop: 5,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'column'

  },
  flex2: {
    flex: 6,
    paddingTop: 50,
    flexDirection: 'column'


  },
  tagMeta: {
    padding: 0,

  },
  imageBackground: {
    resizeMode: 'cover',
    height: 170,
    width: 170
  },
});

export default CardEvent;