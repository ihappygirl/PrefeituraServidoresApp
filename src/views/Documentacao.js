import React from 'react';
import { View } from 'react-native';
import ListaDocsServidores from '../components/ListaDocsServidores';

export default function Documentacao ({ navigation }) {
    return (
        <View style={{flex: 1}}>
            <ListaDocsServidores/>
        </View>
    );
  }
