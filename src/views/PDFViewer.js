import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Pdf from 'react-native-pdf';

export default class PDFViewer extends React.Component {
    render() {
        //const source = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
        //const source = require('./test.pdf');  // ios only
        const source = 'bundle-assets://docs-servidores/teste1.pdf';
        //const source = {uri:'file:///sdcard/test.pdf'};

        return (
            <View style={styles.container}>
                <Pdf
                    source={{uri: source, cache: true}}
                    trustAllCerts={false}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    style={styles.pdf}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1},
    pdf: { flex: 1, width: Dimensions.get('window').width},
});