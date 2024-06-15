// import React, { FC, useEffect, useRef, useState } from "react";

// import Image from "next/image";

// import { useEditCourseStore } from "@/stores/editStore";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import InputAreaComponent from "@/components/resuable/InputAreaComponent";
// import InputComponent from "@/components/resuable/InputComponent";
// import { getBase64 } from "@/functions/fileFunction";
// import { MdUpload, MdDelete, MdAddCircleOutline } from "react-icons/md";
// import { globalKey } from "@/stores/globalStore";
// import { editCourse } from "@/hooks/mutations/useEditCourse";
// import { Loader } from "@mantine/core";

// const EditModule = () => {
//   const title = useEditCourseStore((state) => state.title);
//   const description = useEditCourseStore((state) => state.description);
//   const modules = useEditCourseStore((state) => state.modules);
//   const banner = useEditCourseStore((state) => state.banner_content);

//   const [bannerData, setBannerData] = useState<string>("");

//   const [moduleTitle, setModuleTitle] = useState<string>("");
//   const [moduleDescription, setModuleDescription] = useState<string>("");
//   const [moduleVideo, setModuleVideo] = useState<File | null>(null);

//   const bannerRef = useRef<HTMLInputElement>(null);
//   const videoRef = useRef<HTMLInputElement>(null);

//   const [editIndex, setEditIndex] = useState<number>(-1);

//   const [page, setPage] = useState<number>(0);

//   const [loading, setLoading] = useState<boolean>(false);



//   const resetModule = () => {
//     setEditIndex(-1);
//     setModuleTitle("");
//     setModuleDescription("");

//     setModuleVideo(null);
//   };


//   const edit = () => {
//     let token = localStorage.getItem(globalKey)!;
//     if (token === null) return;

//     token = JSON.parse(token).access_token;

//     setLoading(true);

//     editCourse(
//       useEditCourseStore.getState(),
//       token,
//       (res) => {
//         toast.success("Your course has been edited. Thank You");
//         setLoading(false);
//         // setTimeout(() => {
//         //   window.location.replace("/platform-tracking")
//         // }, 2000);
//       },
//       (err) => {
//         setLoading(false);
//         toast.error("An error occurred. Please try again later");
//       }
//     );
//   };


//   const validate = () => {
//     if (!checkFields()) return;

//     if (modules.length === 0) {
//       toast.error("Please provide at least one module for your course");
//       return;
//     }

//     edit();
//   };

//   const checkFields = () => {
//     if (title.length === 0) {
//       toast.error("Please provide a course title");
//       return false;
//     }

//     if (description.length === 0) {
//       toast.error("Please provide a course description");
//       return false;
//     }

//     return true;
//   };

//   return (
//     <>
//       <ToastContainer
//         position="top-center"
//         autoClose={3000}
//         hideProgressBar={true}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <div className="w-full bg-light-blue-30 md:bg-white rounded-[30px] flex flex-col items-center p-10 md:px-0 ">
//         {page === 0 ? (
//           <>
//             <div className="size-[80px] bg-brand rounded-full flex items-center justify-center text-white text-[40px] leading-[44px] font-semibold">
//               1
//               <span className="font-medium text-[26px] leading-[30px]">/2</span>
//             </div>
//             <h2 className="text-brand text-[30px] mt-10 font-cocogoose">
//               Edit Module
//             </h2>
//             <div className="mt-10 w-[60%] flex flex-col gap-5">
//               <div className="flex flex-col gap-1">
//                 <p className="font-cocogoose text-[16px] text-brand">
//                   Upload Banner
//                 </p>
//                 <div
//                   onClick={() => {
//                     bannerRef.current?.click();
//                   }}
//                   className={`w-full h-[180px] cursor-pointer rounded overflow-hidden ${
//                     bannerData.length === 0 &&
//                     "bg-brand-20 flex flex-col items-center justify-center gap-2"
//                   }`}
//                 >
//                   {bannerData.length === 0 && (
//                     <Image
//                       src={banner as string}
//                       alt="banner image"
//                       className="w-full h-full object-cover"
//                       width={100}
//                       height={100}
//                     />
//                   )}
//                   {bannerData.length !== 0 && (
//                     <Image
//                       src={bannerData}
//                       alt="banner image"
//                       className="w-full h-full object-cover"
//                       width={100}
//                       height={100}
//                     />
//                   )}
//                 </div>
//                 <input
//                   type="file"
//                   style={{ display: "none" }}
//                   accept="image/*"
//                   ref={bannerRef}
//                   onChange={(e) => {
//                     if (e.target.files !== null) {
//                       let firstFile: File = e.target.files[0];
//                       getBase64(firstFile)
//                         .then((res) => {
//                           setBannerData(res as string);
//                           useEditCourseStore.setState({
//                             banner_content: firstFile,
//                           });
//                         })
//                         .catch((err) => {
//                           setBannerData("");
//                         });
//                     }
//                   }}
//                 />
//               </div>

//               <InputComponent
//                 width="w-full"
//                 label="Course Title"
//                 value={title}
//                 type="text"
//                 placeholder="e.g Foundational Course"
//                 onChange={(e) => {
//                   useEditCourseStore.setState({ title: e.target.value });
//                 }}
//               />
//               <InputAreaComponent
//                 label="Course Description"
//                 onChange={(e) => {
//                   useEditCourseStore.setState({ description: e.target.value });
//                 }}
//                 placeholder="Type here..."
//                 value={description}
//               />
//               <button
//                 onClick={() => {
//                   if (page === 0 && checkFields()) {
//                     setPage(1);
//                   }
//                 }}
//                 className="w-full mt-10 bg-brand rounded-lg h-[50px] text-white font-cocogoose"
//               >
//                 Proceed
//               </button>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="size-[80px] bg-brand rounded-full flex items-center justify-center text-white text-[40px] leading-[44px] font-semibold">
//               2
//               <span className="font-medium text-[26px] leading-[30px]">/2</span>
//             </div>
//             <h2 className="text-brand text-[30px] mt-10 font-cocogoose">
//               Edit Module
//             </h2>
//             <div className="mt-10 w-[60%] flex flex-col gap-5">
//               <div className="flex flex-wrap gap-9 items-center">
//                 {modules.map((md, i) => {
//                   return (
//                     <div key={i} className="flex flex-col gap-4 relative">
//                       <div className="w-[250px] h-[160px] rounded-lg bg-brand font-cocogoose text-white text-[14px] flex justify-center items-center px-5 text-center">
//                         {md.title}
//                       </div>
//                       <div
//                         onClick={() => {
//                           let pre = modules.slice(0, i);
//                           let post = modules.slice(i + 1);
//                           for (let index = 0; i < post.length; ++index) {
//                             pre.push(post[index]);
//                           }

//                           useEditCourseStore.setState({ modules: pre });
//                         }}
//                         className="absolute cursor-pointer flex justify-center items-center -top-2 -right-2 size-7 rounded-full bg-white"
//                       >
//                         <MdDelete size={"22px"} fill="#FF0000" />
//                       </div>

//                       <div className="flex items-center justify-between">
//                         <p className="text-[16px] font-cocogoose text-brand">
//                           U{i + 1}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="flex flex-col gap-1">
//                 <p className="font-cocogoose text-[16px] text-brand">
//                   Module File
//                 </p>
//                 <div
//                   onClick={() => {
//                     videoRef.current?.click();
//                   }}
//                   className={`w-full h-[180px] cursor-pointer rounded overflow-hidden ${
//                     moduleVideo === null &&
//                     "bg-brand-20 flex flex-col items-center justify-center gap-2"
//                   }`}
//                 >
//                   {moduleVideo === null && (
//                     <>
//                       <MdUpload size={"26px"} className="text-brand" />
//                       <p className="text-brand font-cocogoose-light text-center font-bold text-[16px]">
//                         Upload your PDF File with a 30MB maximum limit
//                       </p>
//                     </>
//                   )}
//                   {moduleVideo !== null && (
//                     <div className="w-full h-full relative flex justify-center items-center text-[16px] font-cocogoose text-white bg-brand">
//                       {moduleVideo.name}
//                     </div>
//                   )}
//                 </div>
//                 <input
//                   type="file"
//                   style={{ display: "none" }}
//                   accept="application/pdf"
//                   ref={videoRef}
//                   onChange={(e) => {
//                     let files: FileList | null = e.target.files;
//                     if (files !== null && files.length > 0) {
//                       let firstFile = files[0];
//                       setModuleVideo(firstFile);
//                     } else {
//                       setModuleVideo(null);
//                     }
//                   }}
//                 />
//               </div>

//               <InputComponent
//                 width="w-full"
//                 label="Module Title"
//                 value={moduleTitle}
//                 type="text"
//                 placeholder="e.g Introduction"
//                 onChange={(e) => {
//                   setModuleTitle(e.target.value);
//                 }}
//               />
//               <InputAreaComponent
//                 label="Module Content"
//                 onChange={(e) => {
//                   setModuleDescription(e.target.value);
//                 }}
//                 placeholder="Type here..."
//                 value={moduleDescription}
//               />

//               {page === 1 && (
//                 <button
//                   onClick={() => {
//                     if (moduleTitle.length === 0) {
//                       toast.error("Please provide a module title");
//                       return;
//                     }

//                     if (moduleDescription.length === 0) {
//                       toast.error("Please provide a module content");
//                       return;
//                     }

//                     if (moduleVideo === null) {
//                       toast.error("Please select a module file");
//                       return;
//                     }

//                     let modl = {
//                       title: moduleTitle,
//                       is_completed: false,
//                       text_content: moduleDescription,
//                       video_content: moduleVideo!,
//                     };

//                     let newArray = modules.slice(0, editIndex);
//                     newArray.push(modl);
//                     let post = modules.slice(editIndex + 1);
//                     for (let i = 0; i < post.length; ++i) {
//                       newArray.push(post[i]);
//                     }
//                     useEditCourseStore.setState({ modules: newArray });

//                     resetModule();
//                   }}
//                   className="w-full mt-10 bg-brand-30 flex justify-center items-center gap-2 rounded-lg h-[50px] text-brand font-cocogoose"
//                 >
//                   <MdAddCircleOutline size={"26px"} />
//                   Add Module
//                 </button>
//               )}
//               <button
//                 onClick={validate}
//                 className={`w-full ${
//                   page === 0 && "mt-10"
//                 } bg-brand rounded-lg h-[50px] text-white font-cocogoose`}
//               >
//                 {loading && <Loader color="#FFFFFF"/>}
//                 {!loading && "Publish Changes"}
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default EditModule;
