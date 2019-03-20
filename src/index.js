import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import MM1 from './MM1';
import MMHome from './MMHome';
import MMReducer from './MMReducer';
//import {BrowserRouter,HashRouter,Route,Link,Switch} from 'react-router-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Rules from './Rules';
import MatterTest from './MatterTest-1';
import Simulator from './Test';

const store=createStore(MMReducer);


ReactDOM.render(
	<HashRouter>
		<div>
			<Provider store={store}>
				<Switch>
					<Route exact path="/" component={MMHome}/>
					<Route path="/rules" component={Rules}/>
					<Route path="/play" component={MM1}/>
					<Route path="/matterjs" component={MatterTest}/>
					<Route path="/simulator" component={Simulator}/>
					<Route path="*" component={()=>"NOT FOUND"}/>
				</Switch>
			</Provider>
		</div>
	</HashRouter>,
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
