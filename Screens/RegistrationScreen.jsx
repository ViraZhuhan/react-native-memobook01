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

const RegistrationScreen = () => {
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
        <View style={styles.avatar}>
          <TouchableOpacity style={styles.btnAddAvatar}>
            <Ionicons
              name="add"
              size={20}
              color="#FF6C00"
              style={styles.iconAvatar}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.textTitle}>Registration</Text>

        <View style={styles.wrapInput}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Login"
          />
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
          <Text style={styles.btnSubmitText}>Register</Text>
        </TouchableOpacity>

        <View style={styles.wrapLogin}>
          <Text style={styles.btnLoginText}>Already have an account?</Text>

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnLoginText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegistrationScreen;
