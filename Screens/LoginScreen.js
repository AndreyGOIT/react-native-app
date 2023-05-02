import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  return (
    <View style={styles.form}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Войти</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          placeholder="Адрес электронной почты"
          keyboardType="email-address"
          value={state.email}
          onFocus={() => setIsShowKeyboard(true)}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <TextInput
          style={styles.input}
          textAlign={"left"}
          secureTextEntry={true}
          placeholder="Пароль"
          keyboardType="default"
          value={state.password}
          onFocus={() => setIsShowKeyboard(true)}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, password: value }))
          }
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={keyboardHide}
      >
        <Text style={styles.btnTitle}>Войти</Text>
      </TouchableOpacity>
      <Text style={styles.formBottomTitle}>
        Нет аккаунта? Зарегистрироваться
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: 489,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // marginBottom: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 33,
  },
  headerTitle: {
    // fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
  },
  input: {
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#212121",
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 40,
    borderRadius: 20,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: Platform.OS === "ios" ? "#f0f8ff" : "#000000",
    fontSize: 16,
  },
  formBottomTitle: {
    // fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
    marginTop: 16,
    color: "#1B4371",
  },
});
