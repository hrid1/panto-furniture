import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center  ">
      <form className="w-[420px] backdrop-blur-sm px-8 py-4 rounded-lg space-y-4 mb-4 border">
        <h2 className="text-2xl font-bold text-center my-2">
          Login Your Account
        </h2>

        <div>
          <label className="font-semibold text-lg" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="w-full p-1.5 rounded mt-1"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="font-semibold text-lg" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="w-full p-1.5 rounded mt-1"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-center">
          <button className="w-2/3 text-center rounded-md bg-primary py-2 text-white font-semibold my-2">
            Login
          </button>
        </div>

        <p className="text-gray-100 text-sm">
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
