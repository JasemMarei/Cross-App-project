import { StyleSheet, SafeAreaView, Text, View, FlatList, Button,Pressable,ActivityIndicator, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';

const Product = ({ navigation }) => {
  
  let [data, setData] = useState({});
  const getApiData = async () => {
    const url = "https://northwind.vercel.app/api/categories"
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
    <View style={{}}>
      <View style={{width:120,left:230,marginTop:10,marginBottom:10}}>
              <Button
                    onPress={() => navigation.navigate("AddCategory")}
                    title="Add Category"
                    color="#89CFF0" 
                  />
      </View>
      <DataTable style={{ borderWidth: 2, borderColor: '#c8e1ff',  }} >
        <DataTable.Header style={{ backgroundColor: '#f1f8ff' }}>
          <DataTable.Title style={{left:10}} >ID</DataTable.Title>
          <DataTable.Title style={{right:15}}>Name</DataTable.Title>
          <DataTable.Title style={{right:30}}>Description</DataTable.Title>
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
                 <DataTable.Cell style={{ }}>{item.id}</DataTable.Cell>
                  <DataTable.Cell style={{ }}>{item.name}</DataTable.Cell>
                  <DataTable.Cell style={{ left:30}} >{item.description}</DataTable.Cell>
                  <DataTable.Cell style={{ left:35}} ><Button
                    onPress={()=>DeleteRecord(item.id)}
                    title="Delete"
                    color="#89CFF0" 
                  />
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>}
          /> : <View style={{marginTop:250}}><ActivityIndicator color="#89CFF0" size="large"/></View>
      }
      </View>
  )
}

export default Product

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
})