import { DoctorPhoto } from "../Logo/StyleLogo";
import { HeaderBox, HeaderContainer, HeaderContent, TextHeader } from "./StyleHeader";

export function Header() {
    return (
      

        <HeaderContainer>
           <HeaderBox>
            <DoctorPhoto  source={require("../../assets/PhotoProfile.png")}/>
            <DataUser>
                <TextDefault>Bem Vindo </TextDefault>
                <NameUser> Dr Eduardo</NameUser>
            </DataUser>
           </HeaderBox>
        </HeaderContainer>
    )
}