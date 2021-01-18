import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      width: 100, 
      height: 100
    },
    item: {
      color: 'red'
    },
    nav: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'blue'
    },
    menu:{
      position: 'absolute',
      top: 0,
      height: 400,
      width: 300,
      borderBottomColor: 'black',
      borderStyle: 'solid',
      borderWidth: 1,
      backgroundColor: '#fff',
      zIndex: 1000
    }
  });

  export default styles;