import { View, StyleSheet, SafeAreaView, FlatList, Text, Linking,TouchableHighlight } from 'react-native';
import colors from '../styles/colors';
import docsList from '../data/docsList';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';

// Criação da flatlist
export default function ListaDocsServidores () {

  // mudar cor de underlay quando pressionar um botão
  const [isPressed, setIsPressed] = React.useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: colors.azulEscuro,
    onHideUnderlay: () => setIsPressed(false),
    onShowUnderlay: () => setIsPressed(true),
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.containerLista}>
      <FlatList
        data={docsList}
        renderItem={({ item }) => (
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                onPress={()=>{ navigation.navigate('PDFViewer', { docUrl: item.url} )}} 
                {...touchProps}
                style={styles.item}
              >
                  <Text style={styles.text}>{item.title}</Text>
              </TouchableHighlight>
            </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

// Estilização
const styles = StyleSheet.create({
  containerLista: { paddingVertical: 16 },
  buttonContainer: { marginHorizontal: 16, marginVertical: 6 },
  item: {
    height: 60,
    backgroundColor: colors.azulClaro,
    borderRadius: 10,
    justifyContent: "center"
  },
  text: {
    fontSize: 17,
    marginHorizontal: 16, marginVertical: 6,
    fontWeight: "bold",
    color: colors.branco,
  }
});