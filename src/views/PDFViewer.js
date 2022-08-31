import React from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';
import colors from '../styles/colors';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function PDFViewer ({ route, navigation }) {
    
    //const source = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
    //const source = 'bundle-assets://docs-servidores/teste1.pdf';

    // recebe a url do arquivo passado pela tela anterior (Documentacao)
    // url no formato "bundle-assets://caminho/pro/arquivo/", vinda da pasta android/app/src/main/assets/docs-servidores/
    const { docUrl } = route.params;

    let totalPag;
    let pagAtual;
    
    return (
        <View style={styles.container}>
            <Pdf
                source={{uri: docUrl, cache: true}}
                trustAllCerts={false}
                style={styles.pdf}
                enablePaging={true}
                onLoadComplete={(numberOfPages) => {
                    totalPag = numberOfPages;
                }}
                onPageChanged={(page, numberOfPages) => { pagAtual = page }}
            />
            <View style={{ height: 48, padding: 12, backgroundColor: colors.azulEscuro, flexDirection: "row" }}>
                <Text>Página atual: {totalPag}</Text>

                <TouchableOpacity onPress={() => {this.historyDownload()}} style={{marginRight: 16}}>
                    <FontAwesomeIcon icon={faSave} color={colors.branco} size={24}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1},
    pdf: { flex: 1, width: Dimensions.get('window').width, height: Dimensions.get("window").height, zIndex: 0},
});