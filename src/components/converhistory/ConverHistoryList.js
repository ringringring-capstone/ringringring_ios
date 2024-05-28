import { useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollView } from "react-native";

import palette from "../../styles/colorPalette";

import InfoBox from "../InfoBox";
import ConverHistoryItem from "./ConverHistoryItem";
import ReuseText from "../ReuseText";

const ConverHistoryList = ({callConversation, setIsClick, setSelectIndex}) => {
    return (
        <Container>
            <SubContainer>
                {callConversation.length !== 0 ? (
                    callConversation.map((item, idx) => (
                        <ConverHistoryItem
                            key={idx}
                            title={item.title}
                            content={item.content}
                            onPress={() => {
                                setIsClick(true);
                                setSelectIndex(idx);
                            }}
                        />
                    ))
                ) : (
                    <ReuseText
                        text={"저장된 통화내역이 없어요 🧐"}
                        type={"content"}
                        style={{marginTop: 250}}/>
                )}
            </SubContainer>
        </Container>
    );
};
const Container = styled(ScrollView)`
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    background-color: ${palette.white};
`;
const SubContainer = styled.View`
    display: flex;
    align-items: center;
`;
const TextContainer = styled.Text``;
export default ConverHistoryList;