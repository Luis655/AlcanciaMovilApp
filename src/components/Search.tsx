import React, { useEffect, useState, useId } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ListEvents from './ListEvents';
import { collection, doc, getDoc, getDocs, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore';
import db  from '../firebase/FirebaseConfig'; 


type YourDataType = {
  id: number;
  Descripcion: string;
  Estatus: string;
  Fecha: any;
  IdAlcancia: string;
  Monto: number;
  Tipo: number;
};

const Search = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('0');
        useEffect(() => {
      }, [selectedLanguage])

      const [data, setData] = useState<YourDataType[]>([]);
      let data2
  
      useEffect(() => {
          const fetchData = async () => {
              const today = new Date();
              const tenDaysAgo = new Date();
              tenDaysAgo.setDate(today.getDate() - 10);
              const userSessionId = '200i';
              try {
                  const docRef = await onSnapshot(query(collection (db, 'Actividades'), 
                  where('IdAlcancia', '==', userSessionId)
                  ), (snapshot) =>{
                    const dataArray : YourDataType[] = snapshot.docs.map((doc) => doc.data());
                    setData(dataArray);
                  } );
                  //const docSnap = await getDoc(docRef);
  
              } catch (error) {
                  console.log(error);
              }
          };
  
          fetchData();
      }, []);

  return (
    <>
    <View style={[{
      borderBottomColor: '#DEDEDE', 
      borderBottomWidth: 7, 
    }]}>
      <Text style={[{color: 'black', alignSelf: 'center', paddingTop: 15}]}>Buscar por precio</Text>
      <Picker style={[{ color: 'black', backgroundColor: 'pink', 
      padding:10, marginTop:1, 
      width: '80%', alignSelf: 'center', 
      marginLeft:10, marginBottom: 15}]}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="0" value='0' />
        <Picker.Item label='500' value='500' />
        <Picker.Item label='200' value='200' />
        <Picker.Item label='50' value='50' />
      </Picker>
      </View>
      <View style={[{alignItems: 'center',}]}>      
      {
                        data.map((item)=>(
                            <ListEvents key={item.Fecha} title='Usted ingreso' cantidad={item.Monto}   fecha={new Intl.DateTimeFormat('es', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                                second: 'numeric',
                                weekday: 'long',
                                hour12: true,
                              }).format(item.Fecha.toDate())}
                               filtro={selectedLanguage} />
                         
                        ))
        }
      </View>
    </>
  )
}

export default Search;