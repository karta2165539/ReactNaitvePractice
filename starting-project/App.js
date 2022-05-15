import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screen/CategoriesScreen';
import MealsOverviewScreen from './screen/MealsOverviewScreen';
import MealDetailScreen from './screen/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#f7752b' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#e2b091' }
          }}
        >
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen} 
            options={{
              title: 'All Categories',
            }} 
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name='MealDetails'
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {}
});
