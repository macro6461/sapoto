import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from '../style'

const routes = {
    0: ['Dash', {name: 'Dash'}],
    1: ['Filters', {name: 'Filters'}]
}

const Nav = (props) =>{

    const {view, setView, menuOpen, setMenuOpen} = props;

    const handleMessages = () =>{
        setView(2)
        setMenuOpen(false)
    }

    var finalIcon;

    if (view !== 0){
        finalIcon = <Icon name="earth-outline" size={50} onPress={()=>setView(0)} color="#fff" />
    } else {
        finalIcon = <Icon name="options-outline" size={50} onPress={()=>setView(1)} color="#fff" />
    }

    if (menuOpen){
        finalIcon = <Icon name="close-circle-outline" size={50} onPress={()=>setMenuOpen(false)} color="#fff"  />
    }

    return (
        <View style={styles.nav}>
            <Icon name="menu" size={50} onPress={()=>setMenuOpen(!menuOpen)} color="#fff" />
            {finalIcon}
            <Icon name="send-outline" size={40}  onPress={handleMessages} color="#fff" />
        </View>
    )
};

export default Nav;