// rnfes

import React from "react";
import { Button, StyleSheet, View } from "react-native";

const Students = () => {
  return (
    <View>
      <Button color={"red"} title="Tıkla" onPress={() => alert("Hello")} />
    </View>
  );
};

export default Students;

const styles = StyleSheet.create({});
