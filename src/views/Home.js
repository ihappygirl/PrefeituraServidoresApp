import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView, Button, TouchableOpacity, Linking } from "react-native";
import styles from "../styles/styles";
import Footer from "../components/Footer";
import ItemLista from "../components/ItemLista";

import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={require('../icons/itapevi-hd_2.png')} style={styles.image}/>
            </View>
            <SafeAreaView style={styles.containerLista}>
                <ScrollView contentContainerStyle={{justifyContent: "center"}}>
                    <ItemLista tipo="link" nomeBotao="Área do Servidor" url="https://novoportal.conam.com.br/rhitapevi/login.php"/>
                    <ItemLista tipo="link" nomeBotao="Ponto Eletrônico" url="http://corporativosp.veltiponto.com.br/veltiponto/login.jsf"/>
                    <ItemLista tipo="link" nomeBotao="Clube de Benefícios" url="http://itapevi.sp.gov.br/clube-de-beneficios/"/>
                    <ItemLista tipo="link" nomeBotao="Recadastramento Anual" url="https://novoportal.conam.com.br/rhitapevi/identificacao.php"/>
                    <ItemLista tipo="openPage" nomeBotao="Documentação para Servidores" />
                    <TouchableOpacity onPress={()=> Linking.openURL('google.com')}>
                        <Text>Move to Signup Screen</Text>
                    </TouchableOpacity>
                    <ItemLista tipo="link" nomeBotao="Envio de Atestado Médico" url="mailto:atestado@itapevi.sp.gov.br"/>
                </ScrollView>
            </SafeAreaView>
            <Footer/>
        </View>
    );
}

export default Home;