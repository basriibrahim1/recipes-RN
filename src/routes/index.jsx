import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/auth/login'
import Register from '../screens/auth/register'
import Home from '../screens/home/home'
import Profile from '../screens/profile/userProfile'
import insertMenu from '../screens/recipes/insertRecipes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MyRecipe from '../screens/recipes/myRecipes'
import PopularRecipes from '../screens/recipes/popularRecipes'
import DetailRecipes from '../screens/recipes/detailRecipes'
import { useSelector } from 'react-redux'
import EditRecipes from '../screens/recipes/editRecipes'
import SearchScreen from '../screens/home/search'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


const TabNavigator = () => {
  return (
    <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={({route}) => ({
            tabBarActiveTintColor: 'orange',
            tabBarLabel:'null',
            headerShown:false,
            tabBarShowLabel:false,
            tabBarIcon: ({focused, color}) => {
                let IconName;
                let rn = route.name

                if(rn === "Home"){
                    IconName = focused ? 'home' : 'home-outline'
                } else if(rn === "InsertMenu"){
                    IconName = focused ? 'add-circle' : 'add-outline'
                } else if(rn === 'Recipes') {
                    IconName = focused ? "list" : "list-outline"
                } else if(rn === "UserProfile"){
                    IconName = focused ? "person" : "person-outline"
                }

                return <Ionicons name={IconName} size={30} color={color} />
            } 
        })}>

      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="InsertMenu" component={insertMenu}/>
      <Tab.Screen name="Recipes" component={MyRecipe}/>
      <Tab.Screen name="UserProfile" component={Profile}/>
    </Tab.Navigator>
  )
}

const Routes = () => {
    const auth = useSelector(state => state.login)
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='TabNavigator'
        screenOptions={{
          headerShown: false
        }}
      >
      {auth.data ? 
        <>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="Popular" component={PopularRecipes} options={{headerShown:true, title:'Popular Recipes'}}/>
            <Stack.Screen name="Detail" component={DetailRecipes} options={{headerShown:true, title:'Detail Recipes'}}/>
            <Stack.Screen name="EditRecipes" component={EditRecipes} options={{headerShown:true, title:'Edit Recipes',}}/>
            <Stack.Screen name="Search" component={SearchScreen}/>
        </>
        :
        <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </>
      }
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
