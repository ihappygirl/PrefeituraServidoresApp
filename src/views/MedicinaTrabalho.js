import { View, StyleSheet, Text} from 'react-native';
import styles from '../styles/styles';
import * as React from 'react';
import CustomButton from '../components/CustomButton';


// Criação da flatlist
export default function MedicinaTrabalho () {
  return (
    <View style={styles.container}>
      <CustomButton nomeBotao="Enviar Atestado Médico" url="mailto:atestado@itapevi.sp.gov.br"/>
    </View>
  );
};