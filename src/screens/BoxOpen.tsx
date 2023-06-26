import React, { useEffect } from 'react';
import { useState } from 'react';
import { ActivityIndicator, Alert, Animated, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


const BoxOpen = () => {


  const [modalVisible, setModalVisible] = useState(false);

  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [timeoutId, setTimeoutId] = useState(0);
  const [state, setState] = useState('CERRADO');

  const handlePressIn = () => {
    setIsButtonPressed(true);
    state === 'ABIERTO' ? setState('CERRANDO..') : setState('ABRIENDO..');
    const id = setTimeout(() => {
      if (isButtonPressed ==false) {
        // Aquí puedes ejecutar la función después de 10 segundos
        return setModalVisible(true);
      }
    }, 1000); // 10000 milisegundos = 10 segundos

    setTimeoutId(id);
  };

  const handlePressOut = () => {
    state === 'ABRIENDO..' ? setState('CERRADO') : setState('ABIERTO');
    setIsButtonPressed(false);
    clearTimeout(timeoutId);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


  
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const translateInterpolation = animatedValue.interpolate({
    inputRange: [0,1],
    outputRange:[0,250]
  })
  const opacityInterpolation = animatedValue.interpolate({
    inputRange: [1, 1],
    outputRange:[1, 1]
  })

  const animateTranslation = {
    transform: [{ translateX: translateInterpolation}]
  }
  const animateOpacity = {
    opacity: opacityInterpolation
  }

  return (
<>
<ScrollView style={[{backgroundColor: '#8696FE'}]}>

    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Se ha {state === 'CERRADO' ? 'ABIERTO ' : 'CERRADO '} la alcancia</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            setModalVisible(!modalVisible)
            state === 'CERRADO' ? setState('ABIERTO') : setState('CERRADO');
          }
        }>
          <Text style={styles.textStyle}>ACEPTAR</Text>
        </Pressable>
      </View>
    </View>
  </Modal>

    <View style={[{paddingTop: 150}]}>
      <Animated.View style={[animateOpacity]}>
        {state == 'CERRANDO..' &&
      <ActivityIndicator size="large" color="#00ff00" />}
        <TouchableOpacity style={[styles.buttonOpenBox,]} onPressIn={handlePressIn} onPressOut={handlePressOut}>
          <Text style={[{color: 'black', fontSize: 50}]}>{ state}</Text>
        </TouchableOpacity>
        </Animated.View>
    </View>
    </ScrollView>

    </>
  );
};

/**
 * 
 *   <TouchableOpacity style={[styles.buttonOpenBox,]} >
    <ActivityIndicator animating={false} hidesWhenStopped={false} size="large" />
    </TouchableOpacity>
 */

const styles = StyleSheet.create({
  buttonOpenBox: {
    backgroundColor: 'blue',
    padding: 18,
    height:400,
    borderRadius: 475,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black'
  },
});

export default BoxOpen;
