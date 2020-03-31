import React from 'react';
import './App.css';
import axios from 'axios';
import ListTodo from './ListTodo';
import ButtonAdd from './ButtonAdd';
class App  extends React.Component{
	  constructor(props){
      super(props)
      this.state = {data:[],check:true,style:{}};
      this.getKey = this.getKey.bind(this);
      }  
    componentWillMount() {
     // clearInterval(this.timerID);
      console.log('Component WILL MOUNT!');
   }
    componentDidMount() {
      console.log('Component DID MOUNT!');
      axios.get('/lists',{params:{data:true}}).then((res)=>{
      this.setState({data:res.data});
      this.timerID = setInterval(
      () => this.tick(),
      1000
    );
      
      });
     }
     componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!');
   }
     shouldComponentUpdate(newProps, newState) {
      
      return this.state.check;
   }
    componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
     
   }
   componentDidUpdate(prevProps, prevState) {
   
   }
   
   tick() {
    this.setState({
      date: Date.now()
    });
  }
    getKey(key){
    	this.setState({data:[]});
    	this.setState({check:key});
    	 axios.get('/lists',{params:{data:true}}).then((res)=>{
    	 console.log(res.data);
         this.setState({data:res.data});
      
      });	

    }  
   
  render(){
  	const data = this.state.data;
  	const time = this.state.date;
  	return (
    <div className="App">
    <h1>ToDo</h1>
    <ButtonAdd check = {this.getKey}/>
    <br/><br/>
    <ListTodo time ={time} loading={data} check = {this.getKey}  />
    </div>
  );}
}

export default App;
