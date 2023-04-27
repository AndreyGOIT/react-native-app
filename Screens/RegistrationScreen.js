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
      <Text style={styles.formTitle}>Регистрация</Text>
      <View>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          placeholder="Логин"
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          placeholder="Адрес электронной почты"
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          secureTextEntry={"true"}
          placeholder="Пароль"
        />
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <Text style={styles.btnTitle}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <Text style={styles.formBottomTitle}>Уже есть аккаунт? Войти</Text>
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
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#fff",
  },
  form: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 549,
    paddingTop: 92,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

    // marginHorizontal: 40,
  },
  formTitle: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 33,
  },
  inputTitle: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 40,
    borderRadius: 20,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 20,
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#f0f8ff" : "#000000",
    fontSize: 16,
  },
  formBottomTitle: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    marginTop: 16,
  },
});

// export default RegistrationScreen;
