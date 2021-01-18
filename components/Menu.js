import React from 'react';
import {FlatList, Button, Text, View} from 'react-native';

import styles from '../style';

const Menu = (props) =>{

    const {setMenuOpen, menuOpen} = props;

    return (
        <View style={{...styles.menu, left: menuOpen ? 0 : -300}}>
            <Button title="Back" onPress={()=>setMenuOpen(false)}>Back</Button>
        </View>
    )
}

export default Menu;