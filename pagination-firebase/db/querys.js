import {db} from './db';

export const querys= {
  GetListData: function(firebaseNode,totalRows){
    return db.database().ref().child(firebaseNode).orderByKey().limitToFirst(totalRows);
  }
};