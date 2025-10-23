import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import navIcons from '../data/nav'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
    {navIcons.map((icon: any) => (
      <TouchableOpacity style={styles.navbarIcon}>
        <Text style={styles.navbarIconText}>{icon.icon}</Text>
      </TouchableOpacity>
    ))}
  </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        padding: 10,
        marginBottom: 50,
      },
      navbarIcon: {
        fontSize: 50,
        flexDirection: "row",
        margin: 10,
      },
      navbarIconText: {
        fontSize: 16,
        fontWeight: "bold",
      },
})