import React, { useContext } from 'react'
import { AuthContext } from './App';


const fakeUser = {username: 'nice789', fullname: 'เต้า หมิงซื่อ'};


function LoingBox() {

    const {auth, setAuth} = useContext(AuthContext);

    function loinSubmit(event) {
        event.preventDefault();
        setAuth(fakeUser);
    }

    function logoutSubmit() {
        setAuth(null)
    }


    if (!!auth) {
        return (
            <div>
                <p>Auth username = {auth.username}</p>
                <p>Auth fullname = {auth.fullname}</p>
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
