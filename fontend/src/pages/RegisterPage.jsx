import RegisterForm from "../components/Auth/RegisterForm";
import "../css/register.css";
import imgHouse from "../assets/all-images/house.png";
import imgBackGround from "../assets/all-images/background_site.png";

const RegisterPage = () => {
    const handleRegister = (credentials) => {
        console.log("User register in:", credentials);
        alert('Đăng kí thành công');
    };

    return (
        <div className="register-page">
            <div className="register-container">
            <RegisterForm onRegister={handleRegister} />
            </div>
            <div className="register-side-form">
                <img className="register-side-background" src={imgBackGround} alt="" />
                <div className="register-side-image">
                    <div className="property-card">
                        <img src={imgHouse} alt="Property" />
                        <span className="badge">
                            <i class="fa-solid fa-star"></i>
                            POPULAR
                        </span>
                        <div className="property-card-heading">
                            <div>
                                <h3>Beverly Springfield</h3>
                                <p>2821 Sevilla, Palm Harbor, TX</p>
                            </div>
                            <div className="property-heart">
                                <i class="fa-solid fa-heart"></i>
                            </div>
                        </div>
                        <div className="property-info">
                            <span>
                                <i class="fa-solid fa-bed"></i>
                                4 Beds
                            </span>
                            <span>
                                <i class="fa-solid fa-bath"></i>
                                2 Bathrooms
                            </span>
                            <span>
                                <i class="fa-solid fa-ruler-vertical"></i>
                                6×7.5 m²
                            </span>
                        </div>
                        <div className="rent-price">
                            <div>
                                <p className="rent-price__title">Rent Sale</p>
                                <p className="rent-price__number"><span>$2,700</span>/month</p>
                            </div>
                            <button className="apply-btn">
                                <i class="fa-solid fa-file-invoice"></i>
                                Apply now
                                <i class="fa-solid fa-angle-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
