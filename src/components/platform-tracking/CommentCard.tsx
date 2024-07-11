import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import Avatar from "@/assets/Ellipse_593.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import Link from "next/link";
import { iPost } from "./types";
import { convertDate } from "@/functions/dateFunctions";
import { globalKey } from "@/stores/globalStore";

import {
  commentPost,
  likePost,
  getPostComments,
} from "@/hooks/mutations/useCreatePost";
import { useDisclosure } from "@mantine/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Loader, Modal } from "@mantine/core";
import { useTranslation } from "next-i18next";

interface iCommentCardProp {
  post: iPost;
}

const CommentCard: FC<iCommentCardProp> = ({ post }) => {
  const { t } = useTranslation();
  const [liked, setLiked] = useState<boolean>(false);
  const [commented, setCommented] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(0);
  const [commentsCount, setCommentsCount] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);

  const [commentText, setCommentText] = useState<string>("");
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2, { open: open2, close: close2 }] = useDisclosure(false);

  const [comments, setComments] = useState<iCommentComment[]>([]);

  function process() {
    let token = localStorage.getItem(globalKey)!;
    let id = JSON.parse(token).id;

    post.likes.forEach((like) => {
      if (like.user.id === id) {
        setLiked(true);
      }
    });

    post.comments.forEach((comment) => {
      if (comment.user.id === id) {
        setCommented(true);
      }
    });

    setLikesCount(post.likes.length);
    setCommentsCount(post.comments.length);
  }

  const like = () => {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) return;

    let token = JSON.parse(data).access_token;

    likePost(
      post.id,
      token,
      (res: any) => {
        let initial = liked;
        setLiked(!initial);
        setLikesCount(likesCount + (initial ? -1 : 1));
      },
      (err: any) => {
        toast.error(
          "An error occurred while liking/unliking this post. Please try again"
        );
      }
    );
  };

  const comment = () => {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) return;

    let token = JSON.parse(data).access_token;

    setLoading(true);

    commentPost(
      post.id,
      commentText,
      token,
      (res: any) => {
        setCommented(true);
        setCommentsCount(commentsCount + 1);
        setCommentText("");
        setLoading(false);
        close();
        toast.success("You have successfully commented on this post");
      },
      (err: any) => {
        setLoading(false);
        toast.error("An error occurred. Please try again");
      }
    );
  };

  const getCommentsForPost = () => {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) return;

    let token = JSON.parse(data).access_token;

    setLoading(true);

    open2();

    getPostComments(
      post.id,
      token,
      (res: any) => {
        setLoading(false);
        setComments(res.data as iCommentComment[]);
      },
      (err: any) => {
        setLoading(false);
        toast.error("Could not get the comments under this post");
      }
    );
  };

  useEffect(() => {
    process();
  }, []);

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
      <div className="w-full border-none shadow-custom rounded-lg">
        <div className="px-8 md:px-2 py-8">
          <div className="flex items-center gap-3">
            {post.user.image ? (
              <Image
                src={post.user.image}
                className="size-[50px] rounded-full"
                alt=""
                width={50}
                height={50}
              />
            ) : (
              <div className="size-[50px] rounded-full bg-brand text-white font-cocogoose flex justify-center items-center ">
                {post.user.first_name[0].toUpperCase() +
                  "." +
                  post.user.last_name[0].toUpperCase()}
              </div>
            )}
            <div>
              <h2 className="text-black font-cocogoose text-lg">
                {post.user.first_name} {post.user.last_name}
              </h2>
              <p className="text-base text-gray-10 font-semibold">
                {convertDate(new Date(post.created_at))}
              </p>
            </div>
          </div>
          <p className="text-black text-base md:text-[15px] font-cocogoose mt-4">
            {post.content}
          </p>

          <div className="flex items-center mt-5 md:flex-col justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                <ThumbUpIcon
                  onClick={like}
                  className={`${
                    liked ? "text-light-blue" : "text-gray-10"
                  } cursor-pointer`}
                />
                <h4 className="text-gray-10 text-base">{likesCount}</h4>
              </div>
              <div className="flex gap-1">
                <CommentIcon
                  onClick={() => {
                    setCommentText("");
                    open();
                  }}
                  className={`${
                    commented ? "text-light-blue" : "text-gray-10"
                  } cursor-pointer`}
                />
                <h4 className="text-gray-10 text-base">{commentsCount}</h4>
              </div>
            </div>
            <h2
              className="text-sm font-cocogoose text-light-blue md:mt-4 cursor-pointer"
              onClick={getCommentsForPost}
            >
              {t("viewComments")}
            </h2>
          </div>
        </div>
      </div>
      <Modal opened={opened} onClose={close} centered>
        {loading ? (
          <div className="w-full h-40 flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="w-full flex flex-col gap-3">
            <textarea
              placeholder="Write a comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="border border-gray-10 w-full p-2 font-cocogoose text-[16px] resize-none h-[200px] focus:outline-none"
            />

            <button
              onClick={comment}
              className="font-cocogoose text-white text-[16px] h-10 rounded bg-brand"
            >
              Submit
            </button>
          </div>
        )}
      </Modal>
      <Modal opened={opened2} onClose={close2} centered>
        {loading ? (
          <div className="w-full h-40 flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="w-full flex flex-col h-[450px] overflow-y-scroll gap-10">
            {comments.map((cm, i) => {
              return <PostComments key={i} {...cm} />;
            })}
          </div>
        )}
      </Modal>
    </>
  );
};

interface iCommentComment {
  user: {
    first_name: string;
    last_name: string;
    image: string | null;
  };
  created_at: string;
  content: string;
}

const PostComments: FC<iCommentComment> = ({ user, created_at, content }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        {user.image ? (
          <Image
            src={user.image}
            className="size-[50px] rounded-full"
            alt=""
            width={50}
            height={50}
          />
        ) : (
          <div className="size-[50px] rounded-full bg-brand text-white font-cocogoose flex justify-center items-center ">
            {user.first_name[0].toUpperCase() +
              "." +
              user.last_name[0].toUpperCase()}
          </div>
        )}
        <div>
          <h2 className="text-black font-cocogoose text-md">
            {user.first_name}
          </h2>
          <p className="text-base text-gray-10 font-semibold">
            {convertDate(new Date(created_at))}
          </p>
        </div>
      </div>
      <p className="text-black text-base font-cocogoose mt-4">{content}</p>
    </div>
  );
};

export default CommentCard;
