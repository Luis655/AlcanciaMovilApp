import React, { useEffect, useId, useState } from 'react';
import ShowMoney from "../components/ShowMonet";
import { 
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextComponent,
    useColorScheme,
    View,
} from 'react-native';
import { collection, doc, getDoc, getDocs, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore';
import db  from '../firebase/FirebaseConfig'; 
import ListEvents from '../components/ListEvents';
import CardEvent from '../components/CardEvent';
import Icon from 'react-native-vector-icons/Ionicons';
type YourDataType = {
    id: number;
    Descripcion: string;
    Estatus: string;
    Fecha: any;
    IdAlcancia: string;
    Monto: number;
    Tipo: number;
  };
function Home() {
    const [data, setData] = useState<YourDataType[]>([]);
    const [suma, setSuma] = useState(0);

    let data2
    let id = useId();
    const userSessionId = '200i';
    let sum = 0;
    const dia = '';
    const hora= '';
    const fecha = '';
    useEffect(() => {
        const fetchData = async () => {
            const today = new Date();
            const tenDaysAgo = new Date();
            tenDaysAgo.setDate(today.getDate() - 10);

            try {
                const docRef = await onSnapshot(query(collection (db, 'Actividades'), 
                where('Fecha', '>=', tenDaysAgo)
                ), (snapshot) =>{
                    sum =0;
                    const dataArray : YourDataType[] = snapshot.docs.map((doc) => doc.data());
                    dataArray.map((item) =>{
                        if(item.IdAlcancia==userSessionId && item.Estatus=='Cerrado')
                        sum += item.Monto
                    })
                    setSuma(sum);
                    setData(dataArray);

                })
                //const docSnap = await getDoc(docRef);
                //const dataArray: YourDataType[]= [];

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <ScrollView style={[{backgroundColor: '#ffff'}]}>
                <View style={[{ alignItems: 'center'}]}>
                <CardEvent title='Dinero ahorrado' icon='ios-wallet-outline' description={suma}  meta='sin meta asignada' alcancia='Alcancia 13SDFS23CS2Q   CONECTADO' metaFin='' />
                <View style={[{  borderBottomColor: '#DEDEDE', borderBottomWidth: 7, width: '100%', alignItems: 'center' }]}>
                </View>
                <View style={[{ flex: 1, flexDirection: 'row', borderBottomColor: '#DEDEDE', borderBottomWidth: 7, width: '100%', alignItems: 'center', backgroundColor: '#FBCAE6'}]}>
                    <View style={[{flex: 1, alignItems: 'center'}]}>
                    <Icon name="ios-time-sharp" size={50} color="#ffff" />
                    </View>
                    <View style={[{ flex: 4}]}>
                    <Text style={[{color: 'black', fontSize: 20, fontWeight: '400', padding: 15}]}>Ingresos más recientes</Text>
                    </View>
                </View>

                    { 
                        data.map((item)=>(
                            item.IdAlcancia==userSessionId && (item.Estatus == 'Cerrado' &&
                            <ListEvents key={item.Fecha} title='Nuevo ingreso' cantidad={item.Monto} fecha={new Intl.DateTimeFormat('es', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                                second: 'numeric',
                                weekday: 'long',
                                hour12: true
                              }).format(item.Fecha.toDate())}
                               filtro={'0'} />)
                              
                        ))

                    }

                </View>
            
            </ScrollView>
        </>
    );
}

export default Home;
