import React, {useEffect} from 'react';
import colors from "./src/styles/colors";

import SplashScreen from 'react-native-splash-screen';

// react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import de telas para Navigation
import Home from './src/views/Home';
import Documentacao from "./src/views/Documentacao";
import PDFViewer from './src/views/PDFViewer';
import ClubeBeneficios from './src/views/ClubeBeneficios';
import MedicinaTrabalho from './src/views/MedicinaTrabalho';

// configs do FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faSquareEnvelope, faGlobe, faDownload } from '@fortawesome/free-solid-svg-icons';

// Adicionando FontAwesome icons conforme
// https://www.npmjs.com/package/@fortawesome/react-native-fontawesome
library.add(fab, faSquareEnvelope, faArrowUpRightFromSquare, faGlobe, faDownload);

const Stack = createStackNavigator();

const App = () => {

  // Timeout para splashscreen
  const [hideSplash, setHideSplash] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHideSplash(true);
    }, 2000);
  }, []);

  useEffect(() => {
    hideSplash && SplashScreen.hide();
  }, [hideSplash]);

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: { backgroundColor: colors.azulEscuro },
          headerTitleAlign: "center",
          headerTintColor: colors.branco, headerTitleStyle: {fontSize: 16},
          headerBackTitleVisible: false
        }}
      >
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{title: "Clube de Benefícios"}} name="ClubeBeneficios" component={ClubeBeneficios} />
        <Stack.Screen options={{title: "Documentação para Servidores"}} name="Documentacao" component={Documentacao} />
        <Stack.Screen options={{title: "Visualização de Arquivo"}} name="PDFViewer" component={PDFViewer} />
        <Stack.Screen options={{title: "Medicina do Trabalho"}} name="MedicinaTrabalho" component={MedicinaTrabalho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
