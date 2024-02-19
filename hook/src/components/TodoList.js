import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import AddNewTodo from './AddNewTodo';

const TodoList = (props) => {


    const [todos, setTodos] = useState([{ text: 'Pay billls', id: '1' },
    { text: 'Do your homework', id: '2' },
    { text: 'Feed the dog', id: '3' },
    ]);

    const [count, setCount] = useState(0)
    const addTodo = (text) => {
        setTodos([...todos, { text, id: `${Math.random()}` }])
    }


    useEffect(() => {
        console.log('use effect', todos)
    }, [todos])

    useEffect(() => {
        console.log('use effect count', count)
    }, [count])

    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                keyExtractor={(todo) => todo.id}
                renderItem={({ item }) => {
                    return <Text>{item.text}</Text>
                }}
            />
            <AddNewTodo addTodo={addTodo} />
            <TouchableOpacity
                onPress={() => { setCount(count + 1) }}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>
                    Add score :{count}</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    buttonContainer: {
        backgroundColor: 'dodgerblue',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    buttonText: {
        color: 'white'
    }


})

export default TodoList;