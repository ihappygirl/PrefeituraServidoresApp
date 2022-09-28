import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, Platform, PermissionsAndroid, Alert } from 'react-native';
import colors from '../styles/colors';

import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Pdf from 'react-native-pdf';
import RNFS from 'react-native-fs';

export default function PDFViewer ({ route, navigation }) {

    // recebe a url do arquivo passado como params pela tela anterior (Documentacao)
    // url vinda da pasta /android/app/src/main/assets/ e no ios usa a pasta /src/docs-servidores/
    const { docUrl } = route.params;
    const arquivoAtual = Platform.OS === 'ios' ? docUrl : { uri: 'bundle-assets://'+ docUrl, cache: true};
    console.log(docUrl);

    // Pedir permissão para baixar arquivo (Android apenas, IOS vai direto)
    // Caso a pessoa permita, executa downloadPdf(), que copia o pdf para a pasta Downloads do dispositivo
    const checkPermission = async () => {
        if (Platform.OS === 'ios') {
            downloadPdf();
        } else {
            try {
            const granted = await PermissionsAndroid.request( 
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, 
                {
                    title: 'Permissão para Download', 
                    message: 'O app precisa de sua permissão para baixar arquivos para o dispositivo.'
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                downloadPdf();
            } else {
                Alert.alert('Não é possível fazer download', 'Permissão para fazer download negada.');
            }
            } catch (err) {
                console.warn(err);
            }
        }
    };
    
    const downloadPdf = () => {
        // recebe o nome do arquivo atual para pegá-lo e copiar para $pastaDestino
        const arquivoSelecionado = docUrl;
        // retorna o caminho para a pasta Downloads e cria um novo arquivo com o nome do arquivo atual
        const pastaDestino = `${RNFS.DownloadDirectoryPath}/${arquivoSelecionado}`;
    
        // processo de copia do arquivo
        if (Platform.OS === "android") {
            RNFS.copyFileAssets(arquivoSelecionado, pastaDestino)
            .then((result) => {
                //console.log("copiou para:", RNFS.DownloadDirectoryPath);
                Alert.alert('Download Concluído', 'Arquivo baixado com sucesso! Verifique a pasta downloads no seu celular.');
            }).catch((error) => {
                console.log("não copiou!");
            });
        } else if ( Platform.OS === "ios" ) {
            RNFS.copyFile( `${RNFS.MainBundlePath}/${arquivoSelecionado}`, `${RNFS.DocumentDirectoryPath}/${arquivoSelecionado}` )
            .then((result) => {
                //console.log("copiou para:", RNFS.DownloadDirectoryPath);
                Alert.alert('Download Concluído', 'Arquivo baixado com sucesso!');
            }).catch((error) => {
                console.log("não copiou!");
            });
        }
    };

    // adiciona botão de salvar arquivo ao headerBar
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={checkPermission} style={{marginRight: 16}}>
                    <FontAwesomeIcon icon={faSave} color={colors.branco} size={24}/>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    // pagAtual - qual é a página do documento que a pessoa está vendo
    // totalPag - qual é o total de páginas do documento
    // (ambos usam o metodo onPageChanged() do react-native-pdf, que retorna a variavel page p/
    // página atual e numberOfPages p/ o total de páginas)
    const [pagAtual, setCount] = useState(0);
    const [totalPag, setTotalPag] = useState(0);
    
    return (
        <View style={styles.container}>
            <Pdf
                source={arquivoAtual}
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