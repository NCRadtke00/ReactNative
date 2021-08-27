import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton/Button";
import carStyles from "./CarStyles";
const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={carStyles.carContainer}>
      <ImageBackground source={image} style={carStyles.image} />

      <View style={carStyles.titles}>
        <Text style={carStyles.title}>{name}</Text>
        <Text style={carStyles.subtitle}>
          {tagline} <Text style={carStyles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={carStyles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
