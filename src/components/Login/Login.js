import './Login.css'

import Card from '../UI/Card'
import Button from '../UI/Button'
import { useEffect, useState } from 'react'

const Login = () =>{
    const[enteredEmail, setEnteredEmail] = useState('')  
    const[enteredPassword, setEnteredPassword] = useState('')
    const[emailIsValid, setEmailIsValid] = useState()
    const[passwordIsValid, setPasswordIsValid] = useState()
    const[FormIsValid, setFormIsValid] = useState(false) 

    useEffect (() =>{
        const timeOut = setTimeout(() => {
            console.log('check form is valid')
            setFormIsValid(emailIsValid && passwordIsValid)
            console.log('checked')
    }, 500 )
        return () =>{
            clearTimeout(timeOut)
        } 
    },[emailIsValid, passwordIsValid])

    ///funktsioonid
    const emailChangeHandler = (event) =>{
        setEnteredEmail(event.target.value)
    }
    const passowrdChangeHandler = (event) =>{
        setEnteredPassword(event.target.value)
    } 
    const emailValidateHandler = () =>{
        setEmailIsValid(enteredEmail.includes('@'))
    } 
    const passwordValidateHandler = () =>{
        setPasswordIsValid(enteredPassword.length > 6)
    } 
    const submitHandler = (event) =>{
        event.preventDefault()
        props.onLogin(enteredEmail, enteredPassword)
    } 

    return(
        <Card className="login">
            <form onSubmit={submitHandler}>
                <div className={`control ${emailIsValid === false ? 'invalid' : ''}`}>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}  
                    onBlur={emailValidateHandler} 
                    ></input>
                </div>
                <div className={`control ${passwordIsValid === false ? 'invalid' : ''}`} >
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={enteredPassword}
                    onChange={passowrdChangeHandler}  
                    onBlur={passwordValidateHandler}
                    ></input>
                </div>
                <div className='actions'>
                    <Button
                    type="submit"
                    disabled={!FormIsValid} 
                    >Login</Button>
                </div>
            </form>
        </Card>
    )
} 
export default Login