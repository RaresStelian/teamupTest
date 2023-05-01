import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const ListComponentDetail = ({route}) => {
  const {item} = route.params;
  return (
    <View>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: item.picture,
        }}
      />
      <Text>{item.name}</Text>

      <Text>{item.price}</Text>
      <Text>{item.description}</Text>
      <Button title="Add to cart" onPress={() => alert('In progress')} />
    </View>
  );
};

export default ListComponentDetail;

const styles = StyleSheet.create({});
