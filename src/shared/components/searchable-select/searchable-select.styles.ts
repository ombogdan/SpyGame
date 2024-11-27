import { I18nManager, Platform, StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale, small }: any) =>
  StyleSheet.create({
    selectView: {
      flexDirection: "row",
      paddingLeft: 10
    },
    selectLabelTouchableOpacity: {
      width: "93%",
      justifyContent: "center",
      bottom: 5,
      flex: 1
    },
    closeIconTouchableOpacity: {
      right: 10,
      width: 40,
      height: 40,
      top: 5
    },
    touchableItemPickerView: {
      justifyContent: "center",
      flexDirection: "row",
      minHeight: 40,
      paddingTop: 5,
      paddingBottom: 5
    },
    itemPickerView: {
      width: "100%",
      justifyContent: "center",
      paddingLeft: 20,
      paddingRight: 10
    },
    selectedLabelText: {
      top: 5
    },
    placeholderText: {
      color: "#d3d3d3",
      fontSize: 16
    },
    iconView: {
      justifyContent: "flex-end",
      flexDirection: "row",
      left: 15
    },
    modalView: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      height: "100%"
    },
    modalView1: {
      width: "90%",
      maxHeight: "80%",
      opacity: 10,
      borderRadius: 15,
      backgroundColor: "white",
      alignSelf: "center",
      flexDirection: "column",
      borderColor: "black"
    },
    pickerTitleContainer: {
      flex: 1,
      top: 15,
      height: 55,
      alignItems: "center",
      marginHorizontal: 20
    },
    pickerTitleText: {
      fontSize: 18,
      flex: 1,
      color: "#000",
      paddingBottom: 10,
      bottom: 5,
      textAlign: "center",
      width: "86%"
    },
    modalCloseButton: {
      right: -5,
      top: 7,
      width: 40,
      position: "absolute"
    },
    searchView: {
      top: 5,
      flexDirection: "row",
      height: 40,
      shadowOpacity: 1.0,
      shadowRadius: 5,
      shadowOffset: {
        width: 1,
        height: 1
      },
      backgroundColor: "rgba(255,255,255,1)",
      shadowColor: "#d3d3d3",
      borderRadius: 10,
      elevation: 15,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      zIndex: 100,
      borderWidth: Platform.OS === "android" ? 0.5 : 0,
      borderColor: "rgba(70,70,70,0.1)"
    },
    textInput: {
      color: "black",
      paddingLeft: 15,
      marginTop: Platform.OS === "ios" ? 10 : 0,
      marginBottom: Platform.OS === "ios" ? 10 : 0,
      alignSelf: "center",
      flex: 1,
      textAlign: I18nManager.isRTL ? "right" : "left"
    },
    line:{
      top: small ? 0 : 10,
      width: '100%',
      borderBottomWidth: 1,
borderBottomColor: '#b2b2b2'
    }
  })
);
