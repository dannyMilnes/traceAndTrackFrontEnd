import React from 'react';
import { useForm } from 'react-hook-form';

function Register() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="app-container">
            <header className="page-title">
                Register Venue
            </header>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-fields">
                    <div className="form-field form-field--50">
                        <label for="venueName">Venue Name</label>
                        <input id="venueName" type="text" placeholder="" name="venueName" />
                    </div>
                    <div className="form-field form-field--50">
                        <label for="username">Username</label>
                        <input id="username" type="text" placeholder="" name="username" />
                    </div>
                    <div className="form-field form-field--50">
                        <label for="email">E-Mail</label>
                        <input id="email" type="email" placeholder="" name="email" />
                    </div>
                    <div className="form-field form-field--50">
                        <label for="confirmEmail">Confirm E-Mail</label>
                        <input id="confirmEmail" type="email" placeholder="" name="confirmEmail" />
                    </div>
                    <div className="form-field form-field--50">
                        <label for="password">Password</label>
                        <input id="password" type="password" placeholder="" name="password" />
                    </div>
                    <div className="form-field form-field--50">
                        <label for="confirmPassword">Confirm Password</label>
                        <input id="confirmPassword" type="password" placeholder="" name="confirmPassword" />
                    </div>
                </div>

                <div className="form-fields">
                    <div className="form-field form-field--50">
                        <label for="venueName">Venue Name</label>
                        <input id="venueName" type="text" placeholder="" name="venueName" />
                    </div>
                </div>

                <div className="form__submit">
                    <input className="btn" type="submit" value="Submit" />
                </div>
            </form>
        </div>

    );
}

export default Register;