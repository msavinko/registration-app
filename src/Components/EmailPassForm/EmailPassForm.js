import React, { useState } from 'react';
import { registration } from '../../features/NewUser';
import { useDispatch } from "react-redux";

const NameForm = () => {

	const [email,setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [confirmPassword,setConfirmPassword] = useState("");
	const [isError,setIsError] = useState("");


	const dispatch = useDispatch();

	const validateForm = () => {
		return password.length > 5 && password === confirmPassword ;
	}

	const newRegistration = (e) => {
		e.preventDefault();
		dispatch(
			registration({
				email: email,
				password: password,
				registration: true,
			})
		);
	};



	const checkValidation = (e) => {
		const confPass = e.target.value;
		setConfirmPassword(confPass);
		if( password !== confPass){
			setIsError("Пароль не совпадает");
		}else {
			setIsError("");
		}
	};
	
	return(
			<form className="reg__form" onSubmit={(e) => newRegistration(e)}>
				<h2>Электронная почта и пароль</h2>
				<div className="form__item">
					<div>Email</div>
					<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
				</div>
				<div className="form__item">
					<div>Пароль</div>
					<input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required/>
				</div>
				<div className="form__item">
					<div>Повторите пароль</div>
					<input type="password" placeholder="Повторите пароль" value={confirmPassword} onChange={(e) => checkValidation(e)} required/>
					<div className="error">{isError}</div>
				</div>
				<button type="submit" className="submit__btn" disabled={!validateForm()} >Регистрация</button>
			</form>
		
	);
}

export default NameForm;