import React, { useContext } from 'react'
import { AuthContext } from './App';


const fakeUser = {username: 'nice789', fullname: 'เต้า หมิงซื่อ'};


function LoingBox() {

    const {authState, authDispatch} = useContext(AuthContext);

    function loinSubmit(event) {
        event.preventDefault();
        authDispatch({ type: 'login', payload: fakeUser})
    }

    function logoutSubmit() {
        authDispatch({ type: 'logout' });
    }


    if (!!authState) {
        return (
            <div>
                <p>Auth username = {authState.username}</p>
                <p>Auth fullname = {authState.fullname}</p>
                <p><button onClick={logoutSubmit}>Log out</button></p>
            </div>
        );
    }

    return (
        <form onSubmit={loinSubmit}>
            <p><input type='text' placeholder='username'></input></p>
            <p><input type='password' placeholder='password'></input></p>
            <p><button type='submit'>Log in</button></p>
        </form>
    );

    
}

export default LoingBox
