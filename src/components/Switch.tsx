import React from 'react';
import {Switch as RnSwitch, SwitchProps} from 'react-native';
import {ComponentTypes} from '../constants/ComponentTypes';
import {useLoggingFunctions} from '../hooks/useLoggingFunctions';

/**
 * @function Switch - Component for rendering the React Native Switch component with tracking.
 * @param {SwitchProps} props - Object containing Switch properties.
 * @returns {JSX} Switch View.
 */
export function Switch(props: SwitchProps): JSX.Element {
  const {filteredProps} = useLoggingFunctions(props, ComponentTypes.Switch);

  return <RnSwitch {...filteredProps}>{props.children}</RnSwitch>;
}
