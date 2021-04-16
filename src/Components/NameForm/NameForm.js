import React, { useState } from 'react';
import { registration } from '../../features/NewUser';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';

const NameForm = () => {
	const [familyName,setFamilyName] = useState("");
	const [name,setName] = useState("");
	const [patronimicName,setPatronimicName] = useState("");
	const [birthDate,setBirthDate] = useState("");

	const [isPatErr,setPatEr] = useState("");
	const [isNameErr,setNameEr] = useState("");
	const [isFamErr,setFamEr] = useState("");

	const dispatch = useDispatch();

	const validateForm = () => {
		return familyName.length > 2 && name.length > 2 && patronimicName.length >2 ;
	}

	const newRegistration = (e) => {
		e.preventDefault();
		dispatch(
			registration({
				familyName: familyName,
				name: name,
				patronimicName: patronimicName,
				birthDate: birthDate,
				registration: true,
			})
		);
	};

	const checkFamily = (e) =>{
		const checkFam = e.target.value;
		setFamilyName(checkFam);
		if (checkFam.length < "3"){
			setFamEr("Фамилия должна быть длиннее двух символов");
		} else{
			setFamEr("");
		}
	};

	const checkName = (e) =>{
		const checkN = e.target.value;
		setName(checkN);
		if (checkN.length < "3"){
			setNameEr("Имя должно быть длиннее двух символов");
		} else{
			setNameEr("");
		}
	};

	const checkPatronimic = (e) =>{
		const checkPat = e.target.value;
		setPatronimicName(checkPat);
		if (checkPat.length < "3"){
			setPatEr("Отчество должно быть длиннее двух символов");
		} else{
			setPatEr("");
		}
	};


	
	return(
		<form className="reg__form" onSubmit={(e) => newRegistration(e)}>
			<h2>Персональные данные</h2>
			<div className="form__item"> 
				<div>Фамилия</div>
				<input type="familyName" placeholder="Фамилия на латинице" value={familyName} onChange={(e) => checkFamily(e)}  required />
				<div className="error">{isFamErr}</div>
			</div>
			<div className="form__item"> 
				<div>Имя</div>
				<input type="name" placeholder="Имя на латинице" value={name} onChange={(e) => checkName(e)} required/>
				<div className="error">{isNameErr}</div>
			</div>
			<div className="form__item"> 
				<div>Отчество</div>
				<input type="patronimicName" placeholder="Отчество на латинице" value={patronimicName} onChange={(e) => checkPatronimic(e)} required/>
				<div className="error">{isPatErr}</div>
			</div>
			<div className="form__item"> 
				<div>Дата рождения</div>
				<input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required/>
			</div>
			<NavLink to="emailpassform">
			<button type="button" className="submit__btn" disabled={!validateForm()} >Далее</button>
			</NavLink>
		</form>
	);
}

export default NameForm;