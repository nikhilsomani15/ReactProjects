import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase"; // make sure this is correct path
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useDispatch } from 'react-redux';
import { displayName } from '../../features/CartSlice';
function Login() {
    const dispatch=useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let user
    const signIn = (e) => {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user=userCredential.user.email
                const userName=user.split('@')
                dispatch(displayName(userName[0]))
                navigate('/');   // redirect to home
            })
            .catch((err) => alert(err.message));
    }

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/');   // redirect to home
            })
            .catch((err) => alert(err.message));
    }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <StorefrontIcon className="login__logoImage" fontSize="large" />
                    <h2 className="login__logoTitle">eSHOP</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick={(e)=>signIn(e)}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={(e)=>register(e)}>Create your eShop Account</button>
            </div>
        </div>
    )
}


export default Login;