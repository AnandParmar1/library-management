// import { Modal } from "../../../../components/Modal/Modal";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
// import { useEffect, useState } from "react";
// import { setDisplayLogin } from "../../../../redux/slices/ModelSlice";
// import { Login } from "../loginform/Login";
// import { Register } from "../registerform/Register";

// export const LoginRegisterModal: React.FC = () => {
//   const authState = useSelector((state: RootState) => state.authentication);
//   const dispatch: AppDispatch = useDispatch();
//   const [login, setLogin] = useState<boolean>(true);
//   const closeModal = () => {
//     dispatch(setDisplayLogin(false));
//   };
//   const toggleLogin = () => {
//     setLogin(!login);
//   };
//   useEffect(() => {
//     if (authState.loggedInUser) {
//       closeModal();
//     }
//     return () => {
//       if (authState.loggedInUser) {
//         localStorage.setItem("userId", authState.loggedInUser._id);
//       }
//     };
//   }, [authState.loggedInUser]);

//   return (
//     <Modal
//       content={
//         login ? (
//           <Login toggleRegister={toggleLogin} />
//         ) : (
//           <Register toggleLogin={toggleLogin} />
//         )
//       }
//       toggleModal={closeModal}
//     />
//   );
// };
import { Modal } from "../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import { useEffect, useState } from "react";
import { setDisplayLogin } from "../../../../redux/slices/ModelSlice";
import { Login } from "../loginform/Login";
import { Register } from "../registerform/Register";

export const LoginRegisterModal: React.FC = () => {
  const authState = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();
  const [login, setLogin] = useState<boolean>(true);

  const closeModal = () => {
    dispatch(setDisplayLogin(false));
  };

  const toggleLogin = () => {
    setLogin((prevLogin) => !prevLogin);
  };

  useEffect(() => {
    if (authState.loggedInUser) {
      closeModal();
    }
  }, [authState.loggedInUser, dispatch]);

  useEffect(() => {
    return () => {
      if (authState.loggedInUser) {
        localStorage.setItem("userId", authState.loggedInUser._id);
      }
    };
  }, [authState.loggedInUser]);

  return (
    <div className="flex items-center justify-center min-h-screen  bg-opacity-50">
      <Modal
        content={
          login ? (
            <div className="w-full max-w-lg  p-4 ">
              <Login toggleRegister={toggleLogin} />
            </div>
          ) : (
            <div className="w-full max-w-lg p-4 ">
              <Register toggleLogin={toggleLogin} />
            </div>
          )
        }
        toggleModal={closeModal}
      />
    </div>
  );
};
