import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from './components/Header/Header';
import CarsList from './components/CarList/CarsList';

export default function App() {
  return (
    <View style={styles.container}>
     <Header/>
     <CarsList/>
     <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
