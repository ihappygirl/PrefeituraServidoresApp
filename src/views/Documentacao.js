import { View, StyleSheet, SafeAreaView, FlatList, Text, Linking,TouchableHighlight } from 'react-native';
import colors from '../styles/colors';
import styles from '../styles/styles';
import docsList from '../data/docsList';
import * as React from 'react';

// Criação da flatlist
export default function Documentacao({ navigation }){

  // mudar cor de underlay quando pressionar um botão
  const [isPressed, setIsPressed] = React.useState(false);
  const mudarCorUnderlay = {
    activeOpacity: 1,
    underlayColor: colors.azulEscuro,
    onHideUnderlay: () => setIsPressed(false),
    onShowUnderlay: () => setIsPressed(true),
  };

  return (
    <SafeAreaView style={styles.marginLista}>
      <FlatList
        data={docsList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={()=>{ 
                navigation.navigate(
                  'PDFViewer', 
                  { docUrl: Platform.OS === 'ios' ? item.urlIos : item.urlAndroid }
                )}
              } 
              {...mudarCorUnderlay}
              style={styles.item}
            >
              <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableHighlight>
          </View>
        )}
      />
    </SafeAreaView>
  );
};