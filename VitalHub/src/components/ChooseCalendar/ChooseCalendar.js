import React, { useState } from 'react';
import { LocaleConfig } from 'react-native-calendars';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

// Configuração de localização para o idioma inglês
LocaleConfig.locales['en'] = {
    monthNames: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ],
    monthNamesShort: ['Jan.', 'Feb.', 'Mar', 'Apr', 'May', 'Jun', 'Jul.', 'Aug', 'Sep.', 'Oct.', 'Nov.', 'Dev.'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
    today: "Today"
};

// Define o idioma padrão como inglês
LocaleConfig.Locales = 'en';

// Componente funcional ChooseCalendar
const ChooseCalendar = () => {
    // Estado para armazenar a data selecionada
    const [selected, setSelected] = useState('')

    return (
        <Calendar
            style={{
                width: 350,
                backgroundColor: 'white',
                marginBottom:5,
            }}
            // Função para atualizar a data selecionada quando um dia é pressionado
            onDayPress={day => {
                setSelected(day.dateString);
            }}
            // Oculta as setas de navegação do calendário
            hideArrows={true}

            // Personalização do tema do calendário
            theme={{
                selectedDayBackgroundColor: '#49B3BA',
                selectedDayTextColor: '#FFFFFF',
                dayBackgroundColor: 'transparent'
            }}

            // Marcadores para a data selecionada
            markedDates={{
                [selected]: { selected: true, disableTouchEvent: true }
            }}
        />
    )
}

// Exporta o componente ChooseCalendar como padrão
export default ChooseCalendar;
