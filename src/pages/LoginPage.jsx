// import React, { useState , useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { FaGoogle } from "react-icons/fa";
// import {
//   Select,
//   Option,
//   Spinner,
//   Input,
//   Alert,
//   Typography
// } from "@material-tailwind/react";

// function Icon({ type }) {
//   return type === "success" ? (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-6 w-6"
//     >
//       <path
//         fillRule="evenodd"
//         d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
//         clipRule="evenodd"
//       />
//     </svg>
//   ) : (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-6 w-6"
//     >
//       <path
//         fillRule="evenodd"
//         d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
//         clipRule="evenodd"
//       />
//     </svg>
//   );
// }

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const imgg = " ";

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [role, setrole] = useState("");

//   useEffect(() => {
//     if (success || error) {
//       const timer = setTimeout(() => {
//         setSuccess(null);
//         setError(null);
//       }, 3000); // Adjust the duration as needed

//       return () => clearTimeout(timer); // Cleanup timer on component unmount
//     }
//   }, [success, error]);

//   const handleRegisterClick = () => {
//     navigate("/signup"); // Replace with your actual sign-up route
//   };

//   const handleSubmit = async (e) => {
//     console.log("Form is being submitted"); // Log form submission
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     // Validate the form before submission
//     if (!email || !password || !role) {
//       console.error("Validation failed: All fields are required.");
//       setError("All fields are required.");
//       setLoading(false);
//       return;
//     }

//     try {
//       console.log("Sending login request...");
//       const loginResponse = await axios.post(
//         "http://localhost:8000/auth/login",
//         {
//           email,
//           password,
//           role,
//         },
//         { withCredentials: true }
//       );
//       setSuccess(loginResponse.data)
//       console.log("Login successful:", loginResponse.data); // Log success response
//     } catch (error) {
//       console.error("Login error:", error); // Log the error object
//       console.log("Error status code:", error.response?.status);
//       console.log("Error message:", error.message);
//       const errorMessage = error.response?.data?.error || "An error occurred"
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//     {error && (
//       <Alert
//         open={true}
//         onClose={() => setError(null)}
//         icon={<Icon type="error" />}
//         className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md"
//       >
//         <Typography variant="h5" color="white">
//           Error
//         </Typography>
//         <Typography color="white" className="mt-2 font-normal">
//           {error}
//         </Typography>
//       </Alert>
//     )}
//     {success && (
//       <Alert
//         open={true}
//         onClose={() => setSuccess(null)}
//         icon={<Icon type="success" />}
//         className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md"
//       >
//         <Typography variant="h5" color="white">
//           Success
//         </Typography>
//         <Typography color="white" className="mt-2 font-normal">
//           {success}
//         </Typography>
//       </Alert>
//     )}
//     <div className="w-full h-screen flex flex-col lg:flex-row">
//       <div className="hidden lg:flex relative w-1/2 h-full flex-col">
//         <div className="absolute top-[20%] left-[10%] flex flex-col">
//           <h1 className="text-4xl text-white font-bold my-4">
//             Empowering Your Business for a Brighter Future
//           </h1>
//           <p className="text-xl text-white font-semibold">
//             Partner with RIC Group to unlock innovative IT solutions that drive
//             success and growth. Together, we create lasting impact.
//           </p>
//         </div>

//         <img src={imgg} className="w-full h-full object-cover" />
//       </div>

//       <div className="w-full lg:w-1/2 h-full  flex flex-col p-6 lg:p-10 justify-center items-center">
//         <h1 className="text-lg lg:text-xl text-black dark:text-white font-semibold mb-4">
//           {/* Optional heading */}
//         </h1>

//         <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col">
//           <div className="w-full flex flex-col mb-4">
//             <h3 className="text-xl lg:text-2xl font-semibold mb-2">Login</h3>
//             <p className="text-sm mb-2">
//               Welcome Back! Please enter your details
//             </p>
//           </div>

//           <div className="w-full flex flex-col gap-4">
//             {" "}
//             {/* Added gap here */}
//             <Select
//               label="Select Type"
//               value={role}
//               color="green"
//               onChange={(value) => {
//                 console.log("Role selected:", value); // Log role selection
//                 setrole(value);
//               }}
//               className="mb-4 text-black dark:text-white"
//             >
//               <Option value="User">User</Option>
//               <Option value="Employee">Employee</Option>
//               <Option value="Admin">Admin</Option>
//             </Select>
//             <Input
//               type="email"
//               label="Email"
//               color="green"
//               value={email}
//               onChange={(e) => {
//                 console.log("Email input:", e.target.value); // Log email input
//                 setEmail(e.target.value);
//               }}
//               className="mb-4 text-black dark:text-white"
//               required
//             />
//             <Input
//               type="password"
//               label="Password"
//               color="green"
//               value={password}
//               onChange={(e) => {
//                 console.log("Password input:", e.target.value); // Log password input
//                 setPassword(e.target.value);
//               }}
//               className="mb-4 text-black dark:text-white"
//               required
//             />
//             <div className="w-full flex items-center justify-between my-2">
//               <div className="flex items-center">
//                 <input type="checkbox" className="w-4 h-4 mr-2" />
//                 <p className="text-sm">Remember me for 30 days</p>
//               </div>

//               <p className="text-sm  cursor-pointer underline underline-offset-2 font-bold">
//                 Forgot Password?
//               </p>
//             </div>
//             <div className="w-full flex flex-col my-4">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full my-2 font-semibold text-white bg-black rounded-md py-2 text-sm flex items-center justify-center cursor-pointer"
//               >
//                 {loading ? <Spinner className="h-2px w-2px" /> : "Log in"}
//               </button>
//               <button
//                 onClick={handleRegisterClick}
//                 className="w-full my-2 font-semibold text-black bg-white border-2 border-black rounded-md py-2 text-sm flex items-center justify-center cursor-pointer"
//               >
//                 Register
//               </button>
//             </div>
//             <div className="w-full flex items-center justify-center relative py-2 mb-7">
//               <div className="w-full h-[1px] bg-black/40 dark:bg-fontColor-dark"></div>
//               <p className="text-lg absolute text-black dark:text-white bg-bgColor dark:bg-bgColor-dark">
//                 or
//               </p>
//             </div>
//           </div>

//           <div className="w-full my-2 font-semibold text-black bg-white border-2 border-black rounded-md py-2 text-sm flex items-center justify-center cursor-pointer">
//             <FaGoogle className="h-5 m-1" /> Sign In With Google
//           </div>
//         </form>

//         <div className="w-full flex items-center justify-center mt-4">
//           <p className="text-sm font-normal text-black dark:text-fontColor-dark">
//             Don't have an account?{" "}
//             <span className="font-semibold underline underline-offset-2 cursor-pointer dark:text-fontColor-dark">
//               Signup for free
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default LoginPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import {
  Select,
  Option,
  Spinner,
  Input,
  Alert,
  Typography,
} from "@material-tailwind/react";

function Icon({ type }) {
  return type === "success" ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const LoginPage = () => {
  const navigate = useNavigate();
  const imgg = " ";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [role, setrole] = useState("");

  useEffect(() => {
    if (success) {
      navigate(""); // Navigate to home page on success
    }

    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 3000); // Adjust the duration as needed

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [success, error, navigate]);

  const handleRegisterClick = () => {
    navigate("/signup"); // Replace with your actual sign-up route
  };

  const handleSubmit = async (e) => {
    console.log("Form is being submitted"); // Log form submission
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Validate the form before submission
    if (!email || !password || !role) {
      console.error("Validation failed: All fields are required.");
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      console.log("Sending login request...");
      const loginResponse = await axios.post(
        "http://localhost:8000/auth/login",
        {
          email,
          password,
          role,
        },
        { withCredentials: true }
      );
      setSuccess(loginResponse.data);
      console.log("Login successful:", loginResponse.data);
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error); // Log the error object
      console.log("Error status code:", error.response?.status);
      console.log("Error message:", error.message);
      const errorMessage = error.response?.data?.error || "An error occurred";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <Alert
          open={true}
          onClose={() => setError(null)}
          icon={<Icon type="error" />}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md"
        >
          <Typography variant="h5" color="white">
            Error
          </Typography>
          <Typography color="white" className="mt-2 font-normal">
            {error}
          </Typography>
        </Alert>
      )}
      {success && (
        <Alert
          open={true}
          onClose={() => setSuccess(null)}
          icon={<Icon type="success" />}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md"
        >
          <Typography variant="h5" color="white">
            Success
          </Typography>
          <Typography color="white" className="mt-2 font-normal">
            {success}
          </Typography>
        </Alert>
      )}
      <div className="w-full h-screen flex flex-col lg:flex-row">
        <div className="hidden lg:flex relative w-1/2 h-full flex-col">
          <div className="absolute top-[20%] left-[10%] flex flex-col">
            <h1 className="text-4xl text-white font-bold my-4">
              Empowering Your Business for a Brighter Future
            </h1>
            <p className="text-xl text-white font-semibold">
              Partner with RIC Group to unlock innovative IT solutions that
              drive success and growth. Together, we create lasting impact.
            </p>
          </div>

          <img src={imgg} className="w-full h-full object-cover" />
        </div>

        <div className="w-full lg:w-1/2 h-full  flex flex-col p-6 lg:p-10 justify-center items-center">
          <h1 className="text-lg lg:text-xl text-black dark:text-white font-semibold mb-4">
            {/* Optional heading */}
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col"
          >
            <div className="w-full flex flex-col mb-4">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">Login</h3>
              <p className="text-sm mb-2">
                Welcome Back! Please enter your details
              </p>
            </div>

            <div className="w-full flex flex-col gap-4">
              {" "}
              {/* Added gap here */}
              <Select
                label="Select Type"
                value={role}
                color="green"
                onChange={(value) => {
                  console.log("Role selected:", value); // Log role selection
                  setrole(value);
                }}
                className="mb-4 text-black dark:text-white"
              >
                <Option value="User">User</Option>
                <Option value="Employee">Employee</Option>
                <Option value="Admin">Admin</Option>
              </Select>
              <Input
                type="email"
                label="Email"
                color="green"
                value={email}
                onChange={(e) => {
                  console.log("Email input:", e.target.value); // Log email input
                  setEmail(e.target.value);
                }}
                className="mb-4 text-black dark:text-white"
                required
              />
              <Input
                type="password"
                label="Password"
                color="green"
                value={password}
                onChange={(e) => {
                  console.log("Password input:", e.target.value); // Log password input
                  setPassword(e.target.value);
                }}
                className="mb-4 text-black dark:text-white"
                required
              />
              <div className="w-full flex items-center justify-between my-2">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p className="text-sm">Remember me for 30 days</p>
                </div>

                <p className="text-sm  cursor-pointer underline underline-offset-2 font-bold">
                  Forgot Password?
                </p>
              </div>
              <div className="w-full flex flex-col gap-4 mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-white bg-green-500 hover:bg-green-700 transition-all duration-300 rounded-lg flex justify-center items-center"
                >
                  {loading ? (
                    <Spinner className="h-6 w-6 text-white" />
                  ) : (
                    "Sign in"
                  )}
                </button>

                <button
                  type="button"
                  className="w-full px-4 py-3 text-black dark:text-white bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-900 transition-all duration-300 rounded-lg flex justify-center items-center"
                >
                  <FaGoogle className="mr-2" />
                  Sign in with Google
                </button>
              </div>
              <div className="w-full flex items-center justify-center mt-4">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <span
                    className="text-green-500 cursor-pointer font-bold"
                    onClick={handleRegisterClick}
                  >
                    Sign Up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
