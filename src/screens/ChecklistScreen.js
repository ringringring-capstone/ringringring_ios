import { SafeAreaView, Text } from "react-native";
import styled from "styled-components";
import MenuTitle from "../components/MenuTitle";
import Button from "../components/Button";
import { useState } from "react";

const Checklist = () => {
    const name = '홍길동';
    return (
        <Container>
            <Header>
                <MenuTitle text={'체크리스트'}/>
            </Header>
            <Body>
                <NoticeText>{name} 님은 아직 최근 결과가 없어요 😔</NoticeText>
                <Button
                    text={"검사하기"}
                    type={"main"}
                    movePage={"doingchecklist"}/>
            </Body>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    display: flex;
    flex: 1;
    align-items: center;
`;
const Header = styled.View`
    width: 100%;
`;
const Body = styled.View`
    /* flex: 1; */
    width: 87%;
    height: 615px;
    padding-bottom: 20px;
    justify-content: flex-end;
`;
const NoticeText = styled.Text`
    font-size: 20px;
    font-family: "IBMPlexSans-Bold";
    text-align: center;
    margin-bottom: 250px;
`;
export default Checklist;