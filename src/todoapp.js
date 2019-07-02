import React from 'react'
import Todoinput from './todoinput';
import Todolist from './todolist';
class Todoapp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            item:'',
            list:[]
       }
    }
    change=(event)=>{this.newItem(event.target.value)}
    newItem=(input)=>{
        this.setState(
            {item:input
                
            })
        }
    
     

    addItem=()=>{
        let newArray=this.state.list.concat(this.state.item);
        this.setState({
            
            list:newArray,
            item:''

            })
                }
    
    remove=(id)=>{
        let newArray=this.state.list;
        let left=newArray.slice(0,id);
        let right=newArray.slice(id+1);
        this.setState({
            list: left.concat(right)
        })
    }
        
    
    render(){
        return(
            <div>
            <Todoinput handleChange={this.change}
            handleAdd={this.addItem} items={this.state.item}/>
            <Todolist handleRemove={this.remove} listarray={this.state.list}/>
                        </div>
        );
        
    }
}

export default Todoapp;
