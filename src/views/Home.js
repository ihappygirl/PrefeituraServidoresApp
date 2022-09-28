import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "../styles/styles";
import Footer from "../components/Footer";
import CustomButton from "../components/CustomButton";

const Home = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={require('../icons/itapevi-hd_2.png')} style={styles.image}/>
            </View>
            <View style={styles.containerLista}>
                <ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
                    <CustomButton nomeBotao="Acesse seu Holerite" url="https://novoportal.conam.com.br/rhitapevi/login.php"/>
                    <CustomButton nomeBotao="Ponto Eletrônico" url="http://corporativosp.veltiponto.com.br/veltiponto/login.jsf"/>
                    <CustomButton nomeBotao="Clube de Benefícios" pagina="ClubeBeneficios"/>
                    <CustomButton nomeBotao="Recadastramento Anual" url="https://novoportal.conam.com.br/rhitapevi/identificacao.php"/>
                    <CustomButton nomeBotao="Documentação para Servidores" pagina="Documentacao" />
                    <CustomButton nomeBotao="Medicina do Trabalho" pagina="MedicinaTrabalho"/>
                </ScrollView>
            </View>
            <Footer/>
        </View>
    );
}

export default Home;