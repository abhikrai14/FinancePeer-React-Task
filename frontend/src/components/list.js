import React from "react"
import JSONPretty from 'react-json-pretty';

export default class  List extends React.Component {

	constructor(props){
    super(props)
	
    this.state=this.props.itm

	}



   
    
	render(){
    console.log(typeof(this.state.myfile))
   var tmpData = JSON.parse(this.state.myfile);
  var formattedData = JSON.stringify(tmpData, null, '\t');
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

 		return(
      
  			<div>
            <p>FileName : {this.state.name}</p>
            <p>Date : {this.state.date}</p>
            <p>Created by: {this.state.createdby}</p>
            <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={tmpData}></JSONPretty>
            <br></br>
          </div>

		);
	}
}



