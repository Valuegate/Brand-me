import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import Avatar from "@/assets/Ellipse_593.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import Link from "next/link";
import { iPost } from "./types";
import { convertDate } from "@/functions/dateFunctions";
import { globalKey } from "@/stores/globalStore";

import { likePost } from "@/hooks/mutations/useCreatePost";

interface iCommentCardProp {
  post: iPost;
}

const CommentCard: FC<iCommentCardProp> = ({ post }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [initialLength, setLength] = useState<number>(0);

  function hasLiked() {
    let token = localStorage.getItem(globalKey)!;
    let id = JSON.parse(token).id;

    post.likes.forEach((like) => {
      if (like.user.id === id) {
        setLiked(true);
      }
    });

    setLength(post.likes.length);
  }

  const like = () => {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) return;

    let token = JSON.parse(data).access_token;

    likePost(
      post.id,
      token,
      (res: any) => {

        setLiked(true);
        setLength(initialLength + 1);
      },
      (err: any) => {}
    );
  };

  useEffect(() => {
    hasLiked();
  }, []);

  return (
    <>
      <div className="w-full border-none shadow-custom rounded-lg">
        <div className="px-8 md:px-2 py-8">
          <div className="flex items-center gap-3">
            <Image src={Avatar} alt={""} width={50} height={50} />
            <div>
              <h2 className="text-black font-cocogoose text-lg">
                {post.user.first_name}
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
                  className={`${liked ? "text-light-blue" : "text-gray-10"} cursor-pointer`}
                />
                <h4 className="text-gray-10 text-base">{initialLength}</h4>
              </div>
              <div className="flex gap-1">
                <CommentIcon className="text-gray-10" />
                <h4 className="text-gray-10 text-base">{post.comments.length}</h4>
              </div>
              
            </div>
            <Link href={""} className="md:mt-4">
              <h2 className="text-sm font-cocogoose text-light-blue">
                View comments
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
