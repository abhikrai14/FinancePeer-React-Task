import React from "react"
import axios from "axios"

export default class  Login extends React.Component {

	constructor(props){
		super(props)

		 this.state = {
            username: '',
            email: '',
            password:''
      
        }
   		this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);

	}

    onChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }
	onSubmit(e) {
        e.preventDefault();
        
        const newUser = {
            username: this.state.username,
            email: this.state.email,
           	password: this.state.password
        }
          console.log('ehehrehr')
	        if (this.props.mode=="register")
	        {
            console.log('registering')

		        axios.post('http://localhost:4000/adduser/', newUser)
		             .then(res => {
                  console.log(res.status)
                  if(res.status!==200)
                  {
                    console.log(res.data)

                  }
                  else{
                      document.getElementById("AfterSubmit").innerHTML = "REGISTERED";
                  }
                 })
                 .catch(function(error) {
                     document.getElementById("AfterSubmit").innerHTML = "email already exist" ;

                 console.log(error);
             })

		   
		    }    
		  else{
			     console.log('lmaolmaolmao')
	        
		        axios.post('http://localhost:4000/checkuser/', newUser)
		             .then(res => {
           
                   if(res.status==200)
                   {
                      console.log(res)
                      let lol=  res.data
                      localStorage.clear()
                      console.log(lol)
                      localStorage.setItem('mydata',JSON.stringify(lol))
                      window.location.assign('/addfiles')
                   }

                 })
                  .catch(function(error) {
                     document.getElementById("AfterSubmit").innerHTML = "LOGIN FAILED" ;

                 console.log(error);
             })
                 
		    }
		  
		
        this.setState({
            username: '',
            email: '',
            password: ''
        });
    }
	render(){
		var hide=""
    var req="required"
    let btnval = "Register"
		if(this.props.mode=="login"){
      hide="none"
      btnval = "Login"
    }


 		return(
      
  			<div>
             <form onSubmit={this.onSubmit}>
                    <div style={{display:hide}} className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               id="emaily"
                               value={this.state.email}
                               onChange={this.onChangeEmail}

                               />  
                    </div>

                    <div className="form-group">        
                        <label>Username: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.username}
                               onChange={this.onChangeUsername}
                               required
                               />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.password}
                               onChange={this.onChangePassword}
                               required

                               />  
                    </div>
                    
                    <div className="form-group">
                        <input value={btnval} type="submit"  className="btn btn-primary"/>
                    </div>

                    <div id ="AfterSubmit">

                    </div>
                </form>
            </div>
      	);

     if(this.props.mode!=="login"){
       document.getElementsByClassName("form-control")[0].required = true;

    }
	}
}



