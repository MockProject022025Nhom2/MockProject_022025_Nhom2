import React from "react";
import ggIcon from "../../assets/img/google-icon.png";
import houseImg from "../../assets/img/house-image.jpg";

const Login = () => {
    return (
        <div className="bg-gray-100 flex justify-center items-center min-h-screen">
            <div className="flex bg-white shadow-lg rounded-xl w-3/4 max-w-5xl">
                {/* Login Section */}
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Welcome back</h2>
                    <p className="text-gray-500 mb-6">Welcome back! Please enter your details.</p>
                    <form>
                        <input type="email" placeholder="Email" className="w-full p-3 border rounded mb-3" />
                        <input type="password" placeholder="Password" className="w-full p-3 border rounded mb-3" />
                        <a href="#" className="text-blue-500 text-sm float-right mb-3">Forgot Password?</a>
                        <button className="w-full bg-purple-600 text-white p-3 rounded">Login</button>
                        <button className="w-full border p-3 rounded mt-3 flex justify-center items-center">
                            <img src={ggIcon} className="w-5 h-5 mr-2" alt="Google Icon" /> Continue with Google
                        </button>
                    </form>
                    <p className="mt-4 text-center text-sm">Don't have an account? <a href="#" className="text-blue-500">Sign up for free</a></p>
                </div>
                {/* Real Estate Card */}
                <div className="w-1/2 p-8 bg-gray-50 flex flex-col justify-center items-center relative">
                    <div className="bg-white shadow-lg rounded-lg p-4 w-80">
                        <span className="bg-purple-600 text-white text-xs uppercase px-2 py-1 rounded-full">Popular</span>
                        <img src={houseImg} alt="House" className="w-full h-40 rounded-lg mt-3" />
                        <h3 className="text-lg font-bold mt-3">Beverly Springfield</h3>
                        <p className="text-gray-500 text-sm">2821 Sevilla, Palm Harbor, TX</p>
                        <div className="flex justify-between mt-3 text-sm">
                            <span>4 Beds</span>
                            <span>2 Bathrooms</span>
                            <span>6.7 sq.m</span>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-purple-600 font-bold text-lg">$2,700/month</span>
                            <button className="bg-purple-600 text-white px-4 py-2 rounded">Apply now</button>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-gray-500 text-center">By signing up, you agree to our <a href="#" className="text-blue-500">Terms of Use</a> & <a href="#" className="text-blue-500">Privacy Policy</a>.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;