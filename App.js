import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);



  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
      </View>
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} onDelete={() => { console.log('This works!!') }} />}
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
