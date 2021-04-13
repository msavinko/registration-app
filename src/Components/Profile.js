import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/NewUser';
import './Profile.css';

const Profile = () => {
	const user = useSelector(selectUser);

  return (
    <div className="profile">
		<h1>Добро пожаловать {user.familyName} {user.name} {user.patronimicName}</h1>
		<div className="profile__data">
			<h3>Ваш профайл</h3>
			<div>ФИО: {user.familyName} {user.name} {user.patronimicName}</div>
			<div>Дата рождения: {user.birthDate}</div>
			<div>Email: {user.email}</div>
		</div>
    </div>
  );
}

export default Profile;