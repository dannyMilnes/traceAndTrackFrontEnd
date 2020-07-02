import React from 'react';
import { useForm } from 'react-hook-form';
import "./Login.scss"

function Login() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="app-container">
            <header className="page-title">
                Log In
        </header>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="field" type="text" placeholder="Login ID" name="login-id" ref={register} />
                <input className="field" type="password" placeholder="Password" name="password" ref={register({ required: "Password is invalid", minLength: 8 })} />
                <input className="btn" type="submit" />
                {errors.password && <p>{errors.password.message}</p>}
            </form>
        </div>

        // <div className="App">
        //     <header className="App-header">
        //         Log In
        //     </header>
        // </div>

    );
}

export default Login;