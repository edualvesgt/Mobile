
import { Button, ButtonTitle } from "../Button/Button";
import { LinkCancel } from "../Links/StyleLink";
import { TextAbout } from "../Text/Text";
import { Title } from "../Title/StyleTitle";
import { PhotoShow, ShowModalContainer, ShowModalContent } from "./StyleShowFormDoctor";


const ShowFormDoctor = ({ isOpen, onClose, navigation }) => {

    const image = require("../../assets/PhotoGirl.png");

    if (!isOpen) {
        return null;
    }




    return (
        <ShowModalContainer>
            <ShowModalContent>

                <PhotoShow source={image} />

                 <Title>Niccole Sarga </Title>
                <TextAbout>22 Anos    niccole.sarga@gmail.com</TextAbout>
                
                <Button onPress={() => navigation.navigate('FormDoctor')}>
                    <ButtonTitle>Inserir Prontuario</ButtonTitle>
                </Button>

                <LinkCancel onPress={onClose} >Cancelar</LinkCancel>
            </ShowModalContent>
        </ShowModalContainer>
    );

};

export default ShowFormDoctor;
