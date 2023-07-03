import {createContext , useEffect, useState} from 'react'
import './App.css';
import LoginArea from './LoginArea';

const fakeUser = {username: 'nice789', fullname: 'เต้า หมิงซื่อ'};

const AuthContext = createContext();

function App() {

    const [auth, setAuth] = useState(null);
    
    return (

        <AuthContext.Provider value={{auth, setAuth}}>
            <section className='app-section'>
                <div className='app-container'>
                    <LoginArea />
                </div>
            </section>
        </AuthContext.Provider>
    );


}


export { AuthContext };
export default App;
