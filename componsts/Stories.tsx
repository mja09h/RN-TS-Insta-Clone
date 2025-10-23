import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import stories from "../data/stories";

const Stories = () => {
  const pusBtn = (story: any) => {
    if (story.isYourStory) {
      return (
        <View style={styles.storyContainer}>
          <View style={styles.storyImageContainer}>
            <Image source={{ uri: story.avatar }} style={styles.storyImage} />

            <TouchableOpacity style={styles.storyPlusContainer}>
              <Text style={styles.storyPlus}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.storyText}>{story.username}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.storyContainer}>
          <View style={styles.storyImageContainer}>
            <Image source={{ uri: story.avatar }} style={styles.storyImage} />
          </View>

          <Text style={styles.storyText}>{story.username}</Text>
        </View>
      );
    }
  };
  return (
    <View style={styles.stories}>
      <ScrollView horizontal={true}>
        {stories.map((story) => pusBtn(story))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  stories: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    paddingVertical: 10,
  },
  storyContainer: {
    marginRight: 10,
  },
  storyImageContainer: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: "#ff0000",
    borderStyle: "solid",
    padding: 2,
    position: "relative",
  },
  storyImage: {
    width: 60,
    height: 60,
    padding: 5,
    borderRadius: 100,
  },
  storyText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  storyPlusContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "blue",
    borderRadius: 20,
    width: 20,
    height: 20,
    borderWidth: 1 , 
    borderColor: "#ffffff",
    borderStyle: "solid",
  },
  storyPlus: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 20,
  },
});
