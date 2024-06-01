import React, { useState, useEffect } from "react";
import Image from "next/image";
import Msg from "@/assets/text.png";
import Satellite from "@/assets/satellite.png";
import Pin from "@/assets/pin.png";
import { HiUserCircle } from "react-icons/hi";
import {
  Modal,
  TextInput,
  Button,
  Group,
  Textarea,
  Loader,
} from "@mantine/core";
import CommentCard from "./CommentCard";
import GroupCard from "./GroupCard";
import { FaRegSmile, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import Avatar from "@/assets/Ellipse_593.png";

import { globalKey } from "@/stores/globalStore";
import { toast, ToastContainer } from "react-toastify";
import { makePost, likePost } from "@/hooks/mutations/useCreatePost";
import "react-toastify/dist/ReactToastify.css";

const Community = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  const [username, setUsername] = useState<string>("");
  const [modalLoading, setModalLoading] = useState<boolean>(false);

  const comments = Array(10).fill({
    id: 1,
    name: "Adedimeji Ajayi",
    date: "3 days ago",
    message:
      "This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.",
  });

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addEmoji = (emojiData: EmojiClickData) => {
    setMessage(message + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  const handleAttachmentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      setAttachments([...attachments, ...Array.from(event.target.files)]);
    }
  };

  const handleSend = () => {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) return;

    let token = JSON.parse(data).access_token;

    setModalLoading(true);

    makePost(
      message,
      token,
      (res: any) => {
        window.location.reload();
      },
      (err: any) => {
        toast.error("An error occurred. Please try again");
        setModalLoading(false);
      }
    );
  };

  const like = (id: string) => {
    let data = localStorage.getItem(globalKey)!;
    if (data === null) return;

    let token = JSON.parse(data).access_token;

    likePost(
      id,
      token,
      (res: any) => {},
      (err: any) => {}
    );
  };

  useEffect(() => {
    let data = localStorage.getItem(globalKey)!;
    if (data !== null) {
      let name = JSON.parse(data).full_name;
      setUsername(name ?? "");
    }
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
      <div className="flex md:flex-col gap-8">
        <div
          className="w-[70%] md:w-full overflow-y-scroll"
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
          <div className="relative z-0">
            <input
              className="w-full border-[1px] border-solid border-white shadow-sm rounded px-5 py-2 pl-10 focus:outline-none focus:border-gray"
              type="text"
              placeholder="Write something..."
              onClick={openModal}
            />
            <HiUserCircle className="absolute left-3 top-3 text-gray-400 w-6 h-6" />
          </div>
          <div className="flex my-10 gap-6 md:gap-2 items-center">
            <button className="bg-brand rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-white">
              All
            </button>
            <button className="bg-gray rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2">
              <Image
                src={Msg}
                alt={"text icon"}
                width={15}
                height={15}
                className="w-50px h-10px"
              />
              Discussion
            </button>
            <button className="bg-gray rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2">
              <Image
                src={Satellite}
                alt={"Satellite icon"}
                width={15}
                height={15}
                className="w-50px h-10px"
              />
              Random
            </button>
            <button className="bg-gray rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2">
              <Image
                src={Pin}
                alt={"Pin icon"}
                width={15}
                height={15}
                className="w-50px h-10px"
              />
              Pinned
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {comments.map((comment, i) => (
              <CommentCard
                key={i}
                name={comment.name}
                date={comment.date}
                message={comment.message}
                onLike={() => like(comment.id)}
              />
            ))}
          </div>
        </div>
        <div className="w-[30%] md:w-full">
          <div className="sticky top-0">
            <GroupCard />
          </div>
        </div>
      </div>

      <Modal.Root
        opened={modalIsOpen}
        onClose={closeModal}
        centered
        padding="md"
        size={"40vw"}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body>
            {modalLoading ? (
              <div className="h-40 w-full flex items-center justify-center">
                <Loader size={"26px"} />
              </div>
            ) : (
              <>
                <div className="flex items-center gap-1 mb-4">
                  <h2 className="text-black font-cocogoose text-base">
                    {username}
                  </h2>
                  <p className="text-base text-gray-10 font-bold font-cocogoose-light">
                    posting in
                  </p>
                  <h2 className="text-black font-cocogoose text-base">
                    Brand Me
                  </h2>
                  <p className="text-base text-gray-10 font-bold font-cocogoose-light">
                    Discussion
                  </p>
                </div>
                <div className="border-none rounded-md">
                  <div className="">
                    <textarea
                      placeholder="Write Something..."
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1 h-[120px] resize-none border-white focus:outline-none text-black font-cocogoose-light font-bold shadow-none focus:border-white w-full"
                      value={message}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-10">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1 bg-gray-10 rounded-full"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      >
                        <FaRegSmile />
                      </button>
                      <input
                        type="file"
                        id="attachment"
                        style={{ display: "none" }}
                        onChange={handleAttachmentChange}
                        multiple
                        className="border-none"
                      />
                      <label htmlFor="attachment">
                        <button className="p-1 bg-gray-10 rounded">
                          <FaPaperclip />
                        </button>
                      </label>
                    </div>
                    {showEmojiPicker && (
                      <div className="mb-4">
                        <EmojiPicker onEmojiClick={addEmoji} />
                      </div>
                    )}
                    <div className="flex items-center gap-6">
                      <button
                        onClick={closeModal}
                        className="text-black text-base font-normal"
                      >
                        CANCEL
                      </button>
                      <button
                        className="bg-light-blue flex items-center h-8 w-20 rounded justify-center text-brand text-lg font-bold"
                        onClick={handleSend}
                      >
                        POST
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default Community;
