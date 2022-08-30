import * as React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { faSquareEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import colors from '../styles/colors';
import RedesSociais from './RedesSociais';

const Footer = () => {
    return (
        <View style={styles.containerFooter}>
            <Text style={styles.texto}>Acesse também as redes sociais da Prefeitura: </Text>
            <View style={styles.containerRedes}>
                <RedesSociais icon={['fab', 'flickr']} url="https://www.flickr.com/photos/146649643@N08/albums" />
                <RedesSociais icon={['fab', 'square-facebook']} url="https://www.facebook.com/prefeituradeitapevi/?hc_ref=NEWSFEED&fref=nf" />
                <RedesSociais icon={['fab', 'square-instagram']} url="https://www.instagram.com/prefeituradeitapevi/"/>
                <RedesSociais icon={['fab', 'square-twitter']} url="https://twitter.com/prefdeitapevi" />
                <RedesSociais icon={['fab', 'square-youtube']} url="https://www.youtube.com/channel/UCG5JKhHtrE4kIQfa1K61KUQ" />
                <RedesSociais icon={faSquareEnvelope} url="mailto:faleconosco@itapevi.sp.gov.br" />
                <RedesSociais icon={['fab', 'square-whatsapp']} url="https://api.whatsapp.com/send?phone=5511999476789" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerFooter:{
        height: 96,
        padding: 10,
        backgroundColor: colors.azulEscuro,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
        //backgroundColor: "red"
    },
    containerRedes:{
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    texto: {
        marginBottom: 8,
        color: colors.branco,
        textAlign: "center",
        fontSize: 12
    }
});

export default Footer;
