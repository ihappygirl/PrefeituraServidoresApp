import { View, StyleSheet, SafeAreaView, FlatList, Text, Linking,TouchableHighlight } from 'react-native';
import colors from '../styles/colors';
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
    <View style={{flex: 1}}>
        <SafeAreaView style={styles.containerLista}>
        <FlatList
            data={docsList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={()=>{ navigation.navigate('PDFViewer', { docUrl: item.url} )}} 
                        {...mudarCorUnderlay}
                        style={styles.item}
                    >
                        <Text style={styles.text}>{item.title}</Text>
                    </TouchableHighlight>
                </View>
            )}
        />
        </SafeAreaView>
    </View>
  );
};

// Estilização
const styles = StyleSheet.create({
  containerLista: { marginVertical: 16 },
  buttonContainer: { marginHorizontal: 16, marginVertical: 8},
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
