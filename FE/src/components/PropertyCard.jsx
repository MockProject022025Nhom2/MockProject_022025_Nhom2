import { FaBed, FaBath } from "react-icons/fa";
import { BsHouseDoor } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

export const PropertyCard = () => {
    return (
        <div className="bg-white p-5 rounded-2xl shadow-lg w-[380px]">
            {/* Hình ảnh */}
            <div className="relative">
                <img
                    src="../../public/img/download.jpg"
                    alt="House"
                    className="w-full h-48 object-cover rounded-lg"
                />
                <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                    POPULAR
                </span>
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                    <FiHeart className="text-gray-600" />
                </button>
            </div>

            {/* Thông tin nhà */}
            <h3 className="text-xl font-bold mt-3 text-gray-900 text-left">Beverly Springfield</h3>
            <p className="text-gray-500 text-sm text-left">2821 Sevilla, Palm Harbor, TX</p>

            {/* Tiện ích */}
            <div className="flex items-center justify-between text-gray-600 mt-3 text-sm">
                <span className="flex items-center gap-1"><FaBed /> 4 Beds</span>
                <span className="flex items-center gap-1"><FaBath /> 2 Bathrooms</span>
                <span className="flex items-center gap-1"><BsHouseDoor /> 6×7.5 m²</span>
            </div>

            {/* Giá và nút Apply */}
            <div className="bg-gray-100 p-4 rounded-lg mt-4 flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500">Rent Sale</p>
                    <span className="text-indigo-600 font-bold text-2xl">$2,700</span>
                    <span className="text-gray-500 text-sm"> /month</span>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Apply now
                </button>
            </div>

            {/* Powered by */}
            <div className="text-center text-gray-500 text-xs mt-5">
                <p>Powered by <span className="font-semibold text-indigo-600">Estatery</span></p>
                <p>
                    You agree to Estatery’s <a href="#" className="text-indigo-500">Terms of Use</a> & <a href="#" className="text-indigo-500">Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
};
