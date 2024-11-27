import React, { useEffect, useRef, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Box } from "ui-kit/box";
import { useStyles } from "./home.styles";
import { CustomButton } from "ui-kit/custom-button";
import { BUTTON_VARIANTS, FirstNameList, LastNameList, ThemeNamesList } from "shared/constants";
import CustomInput from "ui-kit/custom-input/custom-input.component.tsx";
import { AppIcon } from "shared/assets";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RNPickerSelect from "react-native-picker-select";
import { SearchableSelect } from "components/searchable-select";
import { AppUserRoutes } from "shared/navigation/app-user";
import { navigate } from "shared/navigation/root-navigator.config.ts";

const Home = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userList, setUserList] = useState<string[]>([]);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
  const [allThemeChecked, setAllThemeChecked] = useState<boolean>(true);
  const [selectedTheme, setSelectedTheme] = useState<string>("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const styles = useStyles({ userName });
  const textInputRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", (e) => {
      setKeyboardHeight(e.endCoordinates.height);
    });
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardHeight(0);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    if (textInputRef.current && gameStarted) {
      // @ts-ignore
      textInputRef.current?.focus();
    }
  }, [gameStarted]);

  const handleSelectSettingsGame = () => {
   navigate(AppUserRoutes.RolePlaying, {allThemeChecked, selectedLocations, selectedTheme});
  };

  useEffect(() => {
    getRandomName();
  }, []);

  const getRandomName = () => {
    const firstName = FirstNameList[Math.floor(Math.random() * FirstNameList.length)];
    const lastName = LastNameList[Math.floor(Math.random() * LastNameList.length)];
    setUserName(firstName + " " + lastName);
  };

  const handleAddUser = () => {
    setUserList([...userList, userName]);
    setUserName("");
    getRandomName();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box pl={16} pr={16}>
        {!gameStarted ?
          <View style={styles.gameNotStartedContainer}>
            <Text>list of previous games</Text>
            <CustomButton variant={BUTTON_VARIANTS.primary} onPress={handleStartGame} title={"Почати нову гру"} />
          </View>
          :
          <KeyboardAvoidingView behavior={"padding"} style={styles.gameStartedContainer}>
            <Box>
              <Box pb={10}>
                <BouncyCheckbox
                  size={25}
                  fillColor="blue"
                  unFillColor="#FFFFFF"
                  text="Вибрати всі теми і локаціії"
                  textStyle={styles.checkboxText}
                  isChecked={allThemeChecked}
                  iconStyle={{ borderColor: "blue" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(isChecked: boolean) => {
                    setAllThemeChecked(isChecked);
                  }}
                />
                <Box pt={30} pb={20} pr={16}>
                  <SearchableSelect
                    dataSource={ThemeNamesList}
                    selectedLabel={selectedTheme}
                    placeholder={"Виберіть тему"}
                    searchBarPlaceHolder={"Виберіть тему"}
                    pickerTitle={"Виберіть тему"}
                    close={false}
                    selectedValue={(theme) => {
                      if(theme) {
                        setSelectedTheme(theme.name);
                        setSelectedLocations(theme.locations);
                      }
                    }}
                  />
                </Box>
              </Box>
              <View style={styles.addUserContainer}>
                <CustomInput
                  ref={textInputRef}
                  value={userName}
                  placeholder={"Введіть імʼя гравця"}
                  onChangeValue={setUserName} />
                <TouchableOpacity disabled={!userName} style={styles.addUserButtonContainer} onPress={handleAddUser}>
                  <AppIcon name={"add"} size={20} color={"blueDark"} />
                </TouchableOpacity>
              </View>
              <Text style={styles.headerText}>Список гравців:</Text>
              {userList.map((item, index) => (
                <Text style={styles.userName} key={index}>{item}</Text>
              ))}
            </Box>
            {userList.length > 3 &&
              <View style={[Platform.OS === "ios" && { position: "absolute", bottom: keyboardHeight, width: "100%" }]}>
                <CustomButton
                  variant={BUTTON_VARIANTS.primary}
                  onPress={handleSelectSettingsGame}
                  title={"Почати роздачу ролей"} />
              </View>
            }
          </KeyboardAvoidingView>
        }
      </Box>
    </SafeAreaView>
  );
};

export default Home;
