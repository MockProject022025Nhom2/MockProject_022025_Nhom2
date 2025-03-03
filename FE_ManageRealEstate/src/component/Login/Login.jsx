import React from 'react';
import './Login.css';
import themeLogin from '../../assets/images/login_theme.jpg';

const Login = () => {
    return (
        <div className="layout">
            {/* Login Section  */}
            <div className="login-container">
                <div className="login-box">
                    <div className="logo">
                        <div className="logo-dot"></div>
                        <span>Estatery</span>
                    </div>

                    <div className="login-form">
                        <h1>Welcome to Real Estate</h1>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" placeholder="hi@example.com" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <div className="password-field">
                                <input type="password" placeholder="Enter password" />
                                <button className="eye-button">👁️</button>
                            </div>
                            <div className="forgot-link">
                                <a href="#">Forgot Password?</a>
                            </div>
                        </div>

                        <button className="login-button">Login</button>

                        <p className="signup-text">
                            Don't have an account? <a href="#">Sign up for free</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Property Display Section */}
            <div className="property-section">
                <div className="property-card">
                    <div className="image-container">
                        <span className="popular-tag">Popular</span>
                        <img
                            src={themeLogin}
                            alt="Property"
                            className="property-image"
                        />
                        <button className="heart-button">❤️</button>
                    </div>

                    <div className="property-details">
                        <div className="property-header">
                            <h2>Beverly Springfield</h2>
                            <p className="address">2821 Sevilla, Palm Harbor, TX</p>
                        </div>

                        <div className="property-footer">
                            <div className="price-info">
                                <div className="rent-label">Rent Sale</div>
                                <div className="price">
                                    <span className="amount">$2,700</span>
                                    <span className="period">/month</span>
                                </div>
                            </div>
                            <button className="apply-button">Apply now →</button>
                        </div>
                    </div>
                </div>

                <div className="footer-text">
                    <p>Powered by <span className="estatery-icon">◆</span></p>
                    <p className="terms">
                        You agree to Estatery's Terms of Use & Privacy Policy. You don't need to consent as a condition of renting any property, or buying any other goods or services. Message/data rates may apply.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;