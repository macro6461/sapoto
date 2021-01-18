import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text } from 'react-native';
import Nav from './components/Nav';
import Accountability from './components/Accountability';
import Login from './components/Login';
import Dash from './components/Dash';
import Filters from './components/Filters';
import Settings from './components/Settings';
import Stats from './components/Stats';
import styles from './style';

const Stack = createStackNavigator();

const views = {
  0: <Dash/>,
  1: <Filters/>,
}

const App = () => {
  
  const [view, setView] = useState(0)

  return (
    <View>
      <Nav view={view} setView={setView} />
      <View style={styles.container}>{views[view]}</View>
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator headerMode="screen">
    //     <Stack.Screen
    //       name="Dash"
    //       component={Dash}
    //       options={{ headerTitle: props => <Nav {...props} /> }}
    //     />
    //     <Stack.Screen
    //       name="Filters"
    //       component={Filters}
    //       options={{ headerTitle: props => <Nav {...props} /> }}
    //     />
    //     </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
