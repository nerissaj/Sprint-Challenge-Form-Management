import React from 'react';
import Form from './Form';


const userdata=[{
  "error": "false",
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTYzNDc2NTc0LCJleHAiOjE1NjM0ODAxNzR9.pIkjFgRRbrrg8j38YGiWpMlw0wgTWRfZmIIMAeFLQcw"
}

];

class App extends React.Component {
  constructor(){
    super();
    this.state={
      users: userdata,
    };
  }
      
      
  
changeUserName = (userName) => {
this.setState({users:this.state.users.filter(user =>{
  return !user.username;
})
});
}
fetchUser = () => {
  fetch(`http://localhost:5000/api/restricted/data`)
  .then(res => res.json())
  .then (data => this.setState({user:data}));

   
      
    }

      componentDidMount() {
        console.log("First Render (mounting)")
        this.fetchUser();
     
    }
    componentDidUpdate(prevProps, prevState){
      console.log(this.state);
      if(prevState.username !== this.state.username){
        this.fetchUser();
       

      }
    }
  
  render(){
    return(
      <div className="App">
        {userdata.map(user => {
          return <Form key={this.state.username}user = {this.state.username} />
        })}
       
      </div>
    );}
}
 
 
export default App;