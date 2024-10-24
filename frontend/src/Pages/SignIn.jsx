import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/SL-122222-54830-23.jpg";
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebaseConfig";
import { useForm } from "react-hook-form";
import toastr from "toastr";

const SignIn = () => {
  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const {register, handleSubmit, formState: { errors }} = useForm();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (user) {
    navigate("/");
  }

  const onSubmit = (data) => {
    if(signInWithEmailAndPassword(data.email, data.password)){
      toastr.success("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }else{
      toastr.error("Login failed");
    }
  }

  return (
    <div className="flex min-h-screen dark:bg-neutral">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center bg-blue-500 dark:bg-gray-900">
        <div className="text-white text-4xl font-bold">
          <img src={img} alt="" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-gray-100 dark:bg-violet-200">
        <form className="bg-white p-8 rounded-lg shadow-md w-80 dark:bg-black" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 dark:text-white"
          >
            Login
          </button>

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
        {/* Create a Login with Facebook Button with Facebook Logo */}
        <div className="mt-4">
            <button className="w-full bg-gray-100 p-2 rounded hover:bg-gray-200 transition duration-200 text-black dark:text-gray-900" onClick={()=> signInWithGoogle()}>
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Facebook Logo"
                className="w-8 h-8 inline-block mr-2"
              />
              Login with Google
            </button>
          </div>
      </div>
    </div>
  );
};

export default SignIn;
