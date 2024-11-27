import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale, userName }: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.dangerLight
    },
    gameNotStartedContainer: {
      height: "100%",
      justifyContent: "space-between"
    },
    gameStartedContainer: {
      height: "100%",
      justifyContent: "space-between",
      marginTop: scale(10)
    },
    addUserButtonContainer: {
      width: scale(50),
      height: scale(50),
      alignItems: "center",
      justifyContent: "center",
      borderWidth: scale(2),
      marginLeft: scale(10),
      borderRadius: scale(10),
      borderColor: userName ? theme.palette.blueDark : theme.palette.secondaryGray
    },
    addUserContainer: {
      flexDirection: "row"
    },
    headerText: {
      fontSize: scale(16),
      fontWeight: "600",
      marginBottom: scale(10)
    },
    userName: {
      fontSize: scale(14),
      fontWeight: "400",
      marginBottom: scale(5)
    },
    checkboxText: {
      textDecorationLine: undefined,
      fontWeight: "bold"
    }
  })
);
