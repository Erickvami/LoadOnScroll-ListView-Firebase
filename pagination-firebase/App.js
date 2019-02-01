import * as React from 'react';
import { Text, View, StyleSheet,SectionList,ScrollView,Button } from 'react-native';
import { Constants } from 'expo';
// You can import from local files
import AssetExample from './components/AssetExample';
import ListViewPagination from './components/ListViewPagination'
// or any pure javascript modules available in npm
import { Card,Dimensions } from 'react-native-paper';
import {querys} from './db/querys';
export default class App extends React.Component {
  constructor(props){
  super(props);
  this.rowFormat= this.rowFormat.bind(this);
  }
  rowFormat(row){
    //alert(JSON.stringify(row));
    return <Text>{'Name:'+row.name+ ', Age '+ row.age}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
       <ListViewPagination
        title='Users'
        initialRows={10}
        increase={20}
        firebaseNode='randomList'
        height={300}
        rowFormat={this.rowFormat}
       ></ListViewPagination>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
