import { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView, ScrollView } from "react-native";
import { getStorage } from "../librarys/storage";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import ReuseText from "../components/ReuseText";
import Button from "../components/Button";
import SeverityLevel from "../components/checklist/SeverityLevel";
import StatusDesc from "../components/checklist/StatusDesc";
import DailyPractice from "../components/checklist/DailyPractice";
import AllUsers from "../components/checklist/AllUsers";

const Checklist = () => {
    const [name, setName] = useState("");
    const [score, setScore] = useState(0);

    const getUserInfo = async () => {
        const storageName = await getStorage("username");
        const storageScore = await getStorage("score");
        setName(storageName);
        setScore(storageScore);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    // 해당 컴포넌트가 포커스될 때
    useFocusEffect(() => {
        getUserInfo();
    });

    return (
        <Container>
            <Header>
                <ReuseText text={"체크리스트"} type={"title"}/>
            </Header>
            <Body>
                {score ? (
                    <SubContainer>
                        <ReuseText 
                            text={`${name} 님은 현재 ..`} 
                            type={"subtitle"}
                            style={{marginTop: 15, marginLeft: 28}}/>
                        <SeverityLevel score={score}/>
                        <MenuContainer>
                            <ReuseText 
                                text={"🧐 이런 적 있지 않았나요?"} 
                                type={"subtitle"}
                                style={{marginTop: 15, marginLeft: 28}}/>
                            <Line/>
                        </MenuContainer>
                        <StatusDesc/>
                        <ReuseText 
                            text={`👥 ${name} 님과 비슷한 사람들은?`} 
                            type={"subtitle"}
                            style={{marginTop: 15, marginLeft: 28}}/>
                        <ReuseText
                            text={"전체 이용자 중에서 이만큼 있어요!"}
                            type={"content"}
                            style={{marginTop: 10, marginLeft: 28}}/>
                        <AllUsers score={score}/>
                        <ReuseText
                            text={"하루 평균 이정도 연습하고 있어요!"}
                            type={"content"}
                            style={{marginTop: 15, marginLeft: 28}}/>
                        <DailyPractice/>
                    </SubContainer>
                ) : (
                    <ReuseText
                        text={`${name} 님은 아직 최근 결과가 없어요 😔`}
                        type={"subtitle"}
                        style={{textAlign: "center", marginBottom: 250}}/>
                )}
                <ButtonContainer>
                    <Button
                        text={"검사하기"}
                        backgroundColor={palette.main}
                        borderColor={"none"}
                        fontColor={palette.white}
                        event={"movePage"}
                        movePage={"doingchecklist"}/>
                </ButtonContainer>
            </Body>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    display: flex;
    flex: 1;
    align-items: center;
    background-color: ${palette.white};
`;
const Header = styled.View`
    width: 100%;
`;
const Body = styled.View`
    width: 100%;
    height: 615px;
    padding-bottom: 20px;
    justify-content: flex-end;
`;
const SubContainer = styled(ScrollView)`
    flex: 10;
    width: 100%;
`;
const MenuContainer = styled.View`
    display: flex;
    flex-direction: row;
`;
const Line = styled.View`
    display: flex;
    width: 29%;
    height: 0.6px;
    background-color: ${palette.black};
    margin: 29px 0 0 13px;
`;
const ButtonContainer = styled.View`
    width: 87%;
    margin: 0 auto;
`;
export default Checklist;