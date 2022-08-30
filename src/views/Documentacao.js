import React from 'react';
import { View } from 'react-native';
import ListaDocsServidores from '../components/ListaDocsServidores';

const Documentacao = () => {
    return (
        <View style={{flex: 1}}>
           <ListaDocsServidores/>
        </View>
    )
}

export default Documentacao;