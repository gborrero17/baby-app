import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

function HomeScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainTitle}>
          <Text style={styles.mainText}>VoxPopin</Text>
          <Text style={styles.subText}>embrace the purple</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonwrap: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  mainTitle: {
    alignItems: "center",
    marginBottom: 32,
  },
  mainText: {
    fontSize: 55,
    color: "#6153c3",

    lineHeight: 62,
  },
  subText: {
    fontSize: 21,
    color: "#AD55C3",

    lineHeight: 21,
  },
  mainImageView: {
    height: "61%",
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
  },
  mainImage: {
    bottom: 0,
  },
  opener: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: "black",
    opacity: 0.6,
  },
});
