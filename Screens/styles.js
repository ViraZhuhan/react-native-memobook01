import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
  },

  imageBg: {
    flex: 1,
    resizeMode: "cover",
    height: 812,
  },

  formReg: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  avatar: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  btnAddAvatar: {
    position: "absolute",
    top: 50,
    right: -10,
    display: "flex",
    alignItems: "center",
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF6C00",
  },

  textTitle: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "RobotoMono-Regular",
    fontSize: 30,
  },

  textTitleLogin: {
    marginTop: 32,
    marginBottom: 32,
    fontFamily: "RobotoMono-Regular",
    fontSize: 30,
  },

  wrapInput: {
    marginBottom: 43,
    gap: 16,
  },

  input: {
    margin: 12,
    padding: 10,
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    fontFamily: "RobotoMono-Regular",
    fontSize: 16,
  },

  wrapPassword: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  iconPassword: {
    position: "absolute",
    top: 25,
    right: 25,
  },

  btnSubmit: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    padding: 10,
    marginBottom: 16,
    width: 343,
    height: 51,
    borderRadius: 100,
  },

  btnSubmitText: {
    fontFamily: "RobotoMono-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },

  wrapLogin: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
  },

  btnLoginText: {
    fontFamily: "RobotoMono-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});

export default styles;
