import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

const AddNewTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const onButtonPress = () => {
        addTodo(todo);
        setTodo('');
    };
    return (
        <View>
            <TextInput
                value={todo}
                onChangeText={(text) => {
                    setTodo(text)
                }}
                style={styles.input} />
            <TouchableOpacity style={styles.buttonContainer}
                onPress={onButtonPress}>
                <Text style={styles.buttonText}>
                    Add Todo
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 15,
        padding: 5,
        margin: 5,
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

export default AddNewTodo;