import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
// import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/BG_Photo.jpg")}
      >
        {/* <RegistrationScreen /> */}
        <LoginScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    // alignItems: "center",
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: "#f0f8ff",
  //   height: 40,
  //   borderRadius: 8,
  //   color: "#fff",
  // },
  // form: {
  //   marginHorizontal: 40,
  // },
  // inputTitle: {
  //   color: "#fff",
  //   marginBottom: 10,
  //   fontSize: 18,
  // },
  // btn: {
  //   backgroundColor: "#FF6C00",
  //   height: 40,
  //   borderRadius: 8,
  //   marginTop: 40,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginHorizontal: 20,
  // },
  // btnTitle: {
  //   color: Platform.OS === "ios" ? "#f0f8ff" : "#000000",
  //   fontSize: 18,
  // },
});
