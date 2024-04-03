import styled from "styled-components";
import palette from "../styles/colorPalette";

const Input = ({ 
    state, 
    setState, 
    placeholder, 
    isPassword, 
    marginTop 
}) => {

    const onChange = (inputText) => {
        setState(inputText);
    }

    return (
        <TextInput
            value={state}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={(isPassword ? true : false)}
            style={marginTop}
        />
    );
};
const TextInput = styled.TextInput`
    width: 325px;
    height: 44px;
    border-radius: 20px;
    border: 1px solid #F0F0F0;
    background-color: ${palette.white};
    padding: 3px 15px;
    margin-top: ${(props) => (props.style)};
    font-family: "IBMPlexSans-Regular";
`;
export default Input;