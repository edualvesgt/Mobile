import { DoctorPhoto } from "../Logo/StyleLogo";
import { DataUser, HeaderBox, HeaderContainer, HeaderContent, NameUser, TextDefault, TextHeader } from "./StyleHeader";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export function Header() {
    return (


        <HeaderContainer>
            <HeaderBox>
                <DoctorPhoto source={require("../../assets/PhotoProfile.png")} />
                <DataUser>
                    <TextDefault>Bem Vindo </TextDefault>
                    <NameUser>Dr Eduardo</NameUser>
                </DataUser>
            </HeaderBox>
            <MaterialIcons
                name="notifications"
                size={30}
                color="#FBFBFB" 
                style={{ marginTop: "22%",marginRight: 20 }}
                />
        </HeaderContainer>
    )
}