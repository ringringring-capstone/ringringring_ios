import { SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { setStorage, getStorage, removeStorage } from "../../librarys/storage";

import palette from "../../styles/colorPalette";

import GoBackBtn from "../GoBackBtn";
import NoticeBox from "./NoticeBox";
import ConverHistoryList from "../converhistory/ConverHistoryList";

const ConverHistory = () => {
    const [isClick, setIsClick] = useState(false);
    const [callConversation, setCallConversation] = useState([]);
    const [selectIndex, setSelectIndex] = useState();

    useEffect(() => {
        const userCallHistory = async () => {
            try {
                const storageHistory = await getStorage("callHistory");
                setCallConversation(storageHistory);
            } catch (error) {
                console.error(error);
            }
        };
        userCallHistory();
    }, []);

    const handleRemoveItem = async (idx) => {
        try {
            const updatedConversation = [...callConversation];
            updatedConversation.splice(idx, 1);
            setCallConversation(updatedConversation);
            await removeStorage("callHistory");
            await setStorage("callHistory", updatedConversation);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <Header>
                <GoBackBtn/>
            </Header>
            <Body>
                <ConverHistoryList 
                    callConversation={callConversation}
                    setIsClick={setIsClick}
                    setSelectIndex={setSelectIndex}/>
            </Body>
            {isClick && 
                <NoticeBox 
                    onConfirm={() => {
                        handleRemoveItem(selectIndex);
                        setIsClick(false);
                    }}
                    onCancel={() => setIsClick(false)}/>
            }
        </Container>
    );
};
const Container = styled(SafeAreaView)`
    flex: 1;
    width: 100%;
    background-color: ${palette.white};
`;
const Header = styled.View`
    flex: 1;
    width: 100%;
    align-items: left;
    justify-content: center;
    padding-left: 28px;
`;
const Body = styled.View`
    flex: 10;
    width: 100%;
`;
export default ConverHistory;