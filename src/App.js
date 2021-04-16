import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Profile from './Components/Profile/Profile';
import RegForm from './Components/RegForm/RegForm';
import NameForm from './Components/NameForm/NameForm';
import EmailPassForm from './Components/EmailPassForm/EmailPassForm';
import { selectUser } from './features/NewUser';

const App = () => {
	const user = useSelector(selectUser)
  return (
    <div>
		{user ? <Profile/> : 
		<BrowserRouter>
			<RegForm />
			<Route exact path="/registration-app" component={NameForm} />
			<Route exact path="/emailpassform" component={EmailPassForm} />
		</BrowserRouter>}
		
    </div>
  );
}

export default App;
