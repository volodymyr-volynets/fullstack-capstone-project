import React from 'react';
export default function Navbar() {
    const loggedin = sessionStorage.getItem('auth-token') ? 'Logged In' : 'Not Logged In';
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">GiftLink</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/home.html">Home</a> {/* Link to home.html */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/app">Gifts</a> {/* Updated Link */}
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/app/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/app/register">Register</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/app/profile">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/app/search">Search</a> {/* Updated Link */}
                    </li>
                </ul>
            </div>
            <div style={{textAlign: 'right'}}>
                {loggedin}
            </div>
        </nav>
    );
}