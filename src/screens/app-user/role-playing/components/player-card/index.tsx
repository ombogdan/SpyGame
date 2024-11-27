// PlayerCard.js
import React, { useState, useRef } from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet, Animated } from "react-native";

const PlayerCard = ({ player, nextPlayer, selectedLocation, selectedTheme }) => {
  const [flipped, setFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    Animated.timing(flipAnim, {
      toValue: flipped ? 0 : 1,
      duration: 800,
      useNativeDriver: true
    }).start(() => {
      setFlipped(!flipped);
    });
    if (flipped) {
      setTimeout(() => {
        nextPlayer();
      }, 800);
    }
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"]
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"]
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }]
  };
  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }]
  };

  return (
    <TouchableWithoutFeedback onPress={flipCard}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.card, frontAnimatedStyle, { opacity: flipped ? 0 : 1 }]}
        >
          <Text style={styles.text}>{"Гравец " + player.userName + "\nнатисніть щоб побачити свою роль"}</Text>
        </Animated.View>
        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle, { opacity: flipped ? 1 : 0 }]}>
          <Text style={styles.text}>
            {player.spy ? "Ви шпигун" : "Ви мирний житель"}
          </Text>
          <Text style={[styles.text, {marginTop: 10}]}>
            Тема: {selectedTheme}
          </Text>
          {!player.spy &&
            <Text style={[styles.text, {marginTop: 10}]}>
              Локація: {selectedLocation}
            </Text>
          }
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 10
  },
  card: {
    flex: 1,
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  cardBack: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#4A87CE"
  },
  text: {
    fontSize: 24,
    color: "black",
    textAlign: "center"
  }
});

export default PlayerCard;
