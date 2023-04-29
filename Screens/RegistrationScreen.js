import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 20 : 0 }}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Регистрация</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              textAlign={"left"}
              placeholder="Логин"
              keyboardType="default"
              value={state.login}
              onFocus={() => setIsShowKeyboard(true)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, login: value }))
              }
            />
          </View>
          <View style={{ marginTop: 16 }}>
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
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <Text style={styles.formBottomTitle}>Уже есть аккаунт? Войти</Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#212121",
  },
  form: {
    width: "100%",
    height: 549,
    paddingTop: 92,
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
  },
});
