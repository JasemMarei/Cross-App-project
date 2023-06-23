import { StyleSheet, SafeAreaView, Text, View, FlatList, Button,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

const Product = ({ navigation }) => {
  
  const [data, setData] = useState({});
  const getApiData = async () => {
    const url = "https://northwind.vercel.app/api/products"
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }
  useEffect(() => {
    getApiData()
  }, [])
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>FlatList With Api Data</Text>
      {
        data.length ?
          <FlatList
            data={data}
            renderItem={({ item }) =>
              <View style={{ borderBottomColor: "Black", borderBottomWidth: 2, padding: 10, flexDirection: 'column', flex: 1, justifyContent: "left", justifyContent: 'space-around', alignItems: 'left' }}>
                <Pressable onPress={() => navigation.navigate("Order",{
                  paramKey:item.id
                })}>
                  <Text style={{ fontSize: 12 }}>{"ID : " + item.id}</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Order",{
                  paramKey:item.id
                })}>
                  <Text style={{ fontSize: 12 }}>{"Product Name : " + item.name}</Text>
                </Pressable>
                <Text style={{ fontSize: 12 }}>{"Suppliers ID : " + item.supplierId}</Text>
                <View style={{ width:80,marginTop:5, justifyContent: 'space-around' }}>
                  <Button
                    onPress={""}
                    title="Delete"
                    color="#7f7f7f"
                  />
                </View>
              </View>}
          /> : <Text>Hello How are you</Text>
      }
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})