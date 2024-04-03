import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import styled from "styled-components";

import BackIcon from '../assets/icon/ic_backBtn.png';

const GoBackBtn = () => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.goBack()}>
            <BackBtn source={BackIcon}/>
        </Pressable>
    );
};
const BackBtn = styled.Image`
    width: 12px;
    height: 20px;
    justify-content: center;
`;
export default GoBackBtn;