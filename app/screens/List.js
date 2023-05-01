import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getList} from '../apiCalls/Requests';
import ListComponentElement from '../components/ListComponentElement';

const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const retrieve = async () => {
      const result = await getList();
      await setData(result);
    };
    retrieve();
  }, []);

  return (
    <View>
      <Text>List</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <ListComponentElement item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
