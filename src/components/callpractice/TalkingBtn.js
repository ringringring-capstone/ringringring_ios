import { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import * as Speech from 'expo-speech';
import Voice from "react-native-voice";
// import * as SpeechToText from 'expo-stt';

import Mic from "../../assets/icon/callpractice/ic_mic.png";

const TalkingBtn = ({setIsRecord}) => {
    const [started, setStarted] = useState(false);
    const [recognized, setRecognized] = useState('');
    const [results, setResults] = useState([]);


    useEffect(() => {
        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechRecognized = onSpeechRecognized;
        Voice.onSpeechResults = onSpeechResults;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const onSpeechStart = () => {
        console.log("onSpeechStart");
        setStarted(true);
    };

    const onSpeechRecognized = (e) => {
        setRecognized(e);
    };

    const onSpeechResults = (e) => {
        setResults(e.value);
    };

    const startRecognizing = async () => {
        try {
            await Voice.start('ko-KR');
            setStarted(false);
            setRecognized('');
            setResults([]);
        } catch (e) {
            console.error(e);
        }
    };

    const stopRecognizing = async () => {
        try {
            await Voice.stop();
            console.log("onSpeechStop");
        } catch (e) {
            console.error(e);
        }
    };

    // tts (정상 작동됨)
    const speakText = async (text) => {
        try {
          await Speech.speak(text, {
            language: 'ko',
          });
          console.log("Text spoken successfully!");
        } catch (error) {
          console.error("Error speaking text:", error);
        }
    };


     // 음성 녹음 버튼 클릭 시
     let longPressTimer;
     const handlePressIn = () => {
         longPressTimer = setTimeout(() => {
             setIsRecord(true);
             onSpeechStart();
             console.log("녹음 test 시작");
         }, 1000);
     };
 
     const handlePressOut = () => {
        clearTimeout(longPressTimer);
        setIsRecord(false);
        stopRecognizing();
        console.log("녹음 test 끝");
        console.log("녹음된 텍스트 :", recognized);
     };

    return (
        <Container
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            <MicIcon source={Mic}/>
        </Container>
    );
};
const Container = styled.Pressable`
    background-color: #C3C3C3;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.9;
    shadow-offset: 0px 0px;
    margin-bottom: 5px;
`;
const MicIcon = styled.Image`
    width: 40px;
    height: 40px;
`;
export default TalkingBtn;