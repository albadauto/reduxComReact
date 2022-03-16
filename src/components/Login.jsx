/**
 * Redux é uma biblioteca para manipulação de estado na aplicação toda
 * Utilizamos um store para mandar todas as informações para lá e assim pegar elas de qualquer lugar da aplicação
 * 
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUser, logout, selectUser } from '../redux/userSlice';

const Login = () => {
    const dispatch = useDispatch(); //o useDispatch serve para disparmos o evento la no slice
    const state = useSelector(selectUser); //OU useSelector(state => state.user)

    console.log(state);

    function handleLogout(){
        dispatch(logout()); //disparamos a action de deslogar
    }

    const handleLogin = () => {
        dispatch(changeUser('Jose')); //disparamos a action de logar com o usuario "Jose"
    }

    return ( <button onClick={handleLogin}>Deslogar</button> );
}
 
export default Login;