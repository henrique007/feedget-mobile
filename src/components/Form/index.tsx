import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, DrawerLayoutAndroidComponent} from 'react-native';

import { theme } from '../../theme';
import { styles } from './styles';
import { ArrowArcLeft } from 'phosphor-react-native';

import { FeedbackType } from '../Widget';
import {feedbackTypes} from '../../utils/feedbackTypes';
import { ScreenshotButton } from '../ScreenshotButton';
import { SendFeedbackButton } from '../SendFeedbackButton';
import { captureScreen } from 'react-native-view-shot';


interface Props {
    feedbackType: FeedbackType;
    onFeedbackCanceled: () => void;
    onFeedbackSent: () => void;
}

export function Form({feedbackType, onFeedbackCanceled, onFeedbackSent}:Props) {
    const [screenshot, setScreenshot] = useState<string|null>(null);
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [isSendingFeedback, setIsSendingFeedback] = useState(false);

    function handleScreenshot(){
        captureScreen({
            format:'jpg',
            quality:0.8
        })
        .then(uri => setScreenshot(uri))
        .catch(error => console.log(error))
    }

    function handleScreenshotRemove(){
        setScreenshot(null);
    }

    async function handleSendFeedback() {
        if(isSendingFeedback){
            return;
        }
        setIsSendingFeedback(true);

        try{

        }catch(error) {
            console.log(error);
            setIsSendingFeedback(false)
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={onFeedbackCanceled}>
                <ArrowArcLeft
                    size={24}
                    weight="bold"
                    color={theme.colors.text_secondary}
                />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                <Image 
                    source={feedbackTypeInfo.image}
                    style={styles.image}
                />
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}

                </Text>
            </View>
        </View>

        <TextInput
            multiline
            style={styles.input}
            placeholder= "AppLoading está deprecado, porém, consegui resolver o problema da forma correta seguindo a documentação. Segue de exemplo abaixo do meu App()"
            placeholderTextColor={theme.colors.text_secondary}
        />

        <View style={styles.footer}>
            <ScreenshotButton 
                onTakeShot={handleScreenshot}
                onRemoveShot={handleScreenshotRemove}
                screenshot= {screenshot}
            />

            <SendFeedbackButton 
            onPress={handleSendFeedback}
            isLoading={isSendingFeedback}/>
        </View>

    </View>
  );
}