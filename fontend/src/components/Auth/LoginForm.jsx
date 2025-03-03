import { useState } from "react";
import iconGG from "../../assets/all-images/iconGG.png";
import logoWebsite from "../../assets/all-images/logoWeb.png";
import { Link } from "react-router-dom";


const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="login-form__header">
                <img className="login-form__logo" src={logoWebsite} alt="" />
            </div>
            <div className="login-form__body">
                <h2>Welcome back</h2>
                <p className="login-form__decs">Welcome back! Please enter your details.</p>

                <div className="login-form__input">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="hi@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <div className="password-container">
                        <input
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="eye-icon">👁</span>
                    </div>
                </div>

                <a href="#" className="forgot-password">Forgot Password?</a>

                <button type="submit" className="login-btn">Login</button>

                <button className="google-login">
                    <img className="google-login__img" src={iconGG} alt="Google Icon" />
                    Continue with Google
                </button>

                <p className="signup-text">
                    Don't have an account? <Link to='/register'>Sign up for free</Link>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
