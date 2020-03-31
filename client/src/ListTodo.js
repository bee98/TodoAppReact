import React from 'react';
import Todo from './Todo';
export default class ListToDo extends React.Component{
  
    constructor(props){
    super(props)
    this.state = {check:false};
    this.getKey = this.getKey.bind(this);
    
  }  
    
    getKey(key){
     
      this.props.check(key);
    }
	  render(){
	  //
    //console.log("time: ",this.props.time);
       const data = this.props.loading;
       return(<div>
       	<table>
        <tbody>
	  <tr>
    <th>Done</th>
		<th>Description</th>
		<th>Title</th>
		<th>Date</th>
		<th>Time(hour)</th>
	    </tr>
       {data.map((item,i)=><Todo key = {i} key_id={item._id} namework={item.namework} person={item.person} date={item.date}  time={item.time} timenow={this.props.time} check={this.getKey} done={item.done}/>)}
       </tbody>
        </table>
       	</div>);
}
}
