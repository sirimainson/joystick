import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    containerSteam: {
      justifyContent: 'center',      
      transform: [{ rotate: '90deg' }],
      backgroundColor: '#F5FCFF',      
    },
    content: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'center',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    textinputIp: {
      width: '70%',
      padding: 10,
      // backgroundColor: '#9b9b9b'
    },
    btnConnect: {
      margin: 10,
      padding: 10,
      width: '30%',
      alignItems: 'center',      
      backgroundColor: '#00b800',
      borderRadius: 5
    },
    btnReset: {
      margin: 10,
      padding: 10,
      width: '30%',
      alignItems: 'center',      
      backgroundColor: '#da003a',
      borderRadius: 5
    },
    btnText: {
      color: '#fff'
    }
})

export default styles