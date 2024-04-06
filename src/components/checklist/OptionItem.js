import { SafeAreaView } from "react-native";
import styled from "styled-components";
import palette from "../../styles/colorPalette";

import NotCheck from "../../assets/image/img_NotCheck.png";

const OptionItem = ({content}) => {
    return (
        <Container>
            <OptionText>{content}</OptionText>
            <CheckIconContainer>   
                <CheckIcon source={NotCheck}/>
            </CheckIconContainer>
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${palette.white};
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
    color: ${palette.black};
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
    background-color: ${palette.white};
    border: 1px solid ${palette.main};
    border-radius: 50%;
`;
const CheckIcon = styled.Image`
    /* margin-left: 4px;
    margin-top: 7px; */
`;
export default OptionItem;