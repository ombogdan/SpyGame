import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Box } from "ui-kit/box";
import { useStyles } from "./home.styles";

const Home = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Box pl={16} pr={16}>
        <Text>iuhuihc</Text>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
