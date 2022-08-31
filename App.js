import React from 'react';
import styles from './src/styles/styles';
import colors from "./src/styles/colors";
import { TouchableOpacity } from 'react-native-gesture-handler';

// react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import de telas para Navigation
import Home from './src/views/Home';
import Documentacao from "./src/views/Documentacao";
import PDFViewer from './src/views/PDFViewer';

// configs do FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faSquareEnvelope, faGlobe, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

// Adicionando FontAwesome icons conforme
// https://www.npmjs.com/package/@fortawesome/react-native-fontawesome
library.add(fab, faSquareEnvelope, faArrowUpRightFromSquare, faGlobe, faSave);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: colors.azulEscuro }, headerTitleAlign: "center",
          headerTintColor: colors.branco, headerTitleStyle: {fontSize: 18}
        }}
      >
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{title: "Documentação para Servidores"}} name="Documentacao" component={Documentacao}/>
        <Stack.Screen
          name="PDFViewer" component={PDFViewer}
          options={{
            title: "Visualização de Arquivo",
            headerRight: () => ( 
              <TouchableOpacity onPress={() => alert('This is a button!')} style={{marginRight: 16}}>
                <FontAwesomeIcon icon={faSave} color={colors.branco} size={24}/>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
