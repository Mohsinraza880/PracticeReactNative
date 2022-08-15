import {StyleSheet, View, TextInput, Button} from 'react-native';
import {useState} from 'react';

function GoalInput(props) {
    const [enteredGoalText,setEnteredGoalText] = useState('');
    function goalInputHanlder(enteredText) {
        setEnteredGoalText(enteredText)
      }

    function addGoalHandler(){
       // props.onAddGoal
       props.onAddGoal(enteredGoalText)
        setEnteredGoalText('');
    }
    return <View style = {styles.inputContainerNew}>
    <TextInput style = {styles.textInput} placeholder = 'Your course goal!' onChangeText={goalInputHanlder}
    value = {enteredGoalText}
    />
    <Button title = "Add Goal" onPress={addGoalHandler}/>
  </View>
};
export default GoalInput;

const styles = StyleSheet.create({

    textInput: {
        width: 1,
        borderColor: '#ffffff',
        width: '80%',
        marginLeft: 24,
        marginRight: 24,
        height: 40, borderColor: 'gray', borderWidth: 1 
      },
});