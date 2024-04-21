// "use client";
// import React, { useEffect, useState } from "react";
// import NavBar from "../resuable/NavBar/NavBar";
// import Footer from "../resuable/Footer/Footer";
// import Link from "next/link";

// import { TbMessage } from "react-icons/tb";
// import { GiPadlock } from "react-icons/gi";
// import InputComponent from "../resuable/InputComponent";
// import { globalKey } from "@/stores/globalStore";
// import useLogin, { TLoginPayload } from '@/hooks/mutations/useLogin';
// import { useRouter } from 'next/router';
// import { toast, ToastContainer } from "react-toastify";
// import { Loader } from '@mantine/core';

// const LoginPage = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const router = useRouter();

//   const [credentials, setCredentials] = useState<TLoginPayload>({
//     email: "",
//     password: "",
//     is_staff: false,
//   });

//   const { isError, isLoading, isSuccess, login, error, data } = useLogin();

//   if (isSuccess) {
//     // Set token to local storage
//     localStorage.setItem("userToken", data?.access);
//     localStorage.setItem("userName", data?.full_name);
//     console.log(data);

//     router.push("/profile");
//   }

//   useEffect(() => {
//     if (isError) {
//       let data = error.response?.data as any;
//       toast.error(data.detail);
//     }
//   }, [error, isError]);

//   const handleLogin = () => {
//     login(credentials);
//   };

//   return (
//     <>
//     <ToastContainer />
//       <div className="fixed top-0 left-0 right-0">
//         <NavBar index={-1} />
//       </div>
//       <div className="h-32" />
//       <div className="px-32 md:px-[5%] flex flex-col items-center md:w-full">
//         <div className="flex justify-center items-center flex-col gap-5 md:w-full">
//           <Link
//             href={""}
//             className="text-brand flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-30 w-[25rem] md:w-[100%] h-14 rounded-3xl text-[18px] leading-[21.8px] font-cocogoose"
//           >
//             Log In With Linkedin
//           </Link>
//           <Link
//             href={""}
//             className="text-brand flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-30 w-[25rem] md:w-[100%] h-14 rounded-3xl text-[18px] leading-[21.8px] font-cocogoose"
//           >
//             Log In With Google
//           </Link>
//           <Link
//             href={""}
//             className="text-brand flex items-center justify-center bg-gradient-to-b from-light-blue to-light-blue-30 w-[25rem] md:w-[100%] h-14 rounded-3xl text-[18px] leading-[21.8px] font-cocogoose"
//           >
//             Log In With Facebook
//           </Link>
//         </div>

//         <div className="mt-16 w-[900px] md:w-full bg-gradient-to-b from-light-blue to-light-blue-30 rounded-3xl">
//           <div className="px-10 md:px-5 py-[2rem] md:py-10">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-brand text-[30px] md:text-[24px] leading-[21.8px] font-cocogoose">
//                 Log In
//               </h2>
//               <Link
//                 className="text-brand text-[20px] md:text-[16px] underline leading-[15px] font-cocogoose"
//                 href={"/sign-up"}
//               >
//                 Sign Up
//               </Link>
//             </div>
//             <div className="flex items-center gap-8 mt-10 ">
//               <div className="mt-8 md:hidden">
//                 <TbMessage className="w-[50px] h-[50px]" />
//               </div>
//               <InputComponent
//                 label="Email"
//                 type="text"
//                 placeholder="example@mail.com"
//                 value={email}
//                 width="w-full"
//                 onChange={(e) =>
//                   setCredentials({
//                     ...credentials,
//                     email: e.target.value,
//                   })
//                 }
//               />
//             </div>

//             <div className="flex items-center gap-8 mt-4">
//               <div className="mt-8 md:hidden">
//                 <GiPadlock className="w-[50px] h-[50px]" />
//               </div>
//               <InputComponent
//                 label="Password"
//                 type="password"
//                 placeholder="********"
//                 value={password}
//                 width="w-full"
//                 onChange={(e) =>
//                   setCredentials({
//                     ...credentials,
//                     password: e.target.value,
//                   })
//                 }
//               />
//             </div>
//             <Link href={"/forgot-password"}>
//               <p className="text-brand text-[15px] hover:underline leading-[15px] font-cocogoose pl-[5rem] md:pl-0 mt-4 md:mt-6">
//                 Forgot password
//               </p>
//             </Link>
//             <div className="flex items-center justify-center mt-8">
//               <button
//                 // onClick={() => {
//                 //   window.localStorage.setItem(
//                 //     globalKey,
//                 //     JSON.stringify({
//                 //       token: "1234567890",
//                 //     })
//                 //   );
//                 //   window.location.assign("/profile");
//                 // }}
//                 type='submit'
//                 onClick={handleLogin}
//                 className="text-white bg-brand px-8 md:w-full py-2 md:py-3 rounded-lg text-[20px] leading-[21.8px] font-cocogoose"
//               >
//                 {isLoading ? (
//                         <Loader
//                           color="#fff"
//                           className="flex items-center justify-center"
//                         />
//                       ) : (
//                         "Log In"
//                       )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default LoginPage;
