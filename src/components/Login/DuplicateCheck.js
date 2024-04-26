import styled from "styled-components";
import { useState } from "react";
import palette from "../../styles/colorPalette";
import CheckIcon from "../../assets/icon/ic_check.png";

const DuplicateCheck = () => {
    const [click, setClick] = useState(false);

    const clickBtn = () => {
        setClick(!click);
    }

    return (
        <Container>
            <CheckContainer 
                onPress={clickBtn}
                click={click}>
                <Icon source={CheckIcon}/>
            </CheckContainer>
            <CheckText>자동 로그인</CheckText>
        </Container>
    );
};
const Container = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    margin-top: 15px;
`;
const CheckContainer = styled.Pressable`
    width: 19px;
    height: 19px;
    border-radius: 5px;
    border: 1px solid #F0F0F0;
    background-color: ${(props) => (props.click) ? `${palette.main}` : `${palette.white}`};
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Icon = styled.Image`
    width: 11px;
    height: 7px;
`;
const CheckText = styled.Text`
    font-size: 15px;
    font-family: "IBMPlexSans-Regular";
    color: #818181;
    margin-left: 7px;
`;
export default DuplicateCheck;