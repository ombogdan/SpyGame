import React, {forwardRef, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {CustomInputProps} from 'ui-kit/custom-input/custom-input.types';
import {useTheme} from 'shared/theme/ThemeProvider';
import {AppIcon} from 'assets/index';
import {useStyles} from './custom-input.styles';

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(
  (props: CustomInputProps, ref: React.ForwardedRef<TextInput>) => {
    const {
      value,
      onChangeValue,
      placeholder,
      styleContainer,
      styleInput,
      name,
      errorMessage,
      keyboardType = 'default',
      leftIcon,
      leftIconSize,
      secureTextEntry,
      onFocus,
      onBlur,
      multiline = false,
      autoFocus = false,
      editable = true,
      errorMessageStyles,
      blueFocus,
    } = props;
    const [focus, setFocus] = useState(false);
    const styles = useStyles({
      error: errorMessage,
      leftIconSize,
      leftIcon,
      focus,
      blueFocus,
    });
    const {theme} = useTheme();
    const [securePassword, setSecurePassword] = useState(true);

    const handleFocus = (e: any) => {
      if (onFocus) {
        onFocus(e);
      }
      setFocus(true);
    };

    const handleBlur = (e: any) => {
      if (onBlur) {
        onBlur(e);
      }
      setFocus(false);
    };

    return (
      <View style={[styles.container, styleContainer]}>
        {name && (
          <View style={styles.label}>
            <Text style={styles.labelText}>{name}</Text>
          </View>
        )}
        <View style={[styles.inputContainer, styleInput]}>
          {leftIcon && (
            <AppIcon name={leftIcon} style={styles.leftIcon} color={errorMessage ? 'danger' : 'black50'}/>
          )}
          <TextInput
            ref={ref}
            editable={editable}
            autoFocus={autoFocus}
            style={[styles.input, styleInput]}
            onChangeText={onChangeValue}
            value={value}
            multiline={multiline}
            textAlignVertical={multiline ? 'top' : 'center'}
            secureTextEntry={secureTextEntry ? securePassword : false}
            keyboardType={keyboardType}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholderTextColor={theme.palette.gray}
          />
        </View>
        {errorMessage && (
          <Text
            style={[
              styles.errorMessage,
              errorMessageStyles || {},
            ]}
          >
            {errorMessage}
          </Text>
        )}
      </View>
    );
  },
);

export default CustomInput;
