import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MM1 from './MM1';
import MMHome from './MMHome';
import MMReducer from './MMReducer';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Rules from './Rules';
const store=createStore(MMReducer);



ReactDOM.render(
	<BrowserRouter>
		<div>
			<center><h1 style={{color:'#863cbd',fontWeight:'900',fontFamily:"-webkit-body"}}>MASTERMIND</h1></center>
			<Provider store={store}>
				<Route exact path="/" component={MMHome}/>
				<Route path="/rules" component={Rules}/>
				<Route path="/play" component={MM1}/>	
			</Provider>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);

store.subscribe(()=>{
	console.log("Current state is",store.getState())
})

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
