import React, { useEffect, useState } from "react";

import { HiUserCircle } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import CommentCard from "./CommentCard";

import { useDisclosure } from "@mantine/hooks";
import { Loader, Modal } from "@mantine/core";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import getPosts from "@/hooks/queries/useGetPosts";
import { makePost } from "@/hooks/mutations/useCreatePost";
import { globalKey } from "@/stores/globalStore";

import { iPost } from "./types";

const Community = () => {
  const [post, setPost] = useState<string>("");
  const [allPosts, setAllPosts] = useState<iPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  function createPost() {
    let token = localStorage.getItem(globalKey);
    if (token === null) {
      toast.error("You need to login first");
      return;
    }

    token = JSON.parse(token).access_token;

    if (post.length === 0) {
      toast.error("Please provide a post");
      return;
    }

    setLoading(true);

    makePost(
      post,
      token!,
      (res: any) => {
        toast.success("Post created successfully");
        setPost("");
        posts();
      },
      (err: any) => {
        toast.error("An error occurred. Please try again");
        setLoading(false);
      }
    );
  }


  function posts() {
    let token = localStorage.getItem(globalKey);
    if (token === null) {
      toast.error("You need to login first");
      setLoading(false);
      return;
    }

    token = JSON.parse(token).access_token;

    getPosts(
      token!,
      (res: any) => {
        setLoading(false);
        setAllPosts(res.data as iPost[]);
      },
      (err: any) => {
        toast.error("An error occurred. Please try again");
        setLoading(false);
      }
    )
  }


  useEffect(() => {
    posts();
  }, [])

  if (loading) {
    return (
      <div className="w-full h-[40vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex md:flex-col gap-8">

        <div className="w-full">
          <div className="relative z-0">
            <input
              className="w-full border-2 font-cocogoose border-brand shadow-custom rounded px-10 py-3 focus:outline-none"
              type="text"
              placeholder="Write something..."
              value={post}
              onChange={(e) => {
                setPost(e.target.value);
              }}
            />
            <HiUserCircle className="absolute left-3 top-3 text-gray-400 w-6 h-6 text-brand-30" />
            <MdSend
              onClick={createPost}
              className="absolute right-3 top-3 text-gray-400 w-6 h-6 cursor-pointer text-brand"
            />
          </div>

          <div className="flex flex-col gap-4 mt-10">
            {allPosts.map((post, i) => {
              return (
                <CommentCard
                  key={i}
                  post={post}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
