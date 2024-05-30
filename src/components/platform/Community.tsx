import React, { useState } from 'react';
import Image from 'next/image';
import Msg from '@/assets/text.png';
import Satellite from '@/assets/satellite.png';
import Pin from '@/assets/pin.png';
import { HiUserCircle } from 'react-icons/hi';
import { Modal, TextInput, Button, Group, Textarea } from '@mantine/core';
import CommentCard from './CommentCard';
import GroupCard from './GroupCard';
import { FaRegSmile, FaPaperclip, FaPaperPlane } from 'react-icons/fa';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import Avatar from '@/assets/Ellipse_593.png';

const Community = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  const comments = [
    { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.' },
    { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.' },
    { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.' },
    { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.' },
    { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.' },
    { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.' },
    { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.' },
    { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.' },
    { name: 'Adedimeji Ajayi', date: '3 days ago', message: 'This class will give you all the insights for great and successful user research you will learn the basics of UX research and come up.' },
  ];

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

  const handleAttachmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAttachments([...attachments, ...Array.from(event.target.files)]);
    }
  };

  const handleSend = () => {
    // Implement the send functionality
    console.log('Message:', message);
    console.log('Attachments:', attachments);
    // Clear the message and attachments
    setMessage('');
    setAttachments([]);
    closeModal();
  };

  return (
    <>
      <div className="flex md:flex-col gap-8">
        <div className="w-[70%] md:w-full overflow-y-scroll" style={{ maxHeight: 'calc(100vh - 120px)' }}>
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
            <button className='bg-brand rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-white'>All</button>
            <button className='bg-gray rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2'>
              <Image src={Msg} alt={'text icon'} width={15} height={15} className='w-50px h-10px' />Discussion
            </button>
            <button className='bg-gray rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2'>
              <Image src={Satellite} alt={'Satellite icon'} width={15} height={15} className='w-50px h-10px' />Random
            </button>
            <button className='bg-gray rounded-2xl md:px-2 md:text-[13px] px-6 h-8 font-cocogoose text-black flex items-center justify-center gap-2'>
              <Image src={Pin} alt={'Pin icon'} width={15} height={15} className='w-50px h-10px' />Pinned
            </button>
          </div>

          <div className='flex flex-col gap-4'>
            {comments.map((comment, i) => (
              <CommentCard
                key={i}
                name={comment.name}
                date={comment.date}
                message={comment.message}
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

      <Modal
        opened={modalIsOpen}
        onClose={closeModal}
        centered
        padding="md"
      >
            <div className="flex items-center gap-1 mb-4">
            <Image src={Avatar} alt={''} width={30} height={30} />
                        <h2 className='text-black font-semibold text-base'>Adedimeji Ajayi</h2>
                        <p className='text-base text-gray-10 font-semibold'>Posting in</p>
                        <h2 className='text-black font-semibold text-base'>Brand Me</h2>
                        <p className='text-base text-gray-10 font-semibold'>Discussion</p>
            </div>
        <div className="border-none rounded-md">
          
          <div className="">
            <Textarea
              resize="vertical"
              label="Title"
              placeholder="Write Something..."
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border-white text-brand font-cocogoose shadow-none focus:border-white w-full"
            />
          </div>
          <div className="flex justify-between items-center mt-10">
          <div className="flex items-center gap-2">
            <button className="p-1 bg-gray-10 rounded-full" onClick={() => setShowEmojiPicker(!showEmojiPicker)}><FaRegSmile /></button>
            <input
              type="file"
              id="attachment"
              style={{ display: 'none' }}
              onChange={handleAttachmentChange}
              multiple
              className='border-none'
            />
            <label htmlFor="attachment">
              <button className="p-1 bg-gray-10 rounded"><FaPaperclip /></button>
            </label>
          </div>
          {showEmojiPicker && (
            <div className="mb-4">
              <EmojiPicker onEmojiClick={addEmoji} />
            </div>
          )}
          <div className="flex items-center gap-6">
            <button className='text-black text-base font-normal'>Cancel</button>
            <button className="bg-light-blue flex items-center h-8 w-20 rounded justify-center text-brand text-lg font-bold" onClick={handleSend}> Post</button>
            </div>
            </div>
        </div>

      </Modal>
    </>
  );
};

export default Community;