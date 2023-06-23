import { StyleSheet, SafeAreaView, Text, View, FlatList, Button, Pressable,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';

const Order = ({ navigation, route }) => {

  const [product, setProduct] = useState({});
  const [loader, setloader] = useState(false);
  //let nabeel='';
  const getApiData = async () => {
    const url = "https://northwind.vercel.app/api/products/" + route.params.paramKey
    let result = await fetch(url);
    result = await result.json();
    console.log(result.id);
    let updatedValue = {};
    //updatedValue = {item:result.id, name:result.name, unitPrice:result.unitPrice, name:result.name, name:result.name,};
    updatedValue = result;
    setProduct(product => ({
      ...product,
      ...updatedValue
    }));
    setloader(true);
  }
  useEffect(() => {
    getApiData();
    console.log(product);
  }, [])
  return (
    <View style={{}}>
      {
        loader ?
      <DataTable style={{ borderWidth: 2, borderColor: '#c8e1ff', }} >
        <DataTable.Row style={{ marginLeft: 15, marginRight: 15 }} >
          <DataTable.Cell style={{}}>{"ID:" + product.id}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={{ marginLeft: 15, marginRight: 15 }} >
          <DataTable.Cell style={{  }}>{"Name:" +product.name}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={{ marginLeft: 15, marginRight: 15 }} >
          <DataTable.Cell style={{ }} >{"Quantity:" +product.quantityPerUnit}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={{ marginLeft: 15, marginRight: 15 }} >
          <DataTable.Cell style={{  }} >{"Unit Price:" +product.unitPrice}</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={{ marginLeft: 15, marginRight: 15 }} >
          <DataTable.Cell style={{ }} >{"Discontinued:" +product.discontinued}</DataTable.Cell>
        </DataTable.Row>
      </DataTable> : <View style={{marginTop:250}}><ActivityIndicator color="#89CFF0" size="large"/></View>
      }
    </View>
  );
}

export default Order

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
})