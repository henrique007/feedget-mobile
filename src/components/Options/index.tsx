import React from 'react';
import { View, Text } from 'react-native';

import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';
import { FeedbackType } from '../Widget';

interface OptionsProps {
  onFeedbackTypeChenged: (feedbackType: FeedbackType) => void;
}

export function Options({onFeedbackTypeChenged}:OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object
          .entries(feedbackTypes)
          .map(([key, value])=> (
            <Option
              key={key}
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChenged(key as FeedbackType)}
            />
          ))
        }
      </View>
      <Copyright/>
    </View>
  );
}