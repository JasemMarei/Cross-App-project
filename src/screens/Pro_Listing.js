import { StyleSheet, SafeAreaView, Text, View, FlatList,Button, Pressable,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';

const App = ({navigation}) => {
  let [data, setData] = useState({});
  const getApiData = async () => {
    const url = "https://northwind.vercel.app/api/products"
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }
  useEffect(() => {
    getApiData()
  }, [])
  const DeleteRecord=(id)=>{
    console.warn(id);
   /* const index = data.indexOf(id, 0);
    if (index > -1) {
      data.splice(index, 1);
    }*/
    data = data.filter(obj => obj.id !== id);
    setData(data);
    console.warn("Record deleted Successfully")
  }
  return (
    <View style={{ }}>
      <DataTable style={{ borderWidth: 2, borderColor: '#c8e1ff',  }} >
        <DataTable.Header style={{ backgroundColor: '#f1f8ff' }}>
          <DataTable.Title style={{left:10}} >ID</DataTable.Title>
          <DataTable.Title style={{right:20}}>Name</DataTable.Title>
          <DataTable.Title style={{right:35}}>Unit Price</DataTable.Title>
        </DataTable.Header>
      </DataTable>
      {
        data.length ?
          <FlatList
            data={data}
            renderItem={({ item }) => 
            <View style={styles.container}>
              <DataTable>
                <DataTable.Row style={{marginLeft:15,marginRight:15}} >
                <Pressable onPress={() => navigation.navigate("Order",{
                  paramKey:item.id
                })}><DataTable.Cell style={{ }}>{item.id}</DataTable.Cell></Pressable>
                  <DataTable.Cell style={{ left:50}}>{item.name}</DataTable.Cell>
                  <DataTable.Cell style={{ left:90}} >{item.unitPrice}</DataTable.Cell>
                  <DataTable.Cell style={{ left:50}} ><Button
                    onPress={()=>DeleteRecord(item.id)}
                    title="Delete"
                    color="#89CFF0"
                  /></DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>}
          /> : <View style={{marginTop:250}}><ActivityIndicator color="#89CFF0" size="large"/></View>
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
})