import fs from 'fs';
import path from 'path';
// import ffmpeg from 'fluent-ffmpeg';


export function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  }

  // export async function generateThumbnail(file: File)  {
  //   const tempPath = path.join(process.cwd(), 'temp', file.name);
  //   await new Promise((resolve, reject) => {
  //     ffmpeg()
  //      .input(file.path)
  //      .outputOptions('-vf "fps=10,scale=320:-1:flags=lanczos"')
  //      .output(tempPath)
  //      .on('end', resolve)
  //      .on('error', reject)
  //      .run();
  //   });
  //   // Now you have a thumbnail saved at tempPath
  //   // You can display it using an <img> tag
  // };
