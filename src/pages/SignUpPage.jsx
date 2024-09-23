import React, { useState, useEffect } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import axios from "axios";

// Ensure you also have the Icon component somewhere in your file or as a separate component
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

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Clear alert messages after a short period
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 3000); // Adjust the duration as needed

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [success, error]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate form
    if (!name || !email || !password || !agreeToTerms) {
      setError("Please fill in all fields and agree to the terms.");
      return;
    }

    // Reset error and success messages
    setError(null);
    setSuccess(null);
    console.log(name, email, password);

    // Make POST request to your backend API
    try {
      const response = await axios.post("http://localhost:8000/auth/signup", {
        name,
        email,
        password,
      });

      setSuccess("Registration successful!");
      console.log("Response:", response.data);
    } catch (error) {
      const errorMessage = error.response?.data?.error || "An error occurred";
      setError(errorMessage);
      console.error("Error:", error);
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
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-900">
        <Card
          color="transparent"
          shadow={false}
          className="p-8 w-full max-w-md bg-white dark:bg-gray-800"
        >
          <Typography
            variant="h4"
            color="blue-gray"
            className="dark:text-white text-center"
          >
            Sign Up
          </Typography>
          <Typography
            color="gray"
            className="mt-1 font-normal text-center dark:text-gray-400"
          >
            Nice to meet you! Enter your details to register.
          </Typography>

          <form className="mt-8 mb-2 w-full" onSubmit={handleSignUp}>
            <div className="mb-4 flex flex-col gap-6">
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 dark:text-white"
              >
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-gray-100 dark:text-fontColor-dark"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 dark:text-white"
              >
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-gray-100 dark:text-fontColor-dark"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography
                variant="h6"
                color="blue-gray"
                className="-mb-3 dark:text-white"
              >
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 dark:focus:!border-gray-100"
                labelProps={{
                  className: "before:content-none after:content-none ",
                }}
              />
            </div>
            <Checkbox
              checked={agreeToTerms}
              onChange={() => setAgreeToTerms(!agreeToTerms)}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal dark:text-gray-300"
                >
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-200"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button type="submit" className="mt-6" fullWidth>
              Sign Up
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal dark:text-gray-400"
            >
              Already have an account?{" "}
              <a
                href="/login"
                className="font-medium text-gray-900 dark:text-gray-200"
              >
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </>
  );
}
