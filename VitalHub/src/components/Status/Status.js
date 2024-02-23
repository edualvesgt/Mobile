import {AntDesign} from '@expo/vector-icons'
import { TextCardGray, TextCardGreen } from '../Text/Text';
import { CardGray, CardGreen } from './StyleStatus';


export const StatusGreen = ({time}) => {
    return (
        <CardGreen>
            <AntDesign
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
             <AntDesign
                name="clockcircle"
                size={14}
                color={"gray"}
                />            
            <TextCardGray>{time}</TextCardGray>
        </CardGray>
    )
}
export const StatusCalendar = ({time}) => {
    return (
        <CardGray>
             <AntDesign
                name="clockcircle"
                size={14}
                color={"gray"}
                />            
            <TextCardGray>{time}</TextCardGray>
        </CardGray>
    )
}