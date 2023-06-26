import { useEffect } from 'react';
import firebase from './FirebaseConfig';
import db from '../firebase/FirebaseConfig'
import {doc, getDoc} from 'firebase/firestore';
import { Text } from 'react-native';

// Ejemplo de consulta a Firestore
interface PropsAlcancia{
    Codigo: string;
    Estatus: string;
    IdAlcancia: 1;
    Nombre: string;
}


async function GetFirebase(){

  const  docRef = doc(db, 'Alcancia', 'sf');
  const docSnap = getDoc(docRef);

  const data= JSON.stringify((await docSnap).data());
  console.log(data);
  
  return data;
}

export default GetFirebase;
// Llamada a la función de ejemplo
