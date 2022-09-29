import { View, StyleSheet, Text, ScrollView, Platform, Dimensions } from 'react-native';
import styles from '../styles/styles';
import * as React from 'react';
import CustomButton from '../components/CustomButton';
import colors from '../styles/colors';

export default function MedicinaTrabalho () {
  return (
    <View style={[styles.container, {paddingVertical: 16}]}>
      <Text style={style.tituloTexto}>Informações Importantes:</Text>
      <View style={style.scroll} >
        <ScrollView>
          <Text style={style.texto}>• Os atestados, relatórios e laudos médicos devem vir com o CID, carimbo e assinatura do médico que o emitiu.</Text>
          <Text style={style.texto}>• O prazo para a apresentação é de 24 horas.</Text>
          <Text style={style.texto}>• Para afastamentos de 1 a 4 dias – será feita a avaliação do atestado, pelo médico do trabalho.</Text>
          <Text style={style.texto}>• Para afastamentos de 5 a 15 dias – além do atestado, é necessário apresentar relatório médico detalhado, 
          com informações da condição de saúde do servidor.</Text>
          <Text style={style.texto}>• Para afastamentos superiores a 15 dias, além de apresentar atestado e relatório médico, o servidor poderá 
          ser convocado para perícia médica e posterior validação do afastamento, sendo que o retorno ao trabalho se dará 
          após o término de vigência do atestado. Nos casos de afastamentos superiores a 90 dias, o procedimento é o mesmo, 
          porém o servidor será submetido à avaliação de Junta Médica do município.</Text>
          <Text style={style.texto}>• Servidores em restrição deverão manter o envio dos relatórios e laudos atualizados, para a avaliação da 
          junta médica quanto a manutenção ou alta da restrição.</Text>
          <Text style={style.texto}>• Enviaremos parecer de junta médica para o e-mail do servidor, no entanto o canal oficial de informação é o 
          DIÁRIO OFICIAL DE ITAPEVI.</Text>
        </ScrollView>
      </View>

      <CustomButton nomeBotao="Enviar Atestado Médico" url="mailto:atestado@itapevi.sp.gov.br"/>

      <View style={styles.hr} />

      <View style={style.escuta}>
        <Text style={style.tituloTexto}>Escuta Psicológica</Text>
        <Text style={style.texto}>•	Você sabia que temos um canal de escuta psicológica? Saiba que você não está sozinho!</Text>
        <Text style={style.texto}>•	Para agendar uma conversa com a psicóloga da Medicina do Trabalho, ligue para (11) 4143-7500, ramal 2005 ou 2006.</Text>
      </View>

      <CustomButton nomeBotao="Agendar Escuta" url={Platform.OS === "android" ? "tel:01141437500": "telprompt:01141437500"}/>

    </View>
  );
};

const style = StyleSheet.create({
  tituloTexto:{
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.cinzaEscuro,
  },
  texto:{
    textAlign: "justify",
    color: colors.cinzaEscuro
  },
  scroll:{
    height: "50%", marginHorizontal: 24, paddingVertical: 10
  },
  escuta:{marginHorizontal: 24, paddingVertical: 10}
})