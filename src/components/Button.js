import styled from "styled-components";
import palette from "../styles/colorPalette";
import { useNavigation } from "@react-navigation/native";

const Button = ({ 
    text, 
    backgroundColor, 
    borderColor, 
    fontColor,
    movePage, 
    props 
}) => {
    const navigation = useNavigation();
    
    return (
        <Container 
            backgroundColor={backgroundColor}
            borderColor={borderColor}
            topCheck={text}
            onPress={() => navigation.navigate(movePage, props)}>
            <BtnText fontColor={fontColor}>{text}</BtnText>
        </Container>
    );
};
const Container = styled.Pressable`
    width: 100%;
    height: 51px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 20px;
    border: ${(props) => props.borderColor};
    margin-top: ${(props) => (props.topCheck === '로그인') ? 
        '25px' : '8px'
    };
`;
const BtnText = styled.Text`
    color: ${(props) => props.fontColor};
    font-size: 17px;
    text-align: center;
    font-family: "IBMPlexSans-Bold";
`;
export default Button;