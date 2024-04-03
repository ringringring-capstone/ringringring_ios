import styled from "styled-components";
import palette from "../styles/colorPalette";

import ShowIcon from "../assets/icon/ic_showPassword.png";
import HideIcon from "../assets/icon/ic_hidePassword.png";
import { useState } from "react";

const Input = ({ 
    state, 
    setState, 
    placeholder, 
    isPassword, 
    pwHide,
    setPwHide,
    marginTop 
}) => {
    const onClickPwHide = () => {
        setPwHide(!pwHide);
    };

    const onChange = (inputText) => {
        setState(inputText);
    }

    return (
        <>
            <TextInput
                value={state}
                onChangeText={onChange}
                placeholder={placeholder}
                secureTextEntry={(isPassword && !pwHide) ? true : false}
                style={marginTop}
            />
            <IconContainer onPress={onClickPwHide}>
                {(state.length > 0 && isPassword) ? (
                    <PwShowOrHideIcon
                        source={pwHide ? ShowIcon : HideIcon}
                    />
                ) : null}
            </IconContainer>
        </>
    );
};
const TextInput = styled.TextInput`
    position: relative;
    width: 100%;
    height: 44px;
    border-radius: 20px;
    border: 1px solid #F0F0F0;
    background-color: ${palette.white};
    padding: 3px 15px;
    margin-top: ${(props) => (props.style)};
    font-family: "IBMPlexSans-Regular";
`;
const IconContainer = styled.Pressable`
    height: 0px;
    bottom: 30px;
`;
const PwShowOrHideIcon = styled.Image`
    left: 305px;
    width: 17px;
    height: 17px;
`;
export default Input;