import { SafeAreaView } from "react-native";
import { useState } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import NotCheck from "../../assets/icon/ic_NotCheck.png";
import Check from "../../assets/icon/ic_Check.png";

const OptionItem = ({content, score, setScore, clickValue}) => {
    const [check, setCheck] = useState(clickValue);

    const onClickItem = () => {
        setCheck(!check);
        if (check) 
            setScore(score - 1);
        else
            setScore(score + 1);
    }

    return (
        <Container
            select={check}
            onPress={onClickItem}>
            <OptionText select={check}>{content}</OptionText>
            <CheckIconContainer select={check}>   
                <CheckIcon source={(check ? Check : NotCheck)}/>
            </CheckIconContainer>
        </Container>
    );
};
const Container = styled.Pressable`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => (props.select ? 
        `${palette.main}` : `${palette.white}`
    )};
    border: 1px solid ${palette.white};
    border-radius: 20px;
    shadow-color: ${palette.black};
    shadow-opacity: 0.1;
    shadow-offset: 1px 0px;
    margin-bottom: 10px;
`;
const OptionText = styled.Text`
    font-size: 16px;
    font-family: "IBMPlexSans-Regular";
    color: ${(props) => (props.select ? 
        `${palette.white}` : `${palette.black}`
    )};
    margin: 20px 75px 20px 20px;
    line-height: 20px;
`;
const CheckIconContainer = styled.View`
    position: absolute;
    display: flex;
    right: 0;
    align-items: center;
    justify-content: center;
    width: 29px;
    height: 29px;
    margin-right: 18px;
    background-color: ${(props) => (props.select ? 
        `${palette.main}` : `${palette.white}`
    )};
    border: 1px solid ${(props) => (props.select ? 
        `${palette.white}` : `${palette.main}`
    )};
    border-radius: 50%;
`;
const CheckIcon = styled.Image`
    width: 15px;
    height: 10px;
`;
export default OptionItem;