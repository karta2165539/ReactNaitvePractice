import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  
  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
      <Image source={{ uri: selectMeal.imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetails 
        duration={selectMeal.duration} 
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectMeal.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={selectMeal.steps}/>
        </View>
      </View>
    </View>
    </ScrollView>
    
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom: 32
  }
  ,
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%',
  }
})