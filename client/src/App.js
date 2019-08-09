import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const [usersdata,setUsersData] = useState();


class App extends React.Component {
  constructor(){
    super();
    this.state={
      
        "error": "false",
        "message": "User created successfully",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTYzNDc2NTc0LCJleHAiOjE1NjM0ODAxNzR9.pIkjFgRRbrrg8j38YGiWpMlw0wgTWRfZmIIMAeFLQcw"
    }
  
changeUserName = (userName) => {
this.setState({userName});
}
useEffect(() =>{
  axios
  .get('http://localhost:5000/api/restricted/data')
  .then (res => {setState(res.data)

  },[usersdata])

      componentDidMount() {
        console.log("First Render (mounting)")
        this.fetchUser();
     
    }
    componentDidUpdate(prevProps, prevState){
      console.log(this.state);
      if(prevState.userName !== this.state.userName){
        this.fetchUser();
        this.fetchFollowers();

      }
    }
  
  render(){
    return(
      <div className="App">
        {usersdata.map(user =>{
          return <UsersCard key={this.state.username}user ={this.state.user} />
        })}
       
      </div>
    );}
}
 
 
export default App;