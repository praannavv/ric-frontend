import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import Header from "./layouts/Header/Header.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
import LoadingSpinner from "./common/LoadingSpinner.jsx";
import Home from "./layouts/Home/Home.jsx";
import { useQuery } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage.jsx"; // Add this
import DarkModeToggle from "./utils/DarkModeToggle.jsx"; // Import DarkModeToggle
import Services from "./components/ServicePage/Services.jsx";
import Products from "./components/ProductPage/Products.jsx";
import ContactUs from "./components/HomePage/ContactUs.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import User from "./pages/User.jsx";
import Blog from "./components/Blog/Blog.jsx";
import BlogDetail from "./components/Blog/BlogDetail.jsx";
import DashBoard from "./components/DashboardPage/DashBoard.jsx";
import axios from "axios";
import ProtectRoute from "./utils/ProtectRoute.jsx";


function App() {
  const location = useLocation();

  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:8000/auth/me", {
          credentials: "include", // Ensure cookies are sent with the request
        });
        console.log("app", res);
        const data = await res.json();
        console.log(data);
        if (data.error) {
          return null;
        }
        if (!res.ok) {
          throw new Error(data.error);
        }
        return data;
      } catch (error) {
        console.log("app", error);
        throw new Error(error);
      }
    },
    retry: false,
  });

  console.log("authUser", authUser);
  if (isLoading) {
    // const savedMode = localStorage.getItem("darkMode") === "true";
    //const color = savedMode ? "white" : "black";
    const color = "black";
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner color={color} />
      </div>
    );
  }

  // const { data: authUser, isLoading } = useQuery({
  //   queryKey: ["authUser"],
  //   queryFn: async () => {
  //     try {
  //       const { data } = await axios.get("http://localhost:8000/auth/me");
  //       console.log(data);
  //       if (data.error) {
  //         return null;
  //       }
  //       return data;
  //     } catch (error) {
  //       console.log("app", error);
  //       throw new Error(error.response?.data?.error || error.message);
  //     }
  //   },
  //   retry: false,
  // });

  // if (isLoading) {
  //   const color = "black";
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <LoadingSpinner color={color} />
  //     </div>
  //   );
  // }
  const showHeaderFooter =
    location.pathname !== "/login" &&
    location.pathname !== "/signup" &&
    location.pathname !== "/user";

  return (
    <div className="min-h-screen bg-bgColor dark:bg-bgColor-dark text-fontColor dark:text-fontColor-dark">
      {showHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignUpPage />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />{" "}
          {/* Blog detail page */}
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blog />} />
          {/* <Route path="/announcement" element={<Services />} /> */}
          <Route path="/user" element={<User />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>
      {showHeaderFooter && <Footer />}

      {/* Add Dark Mode Toggle */}
    </div>
  );
}

export default App;
