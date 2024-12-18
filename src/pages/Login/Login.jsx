import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  // login function
  const { loginUser, Toast } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // handle error and success
  const [error, setError] = useState("");

  // handle form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    loginUser(formData.email, formData.password)
      .then((result) => {
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
          timerProgressBar: false,
        });
        // navigate upter login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
        Toast.fire({
          icon: "error",
          position: "top",
          title: "User Login Failed !",
          timerProgressBar: false,
        });
      });
  };

  return (
    <div className="flex items-center justify-center  ">
      <form
        onSubmit={handleSubmit}
        className="w-[420px] backdrop-blur-sm px-8 py-4 rounded-lg space-y-4 mb-4 bg-black bg-opacity-10"
      >
        <h2 className="text-2xl font-bold text-center my-2">
          Login Your Account
        </h2>

        <div>
          <label className="font-semibold text-lg" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="w-full p-1.5 rounded mt-1 outline-none"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="font-semibold text-lg" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="w-full p-1.5 rounded mt-1 outline-none"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>{error && <p className="text-red-600">{error}</p>}</div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-2/3 text-center rounded-md bg-primary py-2 text-white font-semibold my-2"
          >
            Login
          </button>
        </div>

        <p className="text-orange-500 text-sm font-semibold">
          Don&apos;t have any account ?{" "}
          <span>
            {" "}
            <Link className="underline" to="/auth/register">
              Register
            </Link>
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
