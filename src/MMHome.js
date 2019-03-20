import React from 'react';
import {Link} from 'react-router-dom';
import './MM.css';
//import Toolbar from './Test';

class MMHome extends React.Component
{
	componentWillMount()
	{
		//console.log("WillMount");
		// fetch('conf/LoginWrapper.json')
		// .then(res=>res.json())
		// .then(data=>{
		// 	var d=data.aaa
		// 	console.log(d);
		// 	var arr=d.filter(function(obj){
		// 		return obj.user==="user2";
		// 	})
		// 	console.log(arr)
		// })
		// .catch(err=>console.log("Something went Wrong"))
	}


	render()
	{
		return(
			<div className="home">
				<center><h1 style={{color:'#863cbd',fontWeight:'900',fontFamily:"-webkit-body"}}>MASTERMIND</h1></center>
				<Link to="/play"><button className="button" style={{position:'absolute',left:'30%'}}>Play game</button><br/></Link>
				<Link to="/rules"><button className="button" style={{position:'absolute',top:'160px',left:'30%'}}>How to Play</button><br/></Link>
				<Link to="/matterjs"><button className="button" style={{position:'absolute',top:'240px',left:'30%'}}>Play with balls</button><br/></Link>
				<p style={{position:'absolute',bottom:'0',left:'11%'}}>Copyrights &copy; Pavan Pakki 2019</p>
			</div>

		);
	}
}

export default MMHome;
