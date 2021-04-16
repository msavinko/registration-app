import React from 'react';
import './RegForm.css';


const RegForm = () => {
	

  return (
    <div className="reg">
		<h1>Форма регистрации</h1>
		<nav className="ret__tab">
			<span className="tab">Персональные данные</span>
			<span className="tab">Электронная почта и пароль</span>
		</nav>
    </div>
  );
}

export default RegForm;