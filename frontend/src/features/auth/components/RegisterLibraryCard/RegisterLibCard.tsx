import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { getLibraryCard } from "../../../../redux/slices/AuthSlice";
import {
  setDisplayLibraryCard,
  setDisplayLogin,
} from "../../../../redux/slices/ModelSlice";

export const RegisterLibCard: React.FC = () => {
  const userState = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();

  const handleCard = () => {
    if (userState.loggedInUser) {
      dispatch(getLibraryCard(userState.loggedInUser?._id));
    }
  };

  const handleLogin = () => {
    dispatch(setDisplayLibraryCard(false));
    dispatch(setDisplayLogin(true));
  };

  return (
    // <div>
    //   {userState.loggedInUser ? (
    //     <div className="register-library-card-container">
    //       <h3 className="register-library-card-text">
    //         Welcome {userState.loggedInUser.firstName}{" "}
    //         {userState.loggedInUser.lastName}
    //       </h3>
    //       <h5 className="register-library-card-text">
    //         To signup for a new library card, or if you forgot the ID number on
    //         your card,use the Button below.
    //       </h5>
    //       {userState.libraryCard ?
    //         <p className="register-library-card-text">
    //           Your library card number: {userState.libraryCard}
    //         </p>
    //        :
    //         <button
    //           className="register-library-modal-button"
    //           onClick={handleCard}
    //         >
    //           Get Library Card
    //         </button>
    //       }
    //     </div>
    //   ) : (
    //     <div className="register-library-card-container">
    //       <h3 className="register-library-card-text">
    //         You must be a member of the library to obtain a library card.
    //       </h3>
    //       <h4 className="register-library-card-text">
    //         Use the button below to login to your account or register for free.
    //       </h4>
    //       <button
    //         className="register-library-modal-button"
    //         onClick={handleLogin}
    //       >
    //         Login Here
    //       </button>
    //     </div>
    //   )}
    // </div>
    <div className="flex flex-col items-center">
      {userState.loggedInUser ? (
        <div>
          <h3 className="text-lg font-bold mb-4">
            Welcome {userState.loggedInUser.firstName}{" "}
            {userState.loggedInUser.lastName}
          </h3>
          <h5 className="text-sm mb-4">
            To signup for a new library card, or if you forgot the ID number on
            your card,use the Button below.
          </h5>
          {userState.libraryCard ? (
            <p className="text-sm mb-4">
              Your library card number: {userState.libraryCard}
            </p>
          ) : (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
              onClick={handleCard}
            >
              Get Library Card
            </button>
          )}
        </div>
      ) : (
        <>
          <h3 className="text-lg font-bold mb-4">
            You must be a member of the library to obtain a library card.
          </h3>
          <h4 className="text-sm mb-4">
            Use the button below to login to your account or register for free.
          </h4>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={handleLogin}
          >
            Login Here
          </button>
        </>
      )}
    </div>
  );
};
