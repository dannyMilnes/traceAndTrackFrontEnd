import React from 'react';
import { useForm } from 'react-hook-form';

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
                <label>Login ID</label>
                <input className="field" type="text" placeholder="" name="login-id" ref={register} />
                <label>Password</label>
                <input className="field" type="password" placeholder="" name="password" ref={register({ required: "Password is invalid", minLength: 8 })} />
                <input className="btn" type="submit" />
                {errors.password && <p>{errors.password.message}</p>}
            </form>
        </div>

    );
}

export default Login;