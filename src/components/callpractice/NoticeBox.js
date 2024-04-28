import styled from "styled-components";
import palette from "../../styles/colorPalette";
import { useNavigation } from "@react-navigation/native";

import ReuseText from "../ReuseText";

const NoticeBox = ({setIsClick, text, time}) => {
    const navigation = useNavigation();

    const handleClick = (type) => {
        if (type === "yes") {
            navigation.navigate("callpracticeresult", {time});
        }
        setIsClick(false);
    }
    
    return (
        <Container>
            <BoxContainer>
                <TextContainer>
                    <ReuseText
                        text={"통화를 종료 하시겠습니까?"}
                        type={"more"}
                        fontsize={"18px"}
                        fontfamily={"IBMPlexSans-Regular"}
                        color={palette.black}
                    />
                </TextContainer>
                <ButtonContainer>
                    <ButtonItemContainer 
                        type="main"
                        onPress={() => handleClick("yes")}>
                        <BtnText type="main">확인</BtnText>
                    </ButtonItemContainer>
                    <ButtonItemContainer 
                        type="sub"
                        onPress={() => handleClick("no")}>
                        <BtnText type="sub">취소</BtnText>
                    </ButtonItemContainer>
                </ButtonContainer>
            </BoxContainer>
        </Container>
    );
};
const Container = styled.View`
    position: absolute;
    background-color: rgba(14, 14, 14, 0.16);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const BoxContainer = styled.View`
    width: 87%;
    height: 20%;
    background-color: ${palette.white};
    display: flex;
    border-radius: 20px;
`;
const TextContainer = styled.View`
    margin: 20px 0 0 18px;
`;
const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 65px;
    margin-left: 120px;
    margin-right: 20px;
`;
const ButtonItemContainer = styled.Pressable`
    background-color: ${(props) => (props.type === "main") ? `${palette.main}` : `${palette.white}`};
    border-radius: 20px;
    border: ${(props) => (props.type === "main") ? "none" : `${palette.main}`};
    padding: 6px 35px;
    margin-top: 5px;
    margin-right: ${(props) => (props.type === "main") ? "8px" : ""};
`;
const BtnText = styled.Text`
    color: ${(props) => (props.type === "main") ? `${palette.white}` : `${palette.main}`};
    font-size: 17px;
    text-align: center;
    font-family: "IBMPlexSans-Bold";
`;
export default NoticeBox;