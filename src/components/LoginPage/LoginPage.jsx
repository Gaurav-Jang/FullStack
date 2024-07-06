import { useState } from "react"; // hook
import { Link } from "react-router-dom"; // navigation
import axios from "axios"; // axios (get : post)
// import FullStack from "../../components/ApiEndPoints/FullStack";
// react icons
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import "../../components/LoginPage/Style.css";

const LoginPage = () => {
  // slider
  const [isActive, setIsActive] = useState(false);

  const toggleContainer = () => {
    setIsActive(!isActive);
  };

  const [data, setData] = useState({
    UserId: "",
    Name: "",
    Email: "",
    Password: "",
  });

  const setUserData = () => {
    const dataSet = {
      UserId: data.UserId,
      Name: data.Name,
      Email: data.Email,
      Password: data.Password,
    };

    // these are only temporary  beacuse api not working
    console.log(dataSet);
    alert("Data printed on console. Currently Api is not working");
    resetForm();

    // sending data to APIs endpoint using POST method
    axios
      .post(FullStack.BaseURL + FullStack.User.SetUser, dataSet) // api's endpoint
      .then((response) => {
        console.log(response.data);
        resetForm();
      })
      .catch((error) => {
        console.error(error.response ? error.response.data : error.message); // prints error message or error data came from api
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((data.Name === "", data.Email === "", data.Password === "")) {
      alert("Fill the Details Properly");
    } else {
      setUserData();
    }
  };

  // function to reset form data
  const resetForm = () => {
    setData({
      UserId: "",
      Name: "",
      Email: "",
      Password: "",
    });
  };

  return (
    <>
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        {/* sign-up */}
        <div className="font-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <Link to="#" className="icon">
                <FaGooglePlusG />
              </Link>
              <Link to="#" className="icon">
                <FaFacebookF />
              </Link>
              <Link to="#" className="icon">
                <FaGithub />
              </Link>
              <Link to="#" className="icon">
                <FaLinkedinIn />
              </Link>
            </div>
            <span>or use your email for sign-up</span>
            <input
              type="text"
              placeholder="Name"
              value={data.Name}
              name="Name"
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={data.Email}
              name="Email"
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={data.Password}
              name="Password"
              onChange={handleInputChange}
            />
            <button type="button" onClick={(toggleContainer, handleSubmit)}>
              Sign Up
            </button>
          </form>
        </div>

        {/* log-in */}
        <div className="font-container log-in">
          <form>
            <h1>Log In</h1>
            <div className="social-icons">
              <Link to="#" className="icon">
                <FaGooglePlusG />
              </Link>
              <Link to="#" className="icon">
                <FaFacebookF />
              </Link>
              <Link to="#" className="icon">
                <FaGithub />
              </Link>
              <Link to="#" className="icon">
                <FaLinkedinIn />
              </Link>
            </div>
            <span>or use your email and password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Link to="#">Forget Password</Link>
            <button type="button" onClick={handleSubmit}>
              Log In
            </button>
            <button
              className="register-btn"
              onClick={toggleContainer}
              id="register"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* slider */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={toggleContainer} id="login">
                Log In
              </button>
            </div>

            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button
                className="hidden"
                onClick={toggleContainer}
                id="register"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
