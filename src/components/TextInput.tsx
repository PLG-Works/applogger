import React from 'react';
import {TextInput as RnTextInput, TextInputProps} from 'react-native';
import {ComponentTypes} from '../constants/ComponentTypes';
import {useLoggingFunctions} from '../hooks/useLoggingFunctions';

export function TextInput(props: TextInputProps) {
  const {filteredProps} = useLoggingFunctions(props, ComponentTypes.TextInput);

  return <RnTextInput {...filteredProps}>{props.children}</RnTextInput>;
}