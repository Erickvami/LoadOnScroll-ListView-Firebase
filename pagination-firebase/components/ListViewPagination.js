import * as React from 'react';
import { Text, View, StyleSheet,SectionList,ScrollView,Button,ActivityIndicator } from 'react-native';
import { Constants } from 'expo';
import {querys} from '../db/querys';
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card,Dimensions } from 'react-native-paper';

class ListViewPagination extends React.Component {
  constructor(props){
  super(props);
this.state= {listData:[],RowsNumber:this.props.initialRows,title:this.props.title,increase:this.props.increase,firebaseNode:this.props.firebaseNode,change:false,lastKey:undefined,scrollable:true,isDown:false};
this.IsBottom= this.IsBottom.bind(this);
  this.LoadList= this.LoadList.bind(this);
  this.LoadList();
  }
  //21 de enero
  componentDidMount(){
  
  }
  LoadList(){
  querys.GetListData(this.state.firebaseNode,this.props.increase,this.state.lastKey).once('value',function(data){
    var keys=Object.keys(data.val());
    keys= keys.filter(f=> f!==this.state.lastKey);
    var list= keys.map(key=> data.val()[key]);
    this.setState({
      listData:this.state.listData.concat(list),
      lastKey:keys[keys.length-1],
      scrollable:true,
      isDown:false
      });
  },this);


//this.setState({lisData:ld});
  }
  
  IsBottom(e){
const paddingToBottom = 20;
var isDown=e.nativeEvent.layoutMeasurement.height + e.nativeEvent.contentOffset.y >=
    e.nativeEvent.contentSize.height-paddingToBottom;
 var rows=0;
 if(isDown && !this.state.isDown){
   this.setState({scrollable:false,isDown:true},this.LoadList());
 }
  }

  render() {
    return (
        <Card>
          <ScrollView scrollEnabled={this.state.scrollable} onScroll={this.IsBottom} style={{height:this.props.height}}>
            <SectionList
            sections={[{title:this.state.title,data:this.state.listData}]}
            renderItem={({item})=> {  return this.props.rowFormat(item)}}
            renderSectionHeader={({section})=> <Text style={{backgroundColor:'darkblue',color:'white',fontSize:25}}>{section.title}</Text>}
            keyExtractor={(item,index)=> index}
             />
             <ActivityIndicator size="small" color="#00ff00"/>
          </ScrollView>
          <Text style={{backgroundColor:'gray',color:'white'}}>{this.state.RowsNumber} Rows {this.state.listData.length.toString()}</Text>
        </Card>
    );
  }
}

export default ListViewPagination;