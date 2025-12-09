import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <View style={styles.kutu}>
        <Text style={styles.metin}>Tıkla</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  kutu: {
    backgroundColor: "red",
    width: 100,
    height: 100,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  metin: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
  },
});
