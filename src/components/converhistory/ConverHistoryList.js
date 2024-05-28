import styled from "styled-components";
import { ScrollView } from "react-native";
import palette from "../../styles/colorPalette";
import InfoBox from "../InfoBox";
import ConverHistoryItem from "./ConverHistoryItem";

const ConverHistoryList = ({setIsClick}) => {
    return (
        <Container>
            <SubContainer>
                {CallConversation.map((item, idx) => (
                    <ConverHistoryItem
                        key={idx}
                        title={item.title}
                        content={item.content}
                        setIsClick={setIsClick}
                    />
                ))}
            </SubContainer>
        </Container>
    );
};
const Container = styled(ScrollView)`
    width: 100%;
    flex: 1;
    overflow-y: scroll;
    background-color: ${palette.white};
`;
const SubContainer = styled.View`
    display: flex;
    align-items: center;
`;
export default ConverHistoryList;