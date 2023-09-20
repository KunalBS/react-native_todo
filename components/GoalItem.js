import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const GoalItem = ({ goalText, handleDelete, goalId }) => {
    return <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={handleDelete.bind(this,goalId?.id)}>
            <Text style={styles.goalText}>{goalText}</Text>
            </Pressable>
        </View>
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: "white"
    },
    goalText:{
        color: 'white',
        padding: 8,
    }
})