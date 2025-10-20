import { StyleSheet, Text, View, useColorScheme} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import { Colors } from '../constants/colors'


const About = () => {

    const colorscheme= useColorScheme()
    const theme= Colors[colorscheme] ?? Colors.light 
    

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style= {styles.title}>About Page</Text>



      <Link href={"/"} style={styles.link}>Back home</Link>
    </View>
  )
}


export default About

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