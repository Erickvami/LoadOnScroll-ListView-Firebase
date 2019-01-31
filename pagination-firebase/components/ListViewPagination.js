import * as React from 'react';
import { Text, View, StyleSheet,SectionList,ScrollView } from 'react-native';
import { Constants } from 'expo';
import {querys} from '../db/querys';
// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card,Dimensions } from 'react-native-paper';

class ListViewPagination extends React.Component {
  constructor(props){
  super(props);
this.state= {listData:[],RowsNumber:this.props.initialRows,title:this.props.title,increase:this.props.increase,firebaseNode:this.props.firebaseNode};
this.IsBottom= this.IsBottom.bind(this);
  this.LoadList= this.LoadList.bind(this);
  }

  componentDidMount(){
  this.LoadList();
  }
  LoadList(){
  querys.GetListData(this.state.firebaseNode,this.state.RowsNumber).once('value',function(data){
    this.setState({listData:data.val()});
  },this);
  }
  
  IsBottom(e){
const paddingToBottom = 20;
var isDown=e.nativeEvent.layoutMeasurement.height + e.nativeEvent.contentOffset.y >=
    e.nativeEvent.contentSize.height-paddingToBottom;
 if(isDown){
 var rows=this.state.RowsNumber+this.state.increase;
 this.setState({RowsNumber:rows},this.LoadList());
 
 }
  }

  render() {
    return (
        <Card>
          <ScrollView onScroll={this.IsBottom} style={{height:this.props.height}}>
            <SectionList
            sections={[{title:this.state.title,data:this.state.listData}]}
            renderItem={({item})=> {return this.props.rowFormat(item)}}
            renderSectionHeader={({section})=> <Text style={{backgroundColor:'darkblue',color:'white',fontSize:25}}>{section.title}</Text>}
            keyExtractor={(item,index)=> index}
             />
          </ScrollView>
          <Text style={{backgroundColor:'gray',color:'white'}}>{this.state.RowsNumber} Rows</Text>
        </Card>
    );
  }
}

export default ListViewPagination;