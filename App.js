                import { StatusBar } from 'expo-status-bar';
                import { useState } from 'react';
                import { StyleSheet, View, FlatList, Button} from 'react-native';
                import GoalItem from './components/GoalItem';
                import GoalInput from './components/GoalInput';
                
                export default function App() {
                    const [modelIsVisible, setModelIsVisible] = useState(false);
                    const [courseGoal,setCourseGoal] = useState([])
                    
                    function startAddGoaldHandler(){
                        setModelIsVisible(true);
                    } 
                    function addGoalHandler(enteredGoalText) {
                        setCourseGoal(currentCourseGoal =>[...courseGoal,
                            {text: enteredGoalText, id: Math.random.toString}]);
                        }
                        function deleteItem(id){
                            setCourseGoal(currentCourseGoal => {
                                return currentCourseGoal.filter((goal) => goal.id !== id);
                            });
                        }
                        return (
                            <View style = {styles.appContainer}>
                            <Button title ='Add New Goal' color={'#5e0acc'} style 
                            onPress={startAddGoaldHandler}/>
                            {modelIsVisible && <GoalInput visible = {modelIsVisible} onAddGoal = {addGoalHandler}/>}
                            <View  style={styles.goalsContainter}>
                            <FlatList data={courseGoal} renderItem = {(itemData) => {
                                return (
                                    <GoalItem text = {itemData.item.text} 
                                    id = {itemData.item.id}
                                    onDeleteItem = {deleteItem}/>
                                    );
                                }}
                                keyExtractor = {(item, index) =>{
                                    return item.id;
                                }}
                                alwaysBounceVertical = {false}
                                />
                                
                                
                                </View>
                                {/* <Text style = {styles.dummyText}>Welcome To React Native!</Text>
                                <Text style = {styles.dummyText}>Another text will be here</Text>
                            <Button title = "Tap Me!"></Button> */}
                            <StatusBar style="auto" />
                            </View>
                            );
                        }
                        
                        const styles = StyleSheet.create({
                            appContainer: {
                                flex: 1,
                                paddingTop: 50,
                            },
                            goalsContainter: {
                                flex: 5
                            }
                            
                            // inputContainerNew: {
                            //   borderLeftWidth: 4,
                            //   borderRightWidth: 4,
                            //   height: 70
                            //}
                            // container: {
                            //   flex: 1,
                            //   backgroundColor: '#fff',
                            //   alignItems: 'center',
                            //   justifyContent: 'center',
                            //   fontSize: '20',
                            //   fontWeight: 'bold'
                            // },
                            // dummyText: {
                            //   margin: 16,
                            //   padding: 16,
                            //   borderWidth: 2,
                            //   borderColor: 'red'
                            // }
                        });
                        