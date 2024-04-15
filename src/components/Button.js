import styled from "styled-components";
import palette from "../styles/colorPalette";
import { useNavigation } from "@react-navigation/native";

const Button = ({ text, type, movePage, props }) => {
    const navigation = useNavigation();
    return (
        <Container 
            type={type}
            topCheck={text}
            onPress={() => navigation.navigate(movePage, props)}>
            <BtnText type={type}>{text}</BtnText>
        </Container>
    );
};
const Container = styled.Pressable`
    width: 100%;
    height: 51px;
    display: flex;
    justify-content: center;
    background-color: ${(props) => (props.type === 'main') ?
     `${palette.main}` : `${palette.white}`
    };
    border-radius: 20px;
    border: ${(props) => (props.type === 'main') ?
      'none' : `1px solid ${palette.main}`
    };
    margin-top: ${(props) => (props.topCheck === '로그인') ? 
        '25px' : '8px'
    };
`;
const BtnText = styled.Text`
    color: ${(props) => (props.type === 'main') ?
     `${palette.white}` : `${palette.main}`
    };
    font-size: 17px;
    text-align: center;
    font-family: "IBMPlexSans-Bold";
`;
export default Button;