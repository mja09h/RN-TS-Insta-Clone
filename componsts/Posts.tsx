import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import posts from "../data/posts";

const Posts = () => {
  return (
    <>
      {posts.map((post: any) => (
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
              <Image
                source={{ uri: post.userAvatar }}
                style={styles.postUserAvatar}
              />
              <Text style={styles.postUsername}>{post.username}</Text>
            </View>

            <View style={styles.postHeaderRight}>
              <TouchableOpacity style={styles.postOptions}>
                <Text style={styles.postOptionsText}>...</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Image source={{ uri: post.postImage }} style={styles.postImage} />

          <View style={styles.postFooter}>
            <View style={styles.postFooterTop}>
              <TouchableOpacity style={styles.postFooterLike}>
                <Text style={styles.postFooterLikeText}>♥️</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.postFooterComment}>
                <Text style={styles.postFooterCommentText}>💬</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.postFooterShare}>
                <Text style={styles.postFooterShareText}>✈️</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.postFooterTag}>
                <Text style={styles.postFooterTagText}>🏷️</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.postFooterDown}>
            <Text style={styles.postFooterLikes}>{post.likes} likes</Text>
            <Text style={styles.postFooterCaption}>{post.caption}</Text>
            <Text style={styles.postFooterComments}>
              {post.comments} comments
            </Text>
            <Text style={styles.postFooterTimeAgo}>{post.timeAgo}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 5,
    marginTop: 5,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  postUserAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  postUsername: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  postHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  postOptions: {
    padding: 10,
  },
  postOptionsText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 400,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  postFooterTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  postFooterLike: {
    padding: 10,
  },
  postFooterLikeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postFooterComment: {
    padding: 10,
  },
  postFooterCommentText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postFooterShare: {
    padding: 10,
    marginRight: 200,
  },
  postFooterShareText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postFooterTag: {
    padding: 10,
  },
  postFooterTagText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postFooterDown: {},
  postFooterLikes: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 5,
  },
  postFooterCaption: {
    fontSize: 16,
    margin: 5,
  },
  postFooterComments: {
    fontSize: 16,
    color: "gray",
    margin: 5,
  },
  postFooterTimeAgo: {
    fontSize: 16,
    color: "gray",
    margin: 5,
  },
});
