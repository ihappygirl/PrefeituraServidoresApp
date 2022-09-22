import { View, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import * as React from 'react';

// Criação da flatlist
export default function ClubeBeneficios () {
  return (
    <View style={{flex: 1, backgroundColor: "red"}}>
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