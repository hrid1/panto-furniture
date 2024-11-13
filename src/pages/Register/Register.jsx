import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // success and error msg
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  //   get from context
  const { createUser } = useContext(AuthContext);
  //   console.log(authInfo);

  const handleRegister = (event) => {
    event.preventDefault();
    createUser(email, password)
      .then((user) => {
        console.log(user);
        setSuccess(true);
        // success
        Swal.fire({
          title: "Congratulation!",
          text: "You account created successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1200,
        });
      })
      .catch((error) => {
        setError(error.message);
        // for error
        Swal.fire({
            title: "Opps!",
            text: "You account created faild!",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
          });
      });
  };

  console.log(email, password);

  return (
    <div className="flex items-center justify-center  ">
      <form
        onSubmit={handleRegister}
        className="w-[420px] backdrop-blur-sm px-8 py-4 rounded-lg space-y-4 mb-4 border"
      >
        <h2 className="text-2xl font-bold text-center my-2">
          Register Your Account
        </h2>

        <div>
          <label className="font-semibold text-lg" htmlFor="email">
            User Name
          </label>
          <br />
          <input
            className="w-full p-1.5 rounded mt-1 outline-none"
            type="text"
            name="username"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className="font-semibold text-lg" htmlFor="password">
            Image url
          </label>
          <br />
          <input
            className="w-full p-1.5 rounded mt-1 outline-none"
            type="link"
            name="img-link"
            placeholder="Enter image link"
          />
        </div>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          {error && <p className="text-red-600">{error}</p>}
         
        </div>

        <div className="flex items-center justify-center">
          <button className="w-2/3 text-center rounded-md bg-primary py-2 text-white font-semibold my-2">
            Register
          </button>
        </div>

        <p className="text-orange-500 text-sm font-semibold">
          Don&apos;t have any account ?{" "}
          <span>
            {" "}
            <Link className="underline" to="/auth">
              Login
            </Link>
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
