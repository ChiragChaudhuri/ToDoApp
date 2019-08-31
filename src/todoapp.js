import React from 'react'
import Todoinput from './todoinput';
import Todolist from './todolist';
import firebase from './firebase';
class Todoapp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            item:'',
            list:[]
            ,id:[]
       }
    }
    componentDidMount()
    {
        const itemsRef=firebase.database().ref('item');
        itemsRef.on('value',(snapshot)=>{
            let items=snapshot.val();
            let newArray=[];
            for(let item in items){
                newArray.push(items[item]);
                this.state.id.push(item);
            }
            this.setState({list:newArray});
        });
    }
    change=(event)=>{this.newItem(event.target.value)}
    newItem=(input)=>{
        this.setState(
            {item:input
            })
    }
    addItem=()=>{
        //let newArray=this.state.list.concat(this.state.item);
        const itemref=firebase.database().ref('item');
        itemref.push(this.state.item);
        this.state.item="";
       /* this.setState({
            
            list:newArray,
            item:''

            })*/
     }
    
    remove=(id)=>{
        const itemref=firebase.database().ref('item');
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
            <Todolist handleRemove={this.remove} listarray={this.state.list} id={this.state.id} />
                        </div>
        );
        
    }
}

export default Todoapp;
