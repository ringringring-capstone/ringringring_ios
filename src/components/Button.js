import styled from "styled-components";
import palette from "../styles/colorPalette";

const Button = ({ text, type }) => {
    return (
        <Container 
            type={type}
            topCheck={text}>
            <BtnText type={type}>{text}</BtnText>
        </Container>
    );
};
const Container = styled.View`
    width: 83%;
    height: 51px;
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
    font-size: 15px;
    text-align: center;
    margin-top: 16px;
`;
export default Button