import styled from "styled-components";
import palette from "../../styles/colorPalette";

const NoticeBox = ({onConfirm, onCancel}) => {
    return (
        <Container>
            <BoxContainer>
                <TextContainer>
                    <NoticeText type="main">
                        통화 기록을 삭제 하시겠습니까?
                    </NoticeText>
                    <NoticeText type="sub">
                        삭제된 기록은 복구할 수 없습니다.
                    </NoticeText>
                </TextContainer>
                <ButtonContainer>
                    <ButtonItemContainer 
                        type="main"
                        onPress={onConfirm}>
                        <BtnText type="main">확인</BtnText>
                    </ButtonItemContainer>
                    <ButtonItemContainer 
                        type="sub"
                        onPress={onCancel}>
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
    margin-top: 37px;
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
const NoticeText = styled.Text`
    font-size: ${(props) => (props.type === "main") ? "18px" : "16px"};
    font-family: ${(props) => (props.type === "main") ? "IBMPlexSans-Medium" : "IBMPlexSans-Regular"};;
    color: ${palette.black};
    margin-bottom: ${(props) => props.type === "main" ? "5px" : ""};
`;
export default NoticeBox;