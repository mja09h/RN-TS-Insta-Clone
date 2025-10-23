import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import stories from "./data/stories";
import posts from "./data/posts";
import navIcons from "./data/nav";

import Header from "./componsts/Header";
import Stories from "./componsts/Stories";
import Posts from "./componsts/Posts";
import Navbar from "./componsts/Navbar";

export default function App() {
  return (

    <View style={styles.container}>
      {/* Header */}
      <Header />
      <ScrollView style={styles.scrollView}>
      {/* Stories */}
      <Stories />

      {/* Posts */}
      <Posts />
      </ScrollView>
      
      {/* Navbar */}
      <Navbar />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
