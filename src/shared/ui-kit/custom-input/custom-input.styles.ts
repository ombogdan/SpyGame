import {StyleSheet} from "react-native";
import {createStyles} from "shared/theme/createStyles";

export const useStyles = createStyles(({error, scale, theme, focus, leftIcon, leftIconSize, blueFocus}: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      borderRadius: scale(5),
      paddingBottom: scale(12),
      height: scale(70),
    },
    input: {
      flex: 1,
      height: blueFocus ? scale(48) : scale(50),
      borderRadius: scale(8),
      borderWidth: focus ? scale(2) : scale(1),
      paddingLeft: leftIcon ? scale(55) : scale(12),
      backgroundColor: focus ? theme.palette.white : error ? theme.palette.white : theme.palette.dangerLight,
      borderColor: error ? theme.palette.danger : !focus ? theme.palette.secondaryGray : theme.palette.blueDark,
      fontSize: scale(16)
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center"
    },
    label: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: scale(5),
      width: '100%',
      alignSelf: 'flex-start',
    },
    labelText: {
      color: theme.palette.textDefault,
      fontSize: scale(12),
      fontWeight: '400',
      textTransform: 'uppercase',
    },
    errorMessage: {
      color: theme.palette.danger,
      marginTop: scale(4)
    },
    leftIcon: {
      width: leftIconSize ? scale(leftIconSize) : scale(24),
      height: leftIconSize ? scale(leftIconSize) : scale(24),
      position: "absolute",
      top: leftIconSize && leftIconSize === 24 ? scale(13) : scale(14),
      left: scale(16),
      zIndex: 100
    },
    rightIcon: {
      width: scale(24),
      height: scale(24),
      position: "absolute",
      top: -scale(11.5),
      right: scale(17),
    }
  })
);
