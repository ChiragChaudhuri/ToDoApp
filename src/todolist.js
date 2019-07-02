import React from 'react'
import Todoitem from "./todoitem"
import { listenerCount } from 'events';
class Todolist extends React.Component
{
    constructor(props)
    {
        super(props);

    }
    
    render()
    {
        const listitems=this.props.listarray;

        return(
            <div>{
                listitems.map((item,i)=>
                <Todoitem removeItem={this.props.handleRemove} index={i} items={item}/>
                )
            }
            </div>
        );
    }
}
export default Todolist;
