import React from "react";
import { View, Text, Pressable } from "react-native";
import btnstyles from "./BtnStyles";
const Button = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={btnstyles.container}>
      <Pressable
        style={[btnstyles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[btnstyles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
