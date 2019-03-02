import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import './MM.css';

class MMHome extends React.Component
{
	render()
	{
		return(
			<div>
				<Link to="/play"><button className="button" style={{position:'absolute',left:'30%'}}>Play game</button><br/></Link>
				<Link to="/rules"><button className="button" style={{position:'absolute',top:'160px',left:'30%'}}>How to Play</button><br/></Link>
					
				<p style={{position:'absolute',bottom:'0',left:'11%'}}>&copy; Copyrights Pavan Pakki 2019</p>
			</div>
		
		);
	}
}

export default MMHome;