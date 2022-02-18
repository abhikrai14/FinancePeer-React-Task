import React from "react"
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export default class Addfiles extends React.Component{
    constructor(){
        super()
        var st=localStorage.getItem('mydata')

        if (st==null)
        {
            window.location.assign('/login');
        }

        this.state=JSON.parse(st)
        console.log(this.state)
        this.onClick=this.onClick.bind(this);

        this.state.selectedFile=null;
        


    }

    onFileChange = event => { 
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
    }; 

	// const validateJSON = data => {
	//  
	// }

    onFileUpload = () => { 
      // Create an object of formData 
      const formData = new FormData(); 
     var isjson = 1
     var file = document.getElementById("fileinput").files[0];
     console.log(this.state)
     var obj = this.state
	if (file) {
	    var reader = new FileReader();
	    reader.readAsText(file, "UTF-8");


	     reader.onload = function (evt) {
	        // document.getElementById("fileContents").innerHTML = evt.target.result;
	        var data=(evt.target.result);
	        console.log(data)
	         try { JSON.parse(data); }
			  catch { console.log('sdf');isjson=0;document.getElementById("fileContents").innerHTML = "error reading file"; }
			  
	    }


	    reader.onloadend= function(evt){
		     if (isjson){
		     	this.state=obj
		      formData.append("token",this.state.token);

		      formData.append( 
		        "myFile", 
		        this.state.selectedFile
		        
		      ); 
		           formData.append( 
		        "filename", 
		        this.state.selectedFile.name
		        
		      ); 
		   
		      // Details of the uploaded file 
		      console.log(this.state.selectedFile); 
		     
		      // Request made to the backend api 
		      // Send formData object 
		        axios.post("http://localhost:4000/uploadfile/",formData,
		        {
				    	headers: {
				      'Content-Type': 'multipart/form-data'
			    }
				})
		        .then(res => {
		                   console.log('succsess')
		              
		                   document.getElementById("fileContents").innerHTML = "File uploaded"
		             })
		              .catch(function(error) {
		               

		             console.log(error);
		         })
		  	}


	}
	    reader.onerror = function (evt) {
	        document.getElementById("fileContents").innerHTML = "error reading file";
	    }

	}

      // if file data is actually json 
    
     };


    fileData = () => { 

          if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            <h4>Choose before Pressing the Upload button</h4> 
          </div> 
        ); 
      } 
    }; 


    componentDidMount(){

        document.getElementById("lolout").style.zIndex = "2";


    }
    onClick(){
        localStorage.clear()
        window.location.assign('/')
    }
    
    render(){

        return(
        <Router>    
            <div>
            
            <nav id="navvendor" className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
          
                  <li style={{position:"absolute",right:"3px"}}>
                  User : {this.state.username}
                  </li>
                </ul>
              </div>
           </nav>
           
                <button id="lolout" className="btn btn-primary" onClick={this.onClick}>LOGOUT</button>
        
        Add Json File


               <div> 
                <input id ="fileinput" type="file" accept=".json" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 

          {this.fileData()} 

          <div id="fileContents">
          </div>

            </div>



        </Router>
        );
    }
}


