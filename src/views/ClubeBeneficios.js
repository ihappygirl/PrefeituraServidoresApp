import * as React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import {AccordionList} from "accordion-collapse-react-native";
import styles from '../styles/styles';
import colors from '../styles/colors';
import beneficiosList from '../data/beneficiosList';
import CardView from '../components/CardView';

class ClubeBeneficios extends React.Component {

  // Elemento para os buttons de cada categoria
  categoria(item){
    return(
      <View style={[styles.item, styles.buttonContainer]}>
        <Text style={styles.text}>{item.categoria}</Text>
      </View>
    );
  }

  // Elemento para os estabelecimentos de cada categoria
  estabelecimentos(item){
    return (
      <View>
        <FlatList
          data={item.info}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => (
            <CardView style={styl.card}>
              <Text style={styl.estabelecimento}>{item.title}</Text>
              <Text style={styl.descricao}>{item.texto}</Text>
              {item.endereco == null ? '' : <Text style={styl.contato}>End.: {item.endereco}</Text>}
              {item.telefone == null ? '' : <Text style={styl.contato}>Tel.: {item.telefone}</Text>}
              {item.site == null ? '' : <Text style={styl.contato}>Site / E-mail: {item.site}</Text>}
            </CardView>
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
          header={this.categoria}
          body={this.estabelecimentos}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

export default ClubeBeneficios;

// Estilização
const styl = StyleSheet.create({
  estabelecimento: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  descricao: {
    fontStyle: 'italic',
    textAlign: 'center',
    paddingBottom: 12
  },
  contato:{
    textAlign: 'center',
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 4,
    justifyContent: 'center',
  },
});