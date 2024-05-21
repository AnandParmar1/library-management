import React, { useRef } from "react";

import "./Navbar.css";
import { Book, Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/ReduxStore";
import { Link, useNavigate } from "react-router-dom";
import { setDisplayLogin } from "../../../redux/slices/ModelSlice";

export const Navbar: React.FC = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const authState = useSelector((state: RootState) => state.authentication);
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      searchRef &&
      searchRef.current &&
      searchRef.current.value.length > 0
    ) {
      navigate(
        `/catalog?barcode-${searchRef.current.value}&title-${searchRef.current.value}&description-${searchRef.current.value}`
      );
      searchRef.current.value = "";
    }
  };
  const handleSearchIconClicked = () => {
    if (searchRef && searchRef.current && searchRef.current.value.length > 0) {
      navigate(
        `/catalog?barcode-${searchRef.current.value}&title-${searchRef.current.value}&description-${searchRef.current.value}`
      );
      searchRef.current.value = "";
    }
  };
  const navigateToProfile = () => {
    if (authState.loggedInUser)
      navigate(`/profile/${authState.loggedInUser._id}`);
  };
  const toggleLogin = () => {
    dispatch(setDisplayLogin(true));
  };
  return (
    // <nav className="navbar">
    //   <Link to="/" className="navbar-logo-section">
    //     <Book sx={{ fontSize: "3rem" }} />
    //     <h1>My Library</h1>
    //   </Link>
    //   <div className="navbar-option-section">
    //     <Link to="/catalog" className="navbar-option navbar-link">
    //       <h2>View catalog</h2>
    //     </Link>
    //     <div className="navbar-search-box">
    //       <input
    //         className="navbar-search-input"
    //         placeholder="search catalog"
    //         onKeyDown={handleEnterKey}
    //         ref={searchRef}
    //       />
    //       <Search
    //         onClick={handleSearchIconClicked}
    //         sx={{
    //           cursor: "pointer",
    //           fontSize: "2rem",
    //         }}
    //       />
    //     </div>
    //     {authState.loggedInUser ? (
    //       <div className="navbar-option" onClick={navigateToProfile}>
    //         <h2>{authState.loggedInUser.firstName}'s Account</h2>
    //       </div>
    //     ) : (
    //       <div className="navbar-option" onClick={toggleLogin}>
    //         <h2>Login</h2>
    //       </div>
    //     )}
    //   </div>
    // </nav>
    <nav className="bg-gray-800 px-5 text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-md">
      <Link to="/" className=" flex items-center space-x-2 mb-4 md:mb-0">
        <Book sx={{ fontSize: "2.5rem" }} />
        <h1 className="text-xl font-bold">My Library</h1>
      </Link>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto">
        <Link to="/catalog" className="text-2xl  font-bold hover:text-gray-400">
          View Catalog
        </Link>
        <div className="relative w-full md:w-auto">
          <input
            className="h-10 w-full md:w-64 pl-4 pr-10 rounded-full border border-gray-300 text-black"
            placeholder="Search catalog"
            onKeyDown={handleEnterKey}
            ref={searchRef}
          />
          <Search
            onClick={handleSearchIconClicked}
            className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 cursor-pointer"
            sx={{ fontSize: "1.5rem" }}
          />
        </div>
        {authState.loggedInUser ? (
          <div
            className="text-lg hover:text-gray-400 cursor-pointer"
            onClick={navigateToProfile}
          >
            {authState.loggedInUser.firstName}'s Account
          </div>
        ) : (
          <div
            className="text-2xl font-bold hover:text-gray-400 cursor-pointer"
            onClick={toggleLogin}
          >
            Login
          </div>
        )}
      </div>
    </nav>
  );
};
