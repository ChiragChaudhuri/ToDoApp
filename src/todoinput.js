import React from 'react'
class Todoinput extends React.Component{
    
    render(){
        return(
            <div>
                <input onChange={this.props.handleChange} type='text' placeholder='Enter your choice'></input>
                <button onClick={this.props.handleAdd } disabled={this.props.items.length<1}>Add to List</button>
            </div>
        );
    }
}
export default Todoinput;