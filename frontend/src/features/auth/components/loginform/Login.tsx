// import axios from "axios";
// import React, { useRef, useState } from "react";
// // import './Login.css'
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
// import { loginUser } from "../../../../redux/slices/AuthSlice";
// interface LoginFormProps {
//   toggleRegister(): void;
// }
// export const Login: React.FC<LoginFormProps> = ({ toggleRegister }) => {
//   // const [error,setError]=useState<boolean>(false);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);

// const auth = useSelector((state: RootState) => state.authentication);
//   const dispatch: AppDispatch = useDispatch();

//   const handleLoginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
//       dispatch(
//         loginUser({
//           email: emailRef.current.value,
//           password: passwordRef.current.value,
//         })
//       );
//     }
//   };

//   return (
//     <form className="max-w-sm mx-auto  mb-4">
//       <h2 className="text-xl mb-4">Please Login</h2>
//       {auth.error && (
//         <p className="text-red-500 mb-4">Username or password incorrect</p>
//       )}
//       <div className="mb-4">
//         <h6 className="block text-gray-700 text-sm font-bold mb-2">Email</h6>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id="email"
//           type="email"
//           placeholder="Email"
//           name="email"
//           required
//           ref={emailRef}
//         />
//       </div>
//       <div className="mb-6">
//         <h6 className="block text-gray-700 text-sm font-bold mb-2">Password</h6>
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//           id="password"
//           type="password"
//           placeholder="Password"
//           name="password"
//           required
//           ref={passwordRef}
//         />
//       </div>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         type="button"
//         onClick={handleLoginUser}
//       >
//         Login
//       </button>
//       <p className="text-gray-700 text-xs mt-4">
//         Don't have an account?{" "}
//         <span className="text-blue-500 cursor-pointer" onClick={toggleRegister}>
//           Create one here.
//         </span>
//       </p>
//     </form>
//     // <div className="container mx-auto h-screen flex justify-center items-center">
//     //     <div className="w-full max-w-md">
//     //         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     //             <div className="mb-4">
//     //                 <h1 className="text-2xl mb-2">{isSignIn ? 'Sign In' : 'Create Account'}</h1>
//     //                 <div className="flex justify-between items-center">
//     //                     <div className="border-b border-gray-300 w-1/2"></div>
//     //                     <span className="text-sm text-gray-500">{isSignIn ? 'or use your email and password' : 'or use your email for registration'}</span>
//     //                     <div className="border-b border-gray-300 w-1/2"></div>
//     //                 </div>
//     //             </div>
//     //             <form>
//     //                 {!isSignIn && (
//     //                     <div className="mb-4">
//     //                         <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" />
//     //                     </div>
//     //                 )}
//     //                 <div className="mb-4">
//     //                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" />
//     //                 </div>
//     //                 <div className="mb-6">
//     //                     <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" />
//     //                 </div>
//     //                 <div className="flex items-center justify-between">
//     //                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLoginUser} type="button">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
//     //                 </div>
//     //             </form>
//     //         </div>
//     //         <div className="text-center">
//     //             <button className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none" type="button">Forget Your Password?</button>
//     //         </div>
//     //         <div className="mt-4 text-center">
//     //             <span>{isSignIn ? "Don't have an account?" : "Already have an account?"}</span>
//     //             <button className="ml-1 text-blue-500 hover:text-blue-700 focus:outline-none" type="button" onClick={toggleForm}>{isSignIn ? 'Sign Up' : 'Sign In'}</button>
//     //         </div>
//     //     </div>
//     // </div>
//   );
// };

// import { useForm } from "react-hook-form";
// import axios from "axios";
// import React, { useRef, useState } from "react";
// // import './Login.css'
// interface LoginFormProps {
//   toggleRegister(): void;
// }
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../../../../redux/ReduxStore";
// const auth = useSelector((state: RootState) => state.authentication);
// import { loginUser } from "../../../../redux/slices/AuthSlice";
// export const Login: React.FC<LoginFormProps> = ({ toggleRegister }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const dispatch: AppDispatch = useDispatch();

//   const onSubmit = (data: any) => {
//     dispatch(
//       loginUser({
//         email: data.email,
//         password: data.password,
//       })
//     );
//   };

//   return (
//     <form className="max-w-sm mx-auto mb-4" onSubmit={handleSubmit(onSubmit)}>
//       <h2 className="text-xl mb-4">Please Login</h2>
//       {auth.error && (
//         <p className="text-red-500 mb-4">Username or password incorrect</p>
//       )}
//       <div className="mb-4">
//         <h6 className="block text-gray-700 text-sm font-bold mb-2">Email</h6>
//         <input
//           {...register("email", { required: true })}
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
//             errors.email ? "border-red-500" : ""
//           }`}
//           type="email"
//           placeholder="Email"
//           required
//         />
//         {errors.email && (
//           <p className="text-red-500 text-xs italic">Email is required</p>
//         )}
//       </div>
//       <div className="mb-6">
//         <h6 className="block text-gray-700 text-sm font-bold mb-2">Password</h6>
//         <input
//           {...register("password", { required: true })}
//           className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
//             errors.password ? "border-red-500" : ""
//           }`}
//           type="password"
//           placeholder="Password"
//           required
//         />
//         {errors.password && (
//           <p className="text-red-500 text-xs italic">Password is required</p>
//         )}
//       </div>
//       <button
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         type="submit"
//       >
//         Login
//       </button>
//       <p className="text-gray-700 text-xs mt-4">
//         Don't have an account?{" "}
//         <span className="text-blue-500 cursor-pointer" onClick={toggleRegister}>
//           Create one here.
//         </span>
//       </p>
//     </form>
//   );
// };

import { useForm } from "react-hook-form";
import { loginUser } from "../../../../redux/slices/AuthSlice";
import { AppDispatch } from "../../../../redux/ReduxStore";
import { useDispatch } from "react-redux";

export const Login: React.FC<{ toggleRegister(): void }> = ({
  toggleRegister,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(loginUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-xl mb-4">Please Login</h2>
      <div className="mb-4">
        <h6 className="block text-gray-700 text-sm font-bold mb-2">Email</h6>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic">Email is required</p>
        )}
      </div>
      <div className="mb-6">
        <h6 className="block text-gray-700 text-sm font-bold mb-2">Password</h6>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic">Password is required</p>
        )}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Login
      </button>
      {/* <button className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none" type="submit">Login</button> */}
      <p className="text-gray-700 text-xs mt-4">
        Don't have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={toggleRegister}>
          Create one here.
        </span>
      </p>
    </form>
  );
};
