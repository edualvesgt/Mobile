import { AntDesign } from '@expo/vector-icons'
import { TextAbout, TextAccount, TextYellow } from "../Text/Text"
import { AllStatusBox, CardBoxClinic, TextCardBox } from "./StyleCardClinic"
import { Text, View } from 'react-native'

const CardClinic = () => {
    return (
        <CardBoxClinic>
            
                <TextCardBox>
                    <TextAccount>Clina Natureba</TextAccount>
                    <TextAbout>Sao Paulo SP </TextAbout>
                </TextCardBox>

                <AllStatusBox>
                    <View style = {{flexDirection: "row", alignItems:"center"}}>
                    <AntDesign
                        name="star"
                        size={20}
                        color={"#F9A620"}
                    />
                   <TextYellow>4.5</TextYellow>
                    </View>
                </AllStatusBox>
           
        </CardBoxClinic>
    )

}

export default CardClinic;
