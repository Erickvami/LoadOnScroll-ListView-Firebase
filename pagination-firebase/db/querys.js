import {db} from './db';

export const querys= {
  GetListData: function(firebaseNode,totalRows,lastKey){
   // alert(lastKey);
 if(lastKey===undefined){
 return db.database().ref().child(firebaseNode).orderByKey().limitToFirst(totalRows);
 }
 // alert('in');
return db.database().ref().child(firebaseNode).orderByKey().startAt(lastKey).limitToFirst(totalRows);
//}
    
    //.orderByKey().startAt((2).toString()).endAt(totalRows.toString());
  },
  InsertNode:function(i){
    return db.database().ref().child('randomList').push().set({name:'name'+i,age:'10',id:new Date().getTime()});
  }
};