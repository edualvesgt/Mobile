import MaterialIcons from 'react-native-vector-icons'
import { TextCardGray, TextCardGreen } from '../Text/Text';
import { CardGray, CardGreen } from './StyleStatus';


export const StatusGreen = ({time}) => {
    return (
        <CardGreen>
            <MaterialIcons
                name="clockcircle"
                size={14}
                color={"green"}
                />
            <TextCardGreen>{time}</TextCardGreen>
        </CardGreen>
    )
}

export const StatusGray = ({time}) => {
    return (
        <CardGray>
             <MaterialIcons
                name="clock"
                size={14}
                color={"gray"}
                />            
            <TextCardGray>{time}</TextCardGray>
        </CardGray>
    )
}