import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
export default GoalInput = (props) => {

  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Course goal" style={styles.input}
        onChangeText={goalInputHandler} />
      <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
});
