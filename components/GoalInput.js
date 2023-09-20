import { View, Text, StyleSheet, TextInput, Button, Modal, Image } from 'react-native'
import React, { useState } from 'react'
const goalImage = require("../assets/images/goal.png")

const GoalInput = ({onButtonClick, isModalOpen, setIsModalOpen}) => {
    const [data, setData] = useState("");
    
    const handleTextChange = (e) => {
        setData(e)
      }
    
    const addGoalHandler = () => {
        onButtonClick(data)
        setData('')
    }

    return (
        <Modal visible={isModalOpen} animationType='slide' presentationStyle='formSheet'>
            <View style={styles.addInput}>
            <Image style={styles.image} source={goalImage}/>
            <TextInput style={styles.textInput} placeholder='Your course goal' onChangeText={handleTextChange} value={data}/>
            <View style={styles.btnContainer}>
            <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0"/>
            </View>
            <View style={styles.button}>
            <Button title='Close Modal' onPress={()=>setIsModalOpen(false)} color="#f31282"/>
            </View>
            </View>
        </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    addInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        // marginRight: 6,
        padding: 8,
        color: '#120438',
        borderRadius: 6,
        // backgroundColor: 'white'
    },
    btnContainer:{
        flexDirection: "row",
        marginTop: 16
    },
    button:{
        width: '40%',
        marginHorizontal: 8
    },
    image:{
        height: 100,
        width: 100,
        margin: 20,
    }
})