import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import ShowMoney from '../components/ShowMonet';
import CardEvent from '../components/CardEvent';
import DropEjemplo from '../components/DropEjemplo';
import Search from '../components/Search';
function Events(){
    return(
        <>
        <ScrollView style={[{backgroundColor: '#FBCAE6'}]}>
            <View>
                <CardEvent title='Sin metas' icon='ios-home' description={40} alcancia='' meta='Navidad' metaFin={900}/>
                <DropEjemplo/>
            </View>
            </ScrollView>
            </>
        )
}

export default Events;