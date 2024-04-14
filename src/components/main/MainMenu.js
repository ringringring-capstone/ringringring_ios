import styled from "styled-components";
import palette from "../../styles/colorPalette";

import callPractice1 from "../../assets/icon/main/ic_callPractice1.png";
import callPractice2 from "../../assets/icon/main/ic_callPractice2.png";
import callPractice3 from "../../assets/icon/main/ic_callPractice3.png";
import Mission from "../../assets/icon/main/ic_mission.png";

const MainMenu = () => {
    const Menulist = [
        { id: 1, src: callPractice1, content: "예약전화" },
        { id: 2, src: callPractice2, content: "배달전화" },
        { id: 3, src: callPractice3, content: "상담전화" },
        { id: 4, src: Mission, content: "미션도전" }
    ];

    return (
        <Container>
            {Menulist.map((item) => (
                <MenuItem key={item.id}>
                    <ItemIcon source={item.src}/>
                    <ItemContent>{item.content}</ItemContent>
                </MenuItem>
            ))}
        </Container>
    );
};
const Container = styled.View`
    background-color: ${palette.white};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;
const MenuItem = styled.Pressable`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
`;
const ItemIcon = styled.Image`
    width: 40px;
    height: 40px;
`;
const ItemContent = styled.Text`
    font-size: 12px;
    font-family: "IBMPlexSans-Regular";
    color: ${palette.black};
`;
export default MainMenu;