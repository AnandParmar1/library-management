// import { useDispatch, useSelector } from "react-redux";
// import "./Register.css";
// import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
// import React, { useEffect, useRef } from "react";
// import {
//   registerUser,
//   resetRegisterSuccess,
// } from "../../../../redux/slices/AuthSlice";

// interface RegisterProps {
//   toggleLogin(): void;
// }

// export const Register: React.FC<RegisterProps> = ({ toggleLogin }) => {
//   const authState = useSelector((state: RootState) => state.authentication);
//   const dispatch: AppDispatch = useDispatch();
//   const firstRef = useRef<HTMLInputElement>(null);
//   const lastRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);

//   const handleRegisterUser = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (
//       firstRef.current &&
//       lastRef.current &&
//       emailRef.current &&
//       passwordRef.current
//     ) {
//       dispatch(
//         registerUser({
//           type: "PATRON",
//           firstName: firstRef.current.value,
//           lastName: lastRef.current.value,
//           email: emailRef.current.value,
//           password: passwordRef.current.value,
//         })
//       );
//     }
//   };

//   useEffect(() => {
//     return () => {
//       dispatch(resetRegisterSuccess());
//     };
//   }, [dispatch]); // Add 'dispatch' to the dependency array

//   return (
//     <form className="max-w-md  rounded-lg">
//       <h2 className="text-2xl font-bold mb-4">Enter Your Information</h2>
//       {authState.error && (
//         <p className="text-red-500 mb-4">There was an error</p>
//       )}
//       <div className="flex flex-wrap mb-4">
//         <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             First Name
//           </label>
//           <input
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="First"
//             name="first"
//             required
//             ref={firstRef}
//           />
//         </div>
//         <div className="w-full md:w-1/2 md:pl-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Last Name
//           </label>
//           <input
//             className="w-full p-2 border border-gray-300 rounded"
//             placeholder="Last"
//             name="last"
//             required
//             ref={lastRef}
//           />
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Email
//         </label>
//         <input
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Email"
//           name="email"
//           required
//           ref={emailRef}
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-1">
//           Password
//         </label>
//         <input
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Password"
//           name="password"
//           type="password"
//           required
//           ref={passwordRef}
//         />
//       </div>
//       <button
//         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         onClick={handleRegisterUser}
//       >
//         Register
//       </button>
//       {authState.registerSuccess && (
//         <p className="mt-4 text-green-500">
//           Registered Successfully
//           <span
//             className="ml-2 text-blue-500 cursor-pointer"
//             onClick={toggleLogin}
//           >
//             Login Here
//           </span>
//         </p>
//       )}
//     </form>
//   );
// };

import { useDispatch, useSelector } from "react-redux";
import "./Register.css";
import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
import React, { useEffect, useRef, useState } from "react";
import {
  registerUser,
  resetRegisterSuccess,
} from "../../../../redux/slices/AuthSlice";

interface RegisterProps {
  toggleLogin(): void;
}

export const Register: React.FC<RegisterProps> = ({ toggleLogin }) => {
  const authState = useSelector((state: RootState) => state.authentication);
  const dispatch: AppDispatch = useDispatch();
  const firstRef = useRef<HTMLInputElement>(null);
  const lastRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<"ADMIN" | "EMPLOYEE" | "PATRON">("PATRON");

  const handleRegisterUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      firstRef.current &&
      lastRef.current &&
      emailRef.current &&
      passwordRef.current
    ) {
      dispatch(
        registerUser({
          type,
          firstName: firstRef.current.value,
          lastName: lastRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      );
    }
  };

  useEffect(() => {
    return () => {
      dispatch(resetRegisterSuccess());
    };
  }, [dispatch]); // Add 'dispatch' to the dependency array

  return (
    <form className="max-w-md  rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Enter Your Information</h2>
      {authState.error && (
        <p className="text-red-500 mb-4">There was an error</p>
      )}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Type
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={type}
          onChange={(e) =>
            setType(e.target.value as "ADMIN" | "EMPLOYEE" | "PATRON")
          }
        >
          <option value="ADMIN">Admin</option>
          <option value="EMPLOYEE">Employee</option>
          <option value="PATRON">Patron</option>
        </select>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="First"
            name="first"
            required
            ref={firstRef}
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Last"
            name="last"
            required
            ref={lastRef}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Email"
          name="email"
          required
          ref={emailRef}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Password"
          name="password"
          type="password"
          required
          ref={passwordRef}
        />
      </div>
      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        onClick={handleRegisterUser}
      >
        Register
      </button>
      {authState.registerSuccess && (
        <p className="mt-4 text-green-500">
          Registered Successfully
          <span
            className="ml-2 text-blue-500 cursor-pointer"
            onClick={toggleLogin}
          >
            Login Here
          </span>
        </p>
      )}
    </form>
  );
};

export default Register;
