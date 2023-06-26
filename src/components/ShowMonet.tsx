import { StyleSheet, Text, Image, useColorScheme, View} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import ListEvents from './ListEvents';
import CardEvent from './CardEvent';

const ShowMoney = ({monto}:any) => {
  const isDarkMode = useColorScheme() === 'dark';
  const money = 480;
  return (
    <>
      <View style={[styles.background]}>
          <CardEvent title='Dinero ahorrado' icon='ios-wallet-outline' description={monto}/>
      </View>
      <View>

      </View>
      </>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#11009E'
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    padding: 15
  },
  textMoney: {
    fontSize: 90,
    fontWeight: '700',
    textAlign: 'right',
    padding: 15
  },
});

export default ShowMoney;