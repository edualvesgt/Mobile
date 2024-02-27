import { CardBox, CardBoxSelected, ImageCard, TextCardBox } from "../Card/StyleCard"
import { Container } from "../Container/StyleContainer"
import { TextAbout, TextAccount } from "../Text/Text"

const CardDoctor = ({ image, name, field, select, onPress }) => {
    const imageLink ="https://blog.maxtitanium.com.br/wp-content/uploads/2024/01/ramon-dino-fisiculturista-profissional-atleta-max-titanium-2.jpg"; // URL da imagem

    if (select !== name) {
        return (

            <CardBox onPress ={onPress}>
                <ImageCard source={{ uri: imageLink }} />
                <Container>

                    <TextCardBox>
                        <TextAccount>{name}</TextAccount>
                        <TextAbout>{field} </TextAbout>
                    </TextCardBox>

                </Container>


            </CardBox>
        )

    } else {
        return (
            <CardBoxSelected>
            <ImageCard source={image} />
            <Container>
    
                <TextCardBox>
                    <TextAccount>{name}</TextAccount>
                    <TextAbout>{field} </TextAbout>
                </TextCardBox>
    
            </Container>
        </CardBoxSelected>
        )
    }

}

export default CardDoctor