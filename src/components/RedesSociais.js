import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Linking, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';

/*
    RedesSociais - component reutilizável de redes sociais que recebe como props:
        icon - qual o nome do icon que vamos utilizar (que esteja em FontAwesomeBrands)
        url - a url da rede social, usada pelo Linking
*/
const RedesSociais = (props) => {
    return (
        <TouchableOpacity onPress={()=>{Linking.openURL(props.url)}}>
            <FontAwesomeIcon icon={props.icon} color={colors.branco} size={42}/>
        </TouchableOpacity>
    );
}

export default RedesSociais;