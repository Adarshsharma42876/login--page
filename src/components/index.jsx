import React from 'react'
import { TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native'

interface InputFieldProps extends TextInputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  rest?: any;
}

const InputField = (props: InputFieldProps) => {
  const { value, onChangeText, style, rest, placeholder } = props
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      {...rest} // Spread other TextInput props
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    // fontSize: 16,
    width: '100%',
    marginVertical: 5,
  },
})

export default InputField
