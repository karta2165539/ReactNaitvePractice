import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode]= useState(false);
  
  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { uid: Math.random().toString(), value: goalTitle}]);

    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal) => goal.uid !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };


  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <GoalInput onCancel={cancelGoalHandler} visible={isAddMode} onAddGoal= {addGoalHandler}/> 
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={courseGoals}
        renderItem={itemData => 
        <GoalItem 
          id={itemData.item.uid} 
          onDelete={removeGoalHandler} 
          title = {itemData.item.value} />
        }>
      </FlatList> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// <View
//         style={{
//           backgroundColor: 'red',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//         <Text>
//           1
//         </Text>  
//       </View>
//       <View
//         style={{
//           backgroundColor: 'blue',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//         <Text>
//           2
//         </Text>  
//       </View>
//       <View
//         style={{
//           backgroundColor: 'green',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}>
//         <Text>
//           3
//         </Text>  
//       </View>
