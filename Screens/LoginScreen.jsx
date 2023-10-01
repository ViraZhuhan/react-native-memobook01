import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import imageBg from "../images/photoBG.png";

const LoginScreen = () => {
  const [text, onChangeText] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={styles.imageBg}
      ></ImageBackground>

      <View style={styles.formReg}>
        
        <Text style={styles.textTitleLogin}>Log in</Text>

        <View style={styles.wrapInput}>
          <TextInput
            style={styles.input}
            autoComplete="email"
            placeholder="E-mail"
          />

          <View style={styles.wrapPassword}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              style={styles.iconPassword}
              onPress={toggleShowPassword}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnSubmitText}>Log in</Text>
        </TouchableOpacity>

        <View style={styles.wrapLogin}>
          <Text style={styles.btnLoginText}>Don`t have an account?</Text>

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnLoginText}>Log up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
