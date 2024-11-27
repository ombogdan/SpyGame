import React, { useState, useEffect } from "react";
import {
  FlatList,
  Modal,
  Platform,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  KeyboardAvoidingView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useStyles } from "./searchable-select.styles.ts";

const SearchableSelect = ({
                            modalVisible,
                            dataSource,
                            placeholder,
                            selectedLabel,
                            disablePicker,
                            changeAnimation,
                            close,
                            small,
                            short,
                            selectedValue,
                            hideDetail,
                            selectedColorLabel,
                            checkInput,
                            searchBarPlaceHolder,
                            fontSize,
                            alreadySelectedElements,
                            onCloseModal,
                            pickerTitle
                          }: SearchableSelectProps) => {
  const styles = useStyles({ small });

  const [modalVisibleState, setModalVisibleState] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dataSourceState, setDataSourceState] = useState(dataSource);

  useEffect(() => {
    if (modalVisible !== undefined && modalVisible !== modalVisibleState) {
      setModalVisibleState(modalVisible);
    }
  }, [modalVisible]);

  const _searchFilterFunction = (searchText: string, data: Array<{ name: string }>) => {
    if (searchText) {
      const newData = data.filter((item) => {
        const itemData = item.name.toUpperCase();
        const textData = searchText.toUpperCase();
        return itemData.includes(textData);
      });
      // @ts-ignore
      setDataSourceState([...newData]);
      setSearchText(searchText);
    } else {
      setDataSourceState(dataSource);
      setSearchText(searchText);
    }
  };

  return (
    <View>
      <View style={styles.selectView}>
        <TouchableOpacity
          style={[styles.selectLabelTouchableOpacity, close && { width: "92%" }]}
          disabled={disablePicker}
          onPress={() => {
            setModalVisibleState(true);
            if (checkInput) {
              checkInput();
            }
          }}
          activeOpacity={0.7}
        >
          {selectedLabel ? (
            <Text
              numberOfLines={2}
              style={[
                styles.selectedLabelText,
                {
                  color: selectedColorLabel || (disablePicker ? "#A9A9A9" : "black"),
                  fontSize: fontSize || 16
                }
              ]}
            >
              {typeof selectedLabel === "string" ? selectedLabel.trimStart() : selectedLabel}
            </Text>
          ) : (
            <Text style={styles.placeholderText}>{placeholder}</Text>
          )}
        </TouchableOpacity>
        {!hideDetail ? (
          <View style={styles.iconView}>
            <TouchableOpacity
              disabled={disablePicker}
              onPress={() => setModalVisibleState(true)}
              activeOpacity={1}
            >
              <Entypo
                name="triangle-down"
                type="font-awesome"
                underlayColor="transparent"
                size={18}
              />
            </TouchableOpacity>
            {close && (
              <TouchableOpacity
                onPress={() => selectedValue(null)}
                activeOpacity={1}
                disabled={disablePicker}
                style={styles.closeIconTouchableOpacity}
              >
                <Icon name="close" type="font-awesome" underlayColor="transparent" size={28} />
              </TouchableOpacity>
            )}
          </View>
        ) : null}
      </View>
      <Modal
        supportedOrientations={[
          "portrait",
          "portrait-upside-down",
          "landscape",
          "landscape-left",
          "landscape-right"
        ]}
        visible={modalVisibleState}
        transparent={true}
        animationType={changeAnimation}
        onRequestClose={() => {
          setModalVisibleState(false);
          setSearchText("");
          if (onCloseModal) {
            onCloseModal();
          }
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.modalView}
        >
          <View style={styles.modalView1}>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.pickerTitleContainer}>
                {pickerTitle ? <Text style={styles.pickerTitleText}>{pickerTitle}</Text> : null}
              </View>
              <TouchableOpacity
                style={styles.modalCloseButton}
                activeOpacity={0.7}
                onPress={() => {
                  setModalVisibleState(false);
                  setSearchText("");
                  if (onCloseModal) {
                    onCloseModal();
                  }
                }}
              >
                <Icon name="close" size={30} />
              </TouchableOpacity>
            </View>
            {!short ? (
              <View style={styles.searchView}>
                <TextInput
                  onChangeText={(text) => _searchFilterFunction(text, dataSource)}
                  placeholder={searchBarPlaceHolder}
                  placeholderTextColor={"gray"}
                  style={styles.textInput}
                  underlineColorAndroid="transparent"
                  keyboardType="default"
                  returnKeyType={"done"}
                  blurOnSubmit={true}
                />
              </View>
            ) : null}
            <View style={{ height: 5 }} />
            <View style={styles.separator} />
            <FlatList
              keyboardShouldPersistTaps={"always"}
              keyExtractor={(item) => `${item._id}`}
              showsVerticalScrollIndicator={true}
              refreshing={true}
              initialNumToRender={20}
              onEndReachedThreshold={0.5}
              numColumns={1}
              data={searchText === "" ? dataSource : dataSourceState}
              renderItem={({ item, index }) => {
                const existEl = alreadySelectedElements?.find((element) => element._id === item._id);
                return (
                  <View
                    style={[
                      styles.itemPickerContainer,
                      existEl && { backgroundColor: "rgba(180,213,143,0.47)" }
                    ]}
                  >
                    <TouchableOpacity
                      style={styles.touchableItemPickerView}
                      onPress={() => {
                        selectedValue(item);
                        setModalVisibleState(false);
                        setSearchText("");
                        if (onCloseModal) {
                          onCloseModal();
                        }
                      }}
                    >
                      <View style={styles.itemPickerView}>
                        <Text>{item?.name ?? ""}</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.separator} />
                  </View>
                );
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </Modal>
      <View style={[styles.line, small && { top: 0 }]} />
    </View>
  );
};

export default SearchableSelect;
