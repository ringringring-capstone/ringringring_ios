import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getStorage } from "../librarys/storage";
import styled from "styled-components";
import palette from "../styles/colorPalette";

import ReuseText from "../components/ReuseText";
import Button from "../components/Button";

const Checklist = () => {
    const [name, setName] = useState("");

    useEffect(() => {
        const getName = async () => {
            const storageName = await getStorage("username");
            setName(storageName);
        };
        getName();
    }, []);

    return (
        <Container>
            <Header>
                <ReuseText text={"체크리스트"} type={"title"}/>
            </Header>
            <Body>
                <ReuseText
                    text={`${name} 님은 아직 최근 결과가 없어요 😔`}
                    type={"subtitle"}
                    style={{textAlign: "center", marginBottom: 250}}/>
                <Button
                    text={"검사하기"}
                    backgroundColor={palette.main}
                    borderColor={"none"}
                    fontColor={palette.white}
                    event={"movePage"}
                    movePage={"doingchecklist"}/>
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
    width: 87%;
    height: 615px;
    padding-bottom: 20px;
    justify-content: flex-end;
`;
export default Checklist;