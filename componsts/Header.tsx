import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
    <View style={styles.header}>
        <Text style={styles.headerText}>Instagram</Text>
        <TouchableOpacity>
          <Text style={styles.headerHeart}>♥️</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.headerMessage}>✉️</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 20,
      },
      headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 100,
      },
      headerHeart: {
        fontSize: 20,
        color: '#000',
      },
      headerMessage: {
        fontSize: 20,
        color: '#000',
        marginRight: 10,
      },
})