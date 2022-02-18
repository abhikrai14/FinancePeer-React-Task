import React from "react"
import axios from "axios"
import List from './list'

export default class  Display extends React.Component {

	constructor(props){
    super(props)
	   axios.get('http://localhost:4000/display/')
            .then(res => {
               this.setState(res.data)
       
           })
           .catch(function(error) {
               console.log(error);
           })

	}



   
    
	render(){

    var lis=[]
    var values = this.state
    for(var i in this.state){
      // console.log(i)
      lis.push(values[i])
    }
    var All
		All=lis.map(item => <List itm={item} />)
    

 		return(
      
  			<div>
            {All}
           </div>

		);
	}
}



