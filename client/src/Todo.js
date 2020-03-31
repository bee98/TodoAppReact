import React from 'react';
import axios from 'axios';
export default class Todo extends React.Component{
	 constructor(props){
    super(props)
    this.state ={done:this.props.done,id:this.props.key_id,disabled: true,namework:this.props.namework,person:this.props.person,date:this.props.date,time:this.props.time};
    this.handleChange = this.handleChange.bind(this);
    this.click = this.click.bind(this);
  }
  edits()
  {
     var n = new Date();
     console.log(n);
     
  }
  
   edit = ()=>{
     
    this.setState( {disabled: !this.state.disabled} )
    if(this.state.disabled === false)
    axios.post('/edit',{done:this.state.done,id:this.state.id,namework:this.state.namework,person:this.state.person,date:this.state.date,time:this.state.time}).then((res)=>{
      console.log(res.data);
      this.props.check(true)
      }).catch(e => {
    console.log("error:",e);
     ;
});
  } 
   delete = ()=>
  {     
        
        axios.post('/delete',{id:this.state.id}).then((res)=>{
          console.log(res.data);
          this.props.check(true);
      }).catch(e => {
    console.log("error:",e);

   });
        
  
  }  
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    console.log(name);
    var partialState = {};
    partialState[name] = event.target.value;
    this.setState(partialState);
  }
  click(){
    this.setState({done:!this.state.done});
  }
	render(){
          
           var myclass ='active'; 
           const a = this.state.date + this.state.time*60*60*1000 - this.props.timenow;
           if(this.state.done === true){myclass = 'done';} 
           else if (this.props.timenow) 
           if(a<=0){myclass = 'end';}else{myclass = 'active';}
           
          
        return(
  
  <tr id={this.state.id} className={myclass} >
  <td><input type="checkbox" defaultChecked={this.state.done} disabled ={(this.state.disabled)? "disabled" : ""}onClick={this.click}/></td>
  <td> <input type="text" name="namework"  value ={this.state.namework}  disabled ={(this.state.disabled)? "disabled" : "" }onChange={this.handleChange}/></td>
  <td> <input type="text" name="person"  value ={this.state.person}  disabled ={(this.state.disabled)? "disabled" : ""}onChange={this.handleChange}/></td>
  <td> <input type="text" name="date"  value ={new Date(this.state.date)}  disabled ={(this.state.disabled)? "disabled" : ""}onChange={this.handleChange}/></td>
  <td> <input type="text" name="time"  value ={this.state.time}  disabled ={(this.state.disabled)? "disabled" : ""}onChange={this.handleChange}/></td>
  <td><input type="button" value="+" onClick={this.edit}/></td> 
  <td><input type="button" value="x" onClick={this.delete}/></td>
  </tr>

          ); 
    }

   
    
    }
  
	