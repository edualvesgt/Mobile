import { Container } from "../../components/Container/StyleContainer"
import { HeaderContainer, HeaderContent, HeaderPhoto } from "../../components/HeaderPhoto/HeaderPhoto"
import { ContainerForm, ScrollForm } from "./StyleProfile"

export const Profile = ({ navigate }) => {

    return (
        <ScrollForm>
            <Container>
                <HeaderContainer>
                    <HeaderPhoto source={require("../../assets/PhotoProfile.png")}/>
                </HeaderContainer>
            </Container>
        </ScrollForm>
    )
}