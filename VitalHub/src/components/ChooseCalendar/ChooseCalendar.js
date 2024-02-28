import React from 'react';
import { LocaleConfig } from 'react-native-calendars';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { DayContainer, DayText } from './StyleCalendar'; // Importa os estilos do calendário

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
export default function ChooseCalendar({ selectedDate = '', handleSelectedDateFn = null }) {
    const currentDate = new Date().toUTCString(); // Define a data atual como a data mínima selecionável

    return (
        <Calendar
            minDate={currentDate} // Define a data mínima selecionável como a data atual
            monthFormat='MMMM yyyy' // Define o formato do mês exibido no calendário
            enableSwipeMonths={true} // Permite o deslize entre meses
            hideArrows={true} // Esconde as setas de navegação
            style={styles.calendar} // Aplica estilos ao calendário
            theme={{ // Define o tema do calendário
                dotColor: '#60BFC5', // Define a cor dos pontos indicando eventos
                calendarBackground: '#FBFBFB' // Define a cor de fundo do calendário
            }}
            dayComponent={({ date, state }) => ( // Componente personalizado para os dias

            // Esse trecho de código define como cada dia do calendário será renderizado visualmente e se comportará quando pressionado pelo usuário. O `onPress` verifica se o dia está habilitado para seleção e, se sim, chama uma função para lidar com a seleção da data.
                <TouchableOpacity onPress={() => {
                    if (state == 'disabled') // Verifica se o dia está desabilitado
                        return;

                    handleSelectedDateFn(date.dateString) // Chama a função de seleção de data ao pressionar um dia
                }}>
                    <DayContainer isSelected={date.dateString == selectedDate}> {/*Conatiner Dia  */}
                        {/* <DayText isSelected={date.dateString == selectedDate} isDisabled={state == 'disabled'}>{date.day}</DayText> Texto Dia  */}
                    </DayContainer>
                </TouchableOpacity>
            )}
        />
    )
}

// Estilos do componente
const styles = StyleSheet.create({
    calendar: {
        width: "100%", // Define a largura do calendário 
    }
});
