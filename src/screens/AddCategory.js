import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from "react-native"

export default function AddCategory({navigation}) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const AddCategory = async (name,description) => {
        const data={
            name:name,
            description:description,
        } 
        const url ="https://northwind.vercel.app/api/categories"
        let result = await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        result=result.json(),
        console.warn(result)
      };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
            <TextInput style={styles.input}
                placeholder='Enter your Name'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput style={styles.input}
                placeholder='Enter your Description'
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <Button
                onPress={() => {AddCategory(name,description);navigation.navigate("Category")}}
                title="Add Category"
                color="#89CFF0"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: "80%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});