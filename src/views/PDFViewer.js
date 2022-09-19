import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';

import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Pdf from 'react-native-pdf';

export default function PDFViewer ({ route, navigation }) {

    /*// adiciona botão de salvar arquivo ao headerBar
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => alert('This is a button!')} style={{marginRight: 16}}>
                    <FontAwesomeIcon icon={faSave} color={colors.branco} size={24}/>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);*/

    // pagAtual - qual é a página do documento que a pessoa está vendo
    // totalPag - qual é o total de páginas do documento
    // (ambos usam o metodo onPageChanged() do react-native-pdf, que retorna a variavel page p/
    // página atual e numberOfPages p/ o total de páginas)
    const [pagAtual, setCount] = useState(0);
    const [totalPag, setTotalPag] = useState(0);
    
    // recebe a url do arquivo passado como params pela tela anterior (Documentacao)
    // url vinda da pasta /android/app/src/main/assets/ e no ios usa a pasta /src/docs-servidores/
    const { docUrl } = route.params;

    return (
        <View style={styles.container}>
            <Pdf
                source={docUrl}
                trustAllCerts={false}
                style={styles.pdf}
                enablePaging={true}
                onPageChanged={(page, numberOfPages) => { setCount(page); setTotalPag(numberOfPages);}}
                renderActivityIndicator={(progress) => {
                    return (
                        <Text>Carregando...</Text>		
                    );
                }}
            />
            <View style={styles.bottomContainer}>
                <Text style={styles.textBottom}>{pagAtual}/{totalPag}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1},
    pdf: {flex: 1, width: Dimensions.get('window').width, height: Dimensions.get("window").height},
    bottomContainer: {height: 48, padding: 12, backgroundColor: colors.azulEscuro},
    textBottom: {color: colors.branco, alignSelf: "center", fontSize: 16}
});