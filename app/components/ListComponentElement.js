import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const ListComponentElement = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>{item.name}</Text>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: item.picture,
        }}
      />
      <Text>{item.price}</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('ListComponentDetail', {item: item})}
      />
    </View>
  );
};

export default ListComponentElement;

const styles = StyleSheet.create({});
