import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();
export const Main = () => {
    return (

        <BottomTab.Navigator

            initialRouteName="Home"
            screenOptions={({ route }) => ({

                tabBarStyle: { backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused }) => {

                    if (route.name === "Home") {
                        return (
                            <>

                            </>
                        )
                    }
                    else {

                    }
                }
            })}
        >

            {/* Criar Rota Home  */}

            <BottomTab.Screen
                name="Home"
                component={Home}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
            />

            {/* Criar Rota Perfil  */}
        </BottomTab.Navigator>
    )
}