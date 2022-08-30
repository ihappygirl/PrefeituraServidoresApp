import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListaDocsServidores from '../components/Flatlist';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

const PDFViewer = () => {
    
    return (

        <WebView
          source={ { uri: 'https://docs.google.com/gview?url=' + PolicyHTML }}
          style={{flex: 1}}
         />

    )
}

export default PDFViewer;