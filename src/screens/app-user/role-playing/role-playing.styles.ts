import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.dangerLight
    },
    askText:{
      fontSize: scale(16),
      fontWeight: '600',
      textAlign: 'center'
    }
  })
);
