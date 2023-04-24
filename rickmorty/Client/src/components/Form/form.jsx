import style from "./form.module.css"
import React from 'react'
import validate from './validation'



export default function Forms(props) {
    const [userData, setUserData] = React.useState({
     username: '', 
     password: '' });
    const handleInputChange =(event)=>{
        const {name,value}=event.target
        setUserData({...userData,[name]:value})
        setErrors(
            validate({
               ...userData,
               [name]: value,
            })
         );
    }

    const [errors,setErrors]= React.useState({
        username:'',
        password:'',
        
        }
        )
       
        const handleSubmit =(event) => {
            event.preventDefault();
            props.login(userData)

        }

    return (
        
        <div className={style.form}>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                    <input
                    className={errors.username && style.warning}
                    onChange={handleInputChange}
                    id='username'
                    htmlFor='username'
                    name='username'
                    placeholder="ingrese su usuario"
                    type="text"
                    value={userData.username}>
                    </input>
                    <p className='danger'>{errors.username}</p>
                    <label>Password</label>
                    <input
                    className={errors.password && style.warning }
                    onChange={handleInputChange}
                    id='password'
                    htmlFor='password'
                    name='password'
                    placeholder="ingrese su password"
                    type="password"
                    value={userData.password}
                    ></input>
                     <p className='danger'>{errors.password}</p>
                    <button className={style.login}>Login</button>
            


            </form>
            </div>


    )
}