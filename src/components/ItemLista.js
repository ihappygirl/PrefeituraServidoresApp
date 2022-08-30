import * as React from 'react';
import { View, StyleSheet, Text, Linking, TouchableHighlight } from 'react-native';
import colors from '../styles/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

/*
  ItemLista - component reutilizável de item de uma lista que recebe como props:
    nomeBotao - titulo do botão
    url - a url que vai ser aberta
*/
const ItemLista = (props) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const touchProps = {
    activeOpacity: 1,
    underlayColor: colors.azulEscuro,
    onHideUnderlay: () => setIsPressed(false),
    onShowUnderlay: () => setIsPressed(true),
  };

  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight {...touchProps} style={styles.item} 
        onPress={()=>{ props.nomeBotao !== "Documentação para Servidores" ? Linking.openURL(props.url) : navigation.navigate('Documentacao')}}>
        <View style={styles.containerConteudo}>
          <Text style={styles.text}>{props.nomeBotao}</Text>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} color={colors.branco} style={styles.icon} size={24}/>
        </View>
      </TouchableHighlight>
    </View>
  );
};

// Estilização
const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 8,
    marginHorizontal: 20
  },
  item: {
    height: 60,
    backgroundColor: colors.azulClaro,
    borderRadius: 10,
    justifyContent: "center"
  },
  containerConteudo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 18,
    marginLeft: 18,
    fontWeight: "bold",
    color: colors.branco,
  },
  icon: { marginRight: 18 }
});

export default ItemLista;