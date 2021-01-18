import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text } from 'react-native';
import Nav from './components/Nav';
import Accountability from './components/Accountability';
import Menu from './components/Menu';
import Login from './components/Login';
import Dash from './components/Dash';
import Filters from './components/Filters';
import Settings from './components/Settings';
import Stats from './components/Stats';
import styles from './style';
import { set } from 'react-native-reanimated';

const Stack = createStackNavigator();

const views = {
  0: <Dash/>,
  1: <Filters/>
}

const App = () => {
  
  const [view, setView] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View>
      <Nav view={view} setView={setView} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <View style={styles.container}>{views[view]}</View>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
