import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Contact Page</Text>



      <Link href={"/"} style={styles.link}>Back home</Link>
    </View>
  )
}


export default Contact

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

  link:{
    marginVertical:10,
    borderBottomWidth:1
  }

})