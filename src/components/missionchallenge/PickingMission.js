import { useState } from "react";
import styled from "styled-components";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import palette from "../../styles/colorPalette";

import GoBackBtn from "../GoBackBtn";
import Button from "../Button";
import ReuseText from "../ReuseText";
import MissionTopicBox from "./MissionTopicBox";

const PickingMission = () => {
    const Navigation = useNavigation();
    const [mission, setMission] = useState("");
    const missionList = ["짜장면 배달", "상담 예약", "고깃집 에약", "회사 상사와 얘기", "짬뽕 배달"];

    const randomMission = () => {
        const result = missionList[Math.floor(Math.random() * missionList.length)];
        setMission(result);
        console.log(result);
    }

    return (
        <Container>
            <Header>
                <GoBackBtn/>
            </Header>
            <Body>
                <ReuseText text="전화 미션" type="title"/>
                <ReuseText 
                    text={`다양한 상황을 겪으며 \n한 층 더 성장할 수 있어요.`}
                    type={"more"}
                    color={palette.black}
                    fontsize={"20px"}
                    fontfamily={"IBMPlexSans-Light"}
                    style={{marginTop: 15, marginLeft: 28}}/>
                <MissionTopicBox topic={mission}/>
            </Body>
            <Footer>
                <Button
                    text="미션 시작하기"
                    backgroundColor={palette.main}
                    borderColor="none"
                    fontColor={palette.white}
                    event={"movePage"}
                    movePage={"callpractice"}
                    props={"mission"}/>
                <Button
                    text={mission ? "다시 뽑기" : "주제 뽑기"}
                    backgroundColor={palette.white}
                    borderColor={palette.main}
                    fontColor={palette.main}
                    event={randomMission}/>
            </Footer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${palette.white};
`;
const Header = styled.View`
    flex: 1;
    width: 100%;
    align-items: left;
    justify-content: center;
    padding-left: 28px;
`;
const Body = styled.View`
    flex: 9;
    width: 100%;
`;
const Footer = styled(SafeAreaView)`
    flex: 2;
    width: 91%;
    height: 400px;
    margin: 20px 20px 0 20px;
    align-items: center;
    background-color: ${palette.white};
`;
export default PickingMission;