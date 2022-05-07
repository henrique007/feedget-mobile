import React from 'react';
import { ActivityIndicator, TouchableOpacityProps,TouchableOpacity, Text } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface SendFeedbackButtonProps extends TouchableOpacityProps {
  isLoading: boolean;
}


export function SendFeedbackButton({isLoading, ...rest}: SendFeedbackButtonProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      {
        isLoading 
        ? 
        <ActivityIndicator 
          color={theme.colors.text_on_brand_color}
        />
        :
        <Text style={styles.title}>
          Enviar Feedback
        </Text>
      }
    </TouchableOpacity>
  );
}