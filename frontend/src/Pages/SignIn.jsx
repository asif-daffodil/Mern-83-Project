import { Link } from "react-router-dom";
import img from "../assets/images/SL-122222-54830-23.jpg";

const SignIn = () => {
  return (
    <div className="flex min-h-screen dark:bg-neutral">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center bg-blue-500 dark:bg-gray-900">
        <div className="text-white text-4xl font-bold">
          <img src={img} alt="" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100 dark:bg-violet-200">
        <form className="bg-white p-8 rounded-lg shadow-md w-80 dark:bg-black">
          <h2 className="text-2xl font-semibold mb-6 text-center text-black dark:text-white">
            Login
          </h2>

          <div className="mb-4">
            <label className="block text-black dark:text-white" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black dark:text-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-black dark:text-white"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-white"
              placeholder="********"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 dark:text-white"
          >
            Login
          </button>

          {/* Create a Login with Google Button with Google Logo */}
          <div className="mt-4">
            <button className="w-full bg-gray-100 p-2 rounded hover:bg-gray-200 transition duration-200 text-black dark:text-gray-900 ">
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google Logo"
                className="w-8 h-8 inline-block mr-2"
              />
              Login with Google
            </button>
          </div>

          {/* Create a Login with Facebook Button with Facebook Logo */}
          <div className="mt-4">
            <button className="w-full bg-gray-100 p-2 rounded hover:bg-gray-200 transition duration-200 text-black dark:text-gray-900">
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook Logo"
                className="w-8 h-8 inline-block mr-2"
              />
              Login with Facebook
            </button>
          </div>

          <p className="mt-4 text-center text-black dark:text-white">
            Don&apos;t have an account?{" "}
            <Link
              to="/sign-up"
              className="text-blue-500 hover:underline dark:text-white"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
