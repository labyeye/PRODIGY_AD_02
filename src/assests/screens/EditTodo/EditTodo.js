import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditTodo = ({ route, navigation }) => {
    const { noteTotodo, index } = route.params;
    const [editedTitle, setEditedTitle] = useState(noteTotodo.title);
  
    const handleSaveChanges = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todo');
        let data = JSON.parse(storedTodos);
        if (data && data.data) {
          data.data[index].title = editedTitle;
          console.log('Updated Data:', data);
          await AsyncStorage.setItem('todo', JSON.stringify(data));
          navigation.goBack({ updatedNote: data.data[index] });
        }
      } catch (error) {
        console.error('Error saving changes:', error);
      }
    };

    return (
      <View style={{marginTop:150}}>
        <Text>Edit Todo</Text>
        <TextInput
          value={editedTitle}
          onChangeText={(text) => setEditedTitle(text)}
          placeholder="Enter new title"
        />
        <Button title="Save Changes" onPress={handleSaveChanges} />
      </View>
    );
  };
  

export default EditTodo;
