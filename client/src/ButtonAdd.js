
import React from 'react';
import FormAdd from './FormAdd';
export default class ButtonAdd extends React.Component{
     constructor(props) {
      super(props);
      this.state = {title:"+",ishidden:true};
      this.getKey = this.getKey.bind(this);
    }

        getKey(key){
     
      this.props.check(key);
       }
       
       addfrom = ()=>{
       	if(this.state.title === "+") {
          this.setState({title:"x"});
          this.setState({ishidden:false});
        }else{
         this.setState({title:"+"});
         this.setState({ishidden:true});
        }
       }
       render(){
       	return (
          <div>
          <button onClick={this.addfrom}>{this.state.title}</button>
          {!this.state.ishidden && <FormAdd check={this.getKey}/>}
          </div>
          );
       }
}