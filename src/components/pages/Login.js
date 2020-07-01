import React from 'react';
import useForm from 'react-hook-form';

function Login() {
    // const { register, handleSubmit, errors } = useForm();

    return (
        <form>
            <input type="text" placeholder="Login ID" name="login-id" />
            <input type="password" placeholder="Password" name="password" />
            <input type="submit" />
        </form>

        // <div className="App">
        //     <header className="App-header">
        //         Log In
        //     </header>
        // </div>

    );
}

export default Login;