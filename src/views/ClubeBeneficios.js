import * as React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import {AccordionList} from "accordion-collapse-react-native";
import styles from '../styles/styles';
import colors from '../styles/colors';
import beneficiosList from '../data/beneficiosList';

class ClubeBeneficios extends React.Component {

  _categoria(item){
    return(
      <View style={[styles.item, styles.buttonContainer]}>
        <Text style={styles.text}>{item.categoria}</Text>
      </View>
    );
  }

  _estabelecimentos(item){
    return (
      <View>
        <FlatList
          data={item.info}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.texto}</Text>
              {item.endereco == null ? '' : <Text>{item.endereco}</Text>}
              {item.telefone == null ? '' : <Text>{item.telefone}</Text>}
              {item.site == null ? '' : <Text>{item.site}</Text>}
            </View>
          )}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.marginLista}>
        <AccordionList
          list={beneficiosList}
          header={this._categoria}
          body={this._estabelecimentos}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

export default ClubeBeneficios;

// Estilização
const styl = StyleSheet.create({

  
});