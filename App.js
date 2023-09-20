import { useState } from 'react';
import { Alert, Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [data, setData] = useState("");
  const [goalData, setGoalData] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const addButtonHandler = (data) => {
    // console.log(data)
    setGoalData((goalData) => [...goalData, {text: data, id: Math.random().toString()}])
    setIsModalOpen(false)
  }

  const handleDelete = (itemId) => {
    // console.log("delete", itemId)
    const deleteData = goalData?.filter(item => item?.id !== itemId)
    setGoalData(deleteData)
  }
  // console.log(goalData) 
  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
      <Button title='Add Daily Goal' color="#5e0acc" onPress={()=>setIsModalOpen(true)}/>
      {isModalOpen && <GoalInput onButtonClick={addButtonHandler} data={data} setData={setData} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
      <View style={styles.goalsContainer}>
        <FlatList data={goalData} renderItem={(itemData) => {
          return <GoalItem handleDelete={handleDelete} goalId={itemData?.item} goalText={itemData?.item?.text}/>
        }} 
        alwaysBounceVertical={false} 
        keyExtractor={(item, index) => {return item?.id}}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  addInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 6,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: "white"
  }
});
