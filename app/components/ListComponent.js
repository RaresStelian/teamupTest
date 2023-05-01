import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListComponent = ({item}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log(item.id)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({});
