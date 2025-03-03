import { useState } from "react";
import iconGG from "../../assets/all-images/iconGG.png";
import logoWebsite from "../../assets/all-images/logoWeb.png";
import { Link } from "react-router-dom";


const RegisterForm = ({ onRegister }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("onRegister:", onRegister);
        if (typeof onRegister !== "function") {
            console.error("onRegister is not a function");
            return;
        }
        onRegister({ name, email, password });
    };    


    return (
        <form onSubmit={handleSubmit} className="register-form">
            <div className="register-form__header">
                <img className="register-form__logo" src={logoWebsite} alt="" />
            </div>
            <div className="register-form__body">
                <h2>Welcome back</h2>
                <p className="register-form__decs">Welcome back! Please enter your details.</p>

                <div className="register-form__input">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Full Name"
                        onChange={(e) => setName(e.target.value)}
                    />
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

                <p className="register-form__chars">Must be at least 8 characters</p>

                <div className="register-form__checkbox">
                    <input type="checkbox" />
                    <label>I am a property manager </label>
                </div>

                <button type="submit" className="register-btn">Register</button>

                <button className="google-register">
                    <img className="google-register__img" src={iconGG} alt="Google Icon" />
                    Continue with Google
                </button>

                <p className="signup-text">
                    Already have an account? <Link to='/'>Login</Link>
                </p>
            </div>
        </form>
    );
};

export default RegisterForm;
