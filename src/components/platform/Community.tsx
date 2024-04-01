import React from 'react';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';
import { Avatar, InputAdornment } from '@mui/material';
import Image from 'next/image';
import ProfileImg from '@/assets/Rectangle_2001.png';
// import Text from '@/assets/text.png';
import Satellite from '@/assets/satellite.png';
import Pin from '@/assets/pin.png';
import { Box, Card, Inset, Text, Strong } from '@radix-ui/themes';

const CustomTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        border: '1px solid gray',
        background: 'white',
    },
});


const Community = () => {
    return (
        <>
            <div className="flex gap-8">
                <div className="w-[70%]">
                    <CustomTextField
                        variant="standard"
                        placeholder="Write something..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div className="flex mt-10 gap-6 items-center">
                        <button className='bg-brand rounded-xl px-4s h-10 text-white'>All</button>
                        <button className='bg-gray rounded-xl px-4s h-10 text-black flex items-center justify-center gap-2'><Avatar src='/assets/text.png' alt={'text icon'} className='w-20px h-20px' />Discussion</button>
                        <button className='bg-gray rounded-xl px-4s h-10 text-black flex items-center justify-center gap-2'><Avatar src='/assets/satellite.png' alt={'Satellite icon'} className='w-20px h-20px' />Random</button>
                        <button className='bg-gray rounded-xl px-4s h-10 text-black flex items-center justify-center gap-2'><Avatar src='/assets/pin.png' alt={'Pin icon'} className='w-20px h-20px' />Pinned</button>

                    </div>
                </div>
                <div className="w-[30%]">
                    <Box maxWidth="240px">
                        <Card size="2">
                            <Inset clip="padding-box" side="top" pb="current">
                                <Image
                                    src={ProfileImg}
                                    alt="Bold typography"
                                    style={{
                                        display: 'block',
                                        objectFit: 'cover',
                                        width: '100%',
                                        height: 140,
                                        backgroundColor: 'var(--gray-5)',
                                    }}
                                />
                            </Inset>
                            <Text as="p" size="3">
                                <Strong>Typography</Strong> is the art and technique of arranging type to
                                make written language legible, readable and appealing when displayed.
                            </Text>
                        </Card>
                    </Box>
                </div>
            </div>
        </>
    );
};

export default Community;