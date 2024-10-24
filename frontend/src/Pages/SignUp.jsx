import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/2402277.jpg";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { updateProfile } from "firebase/auth";  // Import the updateProfile method
import auth from "../firebaseConfig";
import toastr from 'toastr';
import { useEffect } from "react";

const SignUp = () => {
  
  const navigate = useNavigate();
  
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(data.email, data.password);
      if (userCredential) {
        // Update profile with the display name
        await updateProfile(userCredential.user, {
          displayName: data.name,
        });

        toastr.success("User created successfully");

        // Delay navigation until the profile is updated
        setTimeout(() => {
          navigate("/sign-in");  // Redirect to sign-in page or home after
        }, 2000);
      }
    } catch (error) {
      toastr.error("User creation failed: " + error.message);
    }
  };

  // Watch for user updates and avoid redirecting too early
  useEffect(() => {
    if (user && user.displayName) {
      navigate("/");  // Now redirect to home after the name is updated
    }
  }, [user, navigate]);  // UseEffect runs when `user` or `navigate` changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center bg-green-500">
        <div className="text-white text-4xl font-bold">
          <img src={img} alt="" />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col items-center justify-center dark:bg-violet-200">
        <div className="bg-white p-8 rounded-lg shadow-md w-80 dark:bg-black">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl font-semibold mb-6 text-center text-black dark:text-white">
              Sign Up
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-white"
                placeholder="John Doe"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-white"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white"
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
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 dark:text-white"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 p-2 border border-gray-300 rounded w-full dark:text-white"
                placeholder="********"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  validate: (value) =>
                    value === document.getElementById("password").value ||
                    "The passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
            >
              Sign Up
            </button>

            <p className="mt-4 text-center text-gray-600 dark:text-white">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-green-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
          <div className="mt-4">
            <button className="w-full bg-gray-100 p-2 rounded hover:bg-gray-200 transition duration-200 dark:text-black" onClick={()=> signInWithGoogle()}>
              <img
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt="Google Logo"
                className="w-8 h-8 inline-block mr-2"
              />
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
