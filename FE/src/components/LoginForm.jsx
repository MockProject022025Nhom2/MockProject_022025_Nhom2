import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-full max-w-sm bg-white p-8 ">
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-500 mt-1">Welcome back! Please enter your details.</p>

            {/* Email Field */}
            <div className="mt-6 text-left">
                <label className="block text-gray-700 font-medium text-sm mb-2">Email</label>
                <input
                    type="email"
                    placeholder="hi@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Password Field */}
            <div className="mt-4 text-left">
                <label className="block text-gray-700 font-medium text-sm mb-2">Password</label>
                <div className="relative">
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <FiEye className="absolute right-3 top-3 text-gray-500 cursor-pointer" />
                </div>
                <a href="#" className="text-indigo-500 text-sm mt-2 inline-block">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg">
                Login
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
                <div className="flex-1 h-[1px] bg-gray-300"></div>
                <span className="mx-3 text-gray-500 text-sm">or</span>
                <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* Google Login Button */}
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium bg-white hover:bg-gray-100">
                <FaGoogle className="text-lg" />
                Continue with Google
            </button>

            {/* Signup Link */}
            <p className="text-center mt-6 text-gray-600 text-sm">
                Don’t have an account? <a href="#" className="text-indigo-500 font-semibold">Sign up for free</a>
            </p>
        </div>
    );
};
