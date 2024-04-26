import { useState } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components";

import palette from "../../styles/colorPalette";

import Button from "../Button";
import GoBackBtn from "../GoBackBtn";
import OptionList from "./OptionList";

const DoingChecklist = () => {
    const [score, setScore] = useState(0);
    return (
        <Container>
            <Header>
                <GoBackBtn/>
            </Header>
            <Body>
                <NoticeText>
                    아래 항목 중, 해당되는 상태가 있다면{"\n"}
                    체크해주세요.
                </NoticeText>
                <OptionList score={score} setScore={setScore}/>
            </Body>
            <Footer>
                <Button
                    text={"결과 확인하기"}
                    backgroundColor={palette.main}
                    borderColor={"none"}
                    fontColor={palette.white}
                    movePage={"checklistresult"}
                    props={{score}}
                />
            </Footer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${palette.white};
    display: flex;
    align-items: center;
`;
const Header = styled.View`
    flex: 1;
    width: 100%;
    align-items: left;
    justify-content: center;
    padding-left: 28px;
`;
const Body = styled.View`
    flex: 10;
    width: 87%;
`;
const Footer = styled(SafeAreaView)`
    flex: 1;
    width: 91%;
    height: 400px;
    margin: 20px 20px 0 20px;
    align-items: center;
    background-color: ${palette.white};
`;
const NoticeText = styled.Text`
    font-size: 18px;
    font-family: "IBMPlexSans-Bold";
    color: ${palette.black};
    margin-top: ${(props) => props.plusStyle ? '35px' : '10px'};
`;
export default DoingChecklist;