// rnfes
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const handlePress = () => {
    alert("Hello");
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Tıkla</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("@/assets/images/icon.png")}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ImageBackground
          source={require("@/assets/images/icon.png")}
          style={{
            width: 100,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24 }}>Expo</Text>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    paddingHorizontal: 8,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
  },
});
