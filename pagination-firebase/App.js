import * as React from 'react';
import { Text, View, StyleSheet,SectionList,ScrollView } from 'react-native';
import { Constants } from 'expo';
// You can import from local files
import AssetExample from './components/AssetExample';
import ListViewPagination from './components/ListViewPagination'
// or any pure javascript modules available in npm
import { Card,Dimensions } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props){
  super(props);
  this.rowFormat= this.rowFormat.bind(this);
  }
  rowFormat(row){
    return <Text>{'Id:'+row.id+ ', Receiver: '+ row.receiver}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
       <ListViewPagination
        title='Messages'
        initialRows={40}
        increase={10}
        firebaseNode='messages'
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
