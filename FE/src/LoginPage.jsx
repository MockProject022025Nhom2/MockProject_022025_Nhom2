import { LoginForm } from "./components/LoginForm";
import { PropertyCard } from "./components/PropertyCard";


export default function LoginPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center ">
            <div className="flex flex-wrap w-full max-w-5xl bg-white shadow-lg rounded-lg">
                <div className="w-full md:w-1/2 p-10">
                    <LoginForm />
                </div>
                <div className="w-full md:w-1/2 p-10 flex justify-center bg-[#F4F0FE]">
                    <PropertyCard />
                </div>
            </div>
        </div>
    );
}


