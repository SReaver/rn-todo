import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };


  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals,
    { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const cancelGoalAdditionalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem
          id={itemData.item.id}
          title={itemData.item.value}
          onDelete={removeGoalHandler}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    margin: 20,
    flex: 1,
    width: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
