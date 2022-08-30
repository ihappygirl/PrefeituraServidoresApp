import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import de telas para Navigation
import Documentacao from "./src/views/Documentacao";
import Home from './src/views/Home';
import PDFViewer from './src/views/PDFViewer';

// configs do FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faSquareEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import colors from "./src/styles/colors";

// Adicionando FontAwesome icons conforme
// https://www.npmjs.com/package/@fortawesome/react-native-fontawesome
library.add(fab, faSquareEnvelope, faArrowUpRightFromSquare, faGlobe);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.azulEscuro },
          headerTintColor: colors.branco,
          headerTitleStyle: {fontSize: 18},
        }}
      >
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{title: "Documentação para Servidores"}} name="Documentacao" component={Documentacao}/>
        <Stack.Screen options={{title: "Visualização de PDF"}} name="PDFViewer" component={PDFViewer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
