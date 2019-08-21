import React,{Component} from 'react';
import './Items.css';
// import { ReactComponent } from '*.svg';
// import { Recoverable } from 'repl';
class Items extends Component{
    componentWillMount(){
        console.log("[items.js]component will mount");
      }
      componentDidMount(){
        console.log("[items.js]component did mount");
      }
      shouldComponentUpdate()
      {
        console.log("[items.js] should component update");
          let valid=this.props.valid;
          if(valid)
          return true;
          else
          return false;
         
      }
    render(){
        console.log("rendering in items.js");
        return(
            <div className="Items">
            <li>    
                <span>{this.props.name}  </span>
                <button onClick={this.props.deleteItem}>X</button>
            </li>
            </div>
        )
    }
}
export default Items;

