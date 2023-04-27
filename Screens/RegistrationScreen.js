import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.form}>
      <View>
        <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
        <TextInput style={styles.input} textAlign={"center"} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.inputTitle}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          textAlign={"center"}
          secureTextEntry={"true"}
        />
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <Text style={styles.btnTitle}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //   },
  //   image: {
  //     flex: 1,
  //     justifyContent: "center",
  //     resizeMode: "cover",
  //     // alignItems: "center",
  //   },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 8,
    color: "#fff",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 40,
    borderRadius: 8,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#f0f8ff" : "#000000",
    fontSize: 18,
  },
});

// export default RegistrationScreen;
