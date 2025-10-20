import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/logos/logo1.png'

// themed components 
import ThemedView from '../components/ThemedView'

const Home = () => {
  return (
    <ThemedView style= {styles.container}>
      <Image source= {Logo} style={styles.img}/>

      <Text style= {styles.title}>Uni²</Text>

      <Text style={{marginTop:10, marginBottom: 30}}>
        Reading list app
      </Text>

      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>


      {/*<View style={styles.card}>
        <Text>Hola! Hola! Hola!</Text>
      </View> */}

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    backgroundColor: '#rgb(245, 231, 196)', 
    flex:1,
    left: 0,
    right:0,
    top: 0,
    bottom: 0, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '18'
  },

  img:{

    marginVertical: 20,

  },

  link:{
    marginVertical:10,
    borderBottomWidth:1
  }

/*card:{
  backgroundColor: '#rgb(245, 231, 196)', 
  padding: 20,
  borderRadius: 5,
  boxShadow: '4px 4px rgba(0,0,0,0.1)', 
*/

})