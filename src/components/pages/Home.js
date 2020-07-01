import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="app-container">
            <header className="page-title">
                Vendor Test & Trace
            </header>

            <button className="btn">
                <Link to="/login">Log In</Link>
            </button>
            <button className="btn">
                <Link to="/register">Register</Link>
            </button>
        </div>
    );
}

export default Home;
