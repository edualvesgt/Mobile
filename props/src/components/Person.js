import { StyleSheet, Text, View } from "react-native";
//Componente Person

//Props: Name e Age
const Person = ({ name, age }) => {
    return (

        <View style={styles.container}>
            <Text style = {styles.text}>Name: {name} </Text>
            <Text style = {styles.text}>Age: {age} </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#e0e0e0",
        padding: 10,
        margin: 10,
        borderRadius:5
    },
    text:{
       textTransform: "uppercase",
       color:"purple"
    }
})

export default Person;