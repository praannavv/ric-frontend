// // Header.js
// import React from "react";
// import {
//   Navbar,
//   Collapse,
//   Button,
//   IconButton,
//   Typography,
//   Avatar,
// } from "@material-tailwind/react";
// import { CgProfile } from "react-icons/cg";
// import { useQuery } from "@tanstack/react-query";
// import {
//   RectangleStackIcon,
//   UserCircleIcon,
//   CommandLineIcon,
//   Squares2X2Icon,
//   ShoppingCartIcon,
//   CogIcon, // Importing icons for Product and Service
// } from "@heroicons/react/24/solid";
// import DarkModeToggle from "../../utils/DarkModeToggle.jsx";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom"; // Import Link for navigation

// function NavItem({ children, to }) {
//   return (
//     <li>
//       <Typography
//         as={Link} // Change `as` to Link
//         to={to} // Add `to` prop for navigation
//         variant="paragraph"
//         className="flex items-center gap-2 font-medium text-fontColor dark:text-fontColor-dark" // Dynamic font color
//       >
//         {children}
//       </Typography>
//     </li>
//   );
// }

// const Header = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen((cur) => !cur);

//   const { data: authUser } = useQuery({ queryKey: ["authUser"] });
//   console.log("Sample", authUser);
//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpen(false)
//     );
//   }, [authUser]);

//   return (
//     <Navbar
//       shadow={false}
//       fullWidth
//       className="sticky z-10 top-0 border-0 bg-transparent "
//     >
//       <div className="container mx-auto flex items-center justify-between">
//         <Link to="/">
//           <Typography className="text-lg font-bold text-fontColor dark:text-fontColor-dark cursor-pointer">
//             {/* Add dynamic font color */}
//             R-I-C
//           </Typography>
//         </Link>
//         <ul className="ml-10 hidden items-center gap-6 lg:flex">
//           <NavItem to="/pages">
//             <RectangleStackIcon className="h-5 w-5" />
//             Dashboard
//           </NavItem>
//           {/* <NavItem to="/about-us">
//             <Squares2X2Icon className="h-5 w-5" />
//             About Us
//           </NavItem> */}

//           <NavItem to="/blogs">
//             <CommandLineIcon className="h-5 w-5" />
//             Blog
//           </NavItem>
//           <NavItem to="/products">
//             <ShoppingCartIcon className="h-5 w-5" />
//             Product
//           </NavItem>
//           <NavItem to="/services">
//             <CogIcon className="h-5 w-5" />
//             Service
//           </NavItem>
//           {authUser ? (
//             <NavItem to="/account">
//               <UserCircleIcon className="h-5 w-5" />
//               Account
//             </NavItem>
//           ) : (
//             <></>
//           )}
//         </ul>
//         {authUser ? (
//           <div className="hidden items-center gap-2 lg:flex">
//             <DarkModeToggle />
//             <UserCircleIcon className="h-5 w-5  text-fontColor dark:text-fontColor-dark" />
//           </div>
//         ) : (
//           <div className="hidden items-center gap-4 lg:flex">
//             <Link to="/signup">
//               <Button
//                 variant="text"
//                 className="border-2 text-fontColor dark:text-fontColor-dark"
//               >
//                 Sign up
//               </Button>
//             </Link>
//             <Link to="/login">
//               <Button
//                 color="gray"
//                 className="text-white dark:bg-bgColor dark:text-fontColor"
//               >
//                 Log in
//               </Button>
//             </Link>
//             <DarkModeToggle />
//           </div>
//         )}

//         <div className="flex items-center lg:hidden ">
//           <DarkModeToggle className="ml-2" />
//           <IconButton
//             variant="text"
//             onClick={handleOpen}
//             className="ml-auto dark:text-fontColor-dark"
//           >
//             {open ? (
//               <XMarkIcon strokeWidth={2} className="h-6 w-6" />
//             ) : (
//               <Bars3Icon strokeWidth={2} className="h-6 w-6" />
//             )}
//           </IconButton>
//         </div>
//       </div>

//       <Collapse open={open}>
//         <div className="container mx-auto mt-3 border-t dark:border-blue-gray-50 border-gray-700 px-2 pt-4">
//           <ul className="flex flex-col gap-4">
//             <NavItem to="/pages">
//               <RectangleStackIcon className="h-5 w-5" />
//               Dashboard
//             </NavItem>

//             {/* <NavItem to="/about-us">
//               <Squares2X2Icon className="h-5 w-5" />
//               About Us
//             </NavItem> */}
//             <NavItem to="/blogs">
//               <CommandLineIcon className="h-5 w-5" />
//               Blog
//             </NavItem>
//             <NavItem to="/products">
//               <ShoppingCartIcon className="h-5 w-5" />
//               Product
//             </NavItem>
//             <NavItem to="/services">
//               <CogIcon className="h-5 w-5" />
//               Service
//             </NavItem>
//             {authUser ? (
//               <NavItem to="/account">
//                 <UserCircleIcon className="h-5 w-5" />
//                 Account
//               </NavItem>

//             ) : (
//               <></>
//             )}
//           </ul>

//           {authUser ? (
//             <></>
//           ) : (
//             <div className="mt-6 mb-4 flex items-center gap-4">
//               <Link to="/signup">
//                 <Button
//                   variant="text"
//                   className="border border-b text-fontColor dark:text-fontColor-dark"
//                 >
//                   {/* Add dynamic font color */}
//                   Sign up
//                 </Button>
//               </Link>
//               <Link to="/login">
//                 <Button
//                   color="gray"
//                   className="text-white  dark:bg-bgColor dark:text-fontColor"
//                 >
//                   {/* Add dynamic font color */}
//                   Log in
//                 </Button>
//               </Link>
//             </div>
//           )}
//         </div>
//       </Collapse>
//     </Navbar>
//   );
// };

// export default Header;
import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { CgProfile } from "react-icons/cg";
import { useQuery } from "@tanstack/react-query";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  ShoppingCartIcon,
  CogIcon, // Importing icons for Product and Service
} from "@heroicons/react/24/solid";
import axios from "axios";
import DarkModeToggle from "../../utils/DarkModeToggle.jsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate for navigation

function NavItem({ children, to }) {
  return (
    <li>
      <Typography
        as={Link}
        to={to}
        variant="paragraph"
        className="flex items-center gap-2 font-medium text-fontColor dark:text-fontColor-dark"
      >
        {children}
      </Typography>
    </li>
  );
}

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false); // State to manage user menu dropdown
  const navigate = useNavigate();
  const handleOpen = () => setOpen((cur) => !cur);

  const { data: authUser } = useQuery({ queryKey: ["authUser"] });
  console.log("Sample", authUser);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8000/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      window.location.reload();

      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, [authUser]);

  return (
    <Navbar
      shadow={false}
      fullWidth
      className="sticky z-10 top-0 border-0 bg-transparent "
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <Typography className="text-lg font-bold text-fontColor dark:text-fontColor-dark cursor-pointer">
            R-I-C
          </Typography>
        </Link>
        <ul className="ml-10 hidden items-center gap-6 lg:flex">
          <NavItem to="/dashboard">
            <RectangleStackIcon className="h-5 w-5" />
            Dashboard
          </NavItem>
          <NavItem to="/blogs">
            <CommandLineIcon className="h-5 w-5" />
            Blog
          </NavItem>
          <NavItem to="/products">
            <ShoppingCartIcon className="h-5 w-5" />
            Product
          </NavItem>
          <NavItem to="/services">
            <CogIcon className="h-5 w-5" />
            Service
          </NavItem>
          {authUser ? (
            <NavItem to="/account">
              <UserCircleIcon className="h-5 w-5" />
              Account
            </NavItem>
          ) : (
            <></>
          )}
        </ul>

        {authUser ? (
          <div className="hidden items-center gap-2 lg:flex relative">
            <DarkModeToggle />
            <UserCircleIcon
              className="h-5 w-5 text-fontColor dark:text-fontColor-dark cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle the dropdown
            />

            {/* Dropdown for user options (Logout) */}
            {dropdownOpen && (
              <div className="absolute right-0 top-8 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
                <Button
                  variant="text"
                  color="red"
                  className="w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden items-center gap-4 lg:flex">
            <Link to="/signup">
              <Button
                variant="text"
                className="border-2 text-fontColor dark:text-fontColor-dark"
              >
                Sign up
              </Button>
            </Link>
            <Link to="/login">
              <Button
                color="gray"
                className="text-white dark:bg-bgColor dark:text-fontColor"
              >
                Log in
              </Button>
            </Link>
            <DarkModeToggle />
          </div>
        )}

        <div className="flex items-center lg:hidden ">
          <DarkModeToggle className="ml-2" />
          <IconButton
            variant="text"
            onClick={handleOpen}
            className="ml-auto dark:text-fontColor-dark"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t dark:border-blue-gray-50 border-gray-700 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            <NavItem to="/pages">
              <RectangleStackIcon className="h-5 w-5" />
              Dashboard
            </NavItem>
            <NavItem to="/blogs">
              <CommandLineIcon className="h-5 w-5" />
              Blog
            </NavItem>
            <NavItem to="/products">
              <ShoppingCartIcon className="h-5 w-5" />
              Product
            </NavItem>
            <NavItem to="/services">
              <CogIcon className="h-5 w-5" />
              Service
            </NavItem>
            {authUser ? (
              <NavItem to="/account">
                <UserCircleIcon className="h-5 w-5" />
                Account
              </NavItem>
            ) : (
              <></>
            )}
          </ul>

          {authUser ? (
            <>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <Button
                  variant="text"
                  className="border border-b text-fontColor dark:text-fontColor-dark"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <div className="mt-6 mb-4 flex items-center gap-4">
              <Link to="/signup">
                <Button
                  variant="text"
                  className="border border-b text-fontColor dark:text-fontColor-dark"
                >
                  Sign up
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  color="gray"
                  className="text-white  dark:bg-bgColor dark:text-fontColor"
                >
                  Log in
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
