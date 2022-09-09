import React from "react";
import { View, Text, Image, SafeAreaView, ScrollView, Button, TouchableOpacity, Linking } from "react-native";
import styles from "../styles/styles";
import Footer from "../components/Footer";
import ItemLista from "../components/ItemLista";

const Home = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={require('../icons/itapevi-hd_2.png')} style={styles.image}/>
            </View>
            <View style={styles.containerLista}>
                <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
                    <ItemLista nomeBotao="Área do Servidor" url="https://novoportal.conam.com.br/rhitapevi/login.php"/>
                    <ItemLista nomeBotao="Ponto Eletrônico" url="http://corporativosp.veltiponto.com.br/veltiponto/login.jsf"/>
                    <ItemLista nomeBotao="Clube de Benefícios" url="http://itapevi.sp.gov.br/clube-de-beneficios/"/>
                    <ItemLista nomeBotao="Recadastramento Anual" url="https://novoportal.conam.com.br/rhitapevi/identificacao.php"/>
                    <ItemLista nomeBotao="Documentação para Servidores" />
                    <ItemLista nomeBotao="Envio de Atestado Médico" url="mailto:atestado@itapevi.sp.gov.br"/>
                </ScrollView>
            </View>
            <Footer/>
        </View>
    );
}

export default Home;