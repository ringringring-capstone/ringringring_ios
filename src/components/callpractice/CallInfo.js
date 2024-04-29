import { useState, useEffect } from "react";
import styled from "styled-components";
import palette from "../../styles/colorPalette";
import Profile from "../../assets/icon/callpractice/ic_callProfile.png";
import ReuseText from "../ReuseText";

const CallInfo = ({name, isClick, isLoading, setIsLoadig, seconds, setSeconds}) => {
    const formatTime = 
        `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

    return (
        <Container>
            <ImageContainer>
                <ProfileImg source={Profile}/>
            </ImageContainer>
            <TextContainer>
                <ReuseText
                    text={(isLoading ? "휴대전화 연결 중..." : `${formatTime}`)}
                    type={"more"}
                    fontsize={"17px"}
                    fontfamily={"IBMPlexSans-Medium"}
                    color={"#D0CECE"}/>
                <ReuseText
                    text={name}
                    type={"more"}
                    fontsize={"22px"}
                    fontfamily={"IBMPlexSans-Bold"}
                    color={palette.white}/>
            </TextContainer>
        </Container>
    );
};
const Container = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin: 45px 0 0 50px;
`;
const ImageContainer = styled.View`
    background-color: #D9D9D9;
    padding: 19px;
    border-radius: 50%;
`;
const ProfileImg = styled.Image`
    width: 23px;
    height: 25px;
    display: flex;
    align-items: center;
`;
const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    margin: 3px 0 0 10px;
`;
export default CallInfo;