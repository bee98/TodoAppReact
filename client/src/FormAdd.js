import React from 'react';
import axios from 'axios';
export default class FormAdd extends React.Component{
  
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state={namework:'',person:'',time:''};
    //this.add = this.add.bind(this);
  }
   handleChange(event) {
   	
    const target = event.target;
    var name = target.name;
    var partialState = {};
    partialState[name] = event.target.value;
   
    this.setState(partialState);
    
  }
    add = ()=>{
      
    axios.post('/add',{namework:this.state.namework,person:this.state.person,time:this.state.time})
    .then((res)=>{
      console.log(res.data);
      this.props.check(true);
      this.setState({namework:'',person:'',time:''});
      }).catch(e => {
    console.log("error:",e);


  });
}
 render(){

 	return(
 	  <div>
 	  <form id="myform">
 	  <table>
 	  <tbody>
 	  <tr>
		<th>Description</th>
		<th>Title</th>
		<th>Time(hour)</th>
	  </tr>
	  <tr>
      <td><input type="text" value={this.state.namework} name="namework" onChange={this.handleChange}/></td>
      <td><input type="text" value={this.state.person} name="person" onChange={this.handleChange}/></td>
      <td><input type="text" value={this.state.time} name="time" onChange={this.handleChange}/></td>
      <td><input type="button" value="+" onClick={this.add}/></td>
      </tr>
      </tbody>
      </table>
      </form>
      </div>
 		);
 		
 }
}