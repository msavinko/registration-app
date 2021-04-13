import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Profile from './Components/Profile';
import RegForm from './Components/RegForm';
import { selectUser } from './features/NewUser';

const App = () => {
	const user = useSelector(selectUser)
  return (
    <div>
		{user ? <Profile/> : <RegForm />}
    </div>
  );
}

export default App;
