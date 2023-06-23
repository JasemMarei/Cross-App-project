import React,{useState} from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, PaperProvider } from 'react-native-paper';

const Home = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
                  }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Menu</Button>}>
          <Menu.Item  onPress={() => navigation.navigate("Pro_Listing")} title="Products" />
          <Menu.Item  onPress={() => navigation.navigate("Category")} title="Categories" />
          <Divider />
          <Menu.Item  onPress={""}title="Order" />
        </Menu>
      </View>
    </PaperProvider>
  );
};

export default Home;
