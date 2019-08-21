import React,{Component} from 'react';
import './App.css';
import Items from './Items/Items.js';

class App extends Component {
constructor(props){
  super(props);
  this.state={users:[
    {name:"vamsi"},
    {name:'sai'},
    {name:'krishna'}
  ]
  ,render:false
};
}
  

        componentWillMount(){
          console.log("[app.js]component will mount");
        }
        componentDidMount(){
          console.log("[app.js]component did mount");
        }
        // shouldComponentUpdate()
        // {
        //   console.log("[app.js] should component update");
        //   let values=[];
        //   let result;
        //   if(document.getElementById("inp1").value.trim())
        //   {
        //    const user={};
        //    let values=[];
        //    const tempname=document.getElementById("inp1").value;
        //    user.name=tempname;
           
        //    const userss=Object.assign([],this.state.users);
        //    userss.forEach(function(value,index)
        //    {
        //      values[index]=value.name;
        //    })
        //     result=values.find((element)=> {
        //      console.log("element  "+element);
        //      if(element==tempname)
        //      return true;
        //  });
        //  if(result==undefined)
        //  return true;
        //  else
        //  return false;
        // }


        // }

        addItem(){
          console.log("in add item function");
         // console.log("inp value"+this.ref.inp1.value);
         console.log("value"+document.getElementById("inp1").value);
         if(document.getElementById("inp1").value.trim())
         {
          const user={};
          let values=[];
          const tempname=document.getElementById("inp1").value;
          user.name=tempname;
          
          const userss=Object.assign([],this.state.users);
          userss.forEach(function(value,index)
          {
            values[index]=value.name;
          })
          let result=values.find((element)=> {
            console.log("element  "+element);
            if(element==tempname)
            return true;
        });
        console.log(values);
        if(result==undefined)
        {
          this.setState({valid:true})
          userss.push(user);
          this.setState({users:userss});
        }
        else
        {
          this.setState({valid:false})

          alert("User Already exists");
        }
        
          
         }
         else
         alert("Enter name to add into list");
        }
        delItem(index,e){
          console.log("index"+index);
          const DupUsers=Object.assign([],this.state.users);
          DupUsers.splice(index,1);
          this.setState({users:DupUsers});
        }
  render(){
    console.log("app.js rendering");
  return (
    <div className="App">
 <h1>HI this is to do a sample todo list and delete as well</h1>
 <input type="text" id="inp1" ref="inp1"/><button type="button" onClick={()=>this.addItem()}>Add</button>
 <ol>
   {
   this.state.users.map((user,index)=>{
     return  (
     <Items name={user.name}  valid={this.state.render}deleteItem={()=>this.delItem(index)} key={index} />
     
     )
   })
  }
   </ol>
    </div>
  );
}
}

export default App;
