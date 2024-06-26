export function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });
}

export function getVideoCover(file: File): Promise<Blob | null> {
  let seekTo = 0.5;
  console.log("getting video cover for file: ", file);
  return new Promise((resolve, reject) => {
    // load the file to a video player
    const videoPlayer = document.createElement("video");
    videoPlayer.setAttribute("src", URL.createObjectURL(file));
    videoPlayer.load();
    videoPlayer.addEventListener("error", (ex) => {
      reject(`error when loading video file ${ex.message}`);
    });

    // load metadata of the video to get video duration and dimensions
    videoPlayer.addEventListener("loadedmetadata", () => {
      // seek to user defined timestamp (in seconds) if possible
      if (videoPlayer.duration < seekTo) {
        reject("video is too short.");
        return;
      }

      // delay seeking or else 'seeked' event won't fire on Safari
      setTimeout(() => {
        videoPlayer.currentTime = seekTo;
      }, 200);

      // extract video thumbnail once seeking is complete
      videoPlayer.addEventListener("seeked", () => {
        console.log("video is now paused at %ss.", seekTo);
        // define a canvas to have the same dimension as the video
        const canvas = document.createElement("canvas");
        canvas.width = videoPlayer.videoWidth;
        canvas.height = videoPlayer.videoHeight;

        // draw the video frame to canvas
        const ctx = canvas.getContext("2d");
        ctx!.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);

        // create a blob from the canvas using toBlob
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject("Failed to generate video thumbnail.");
            } else {
              resolve(blob);
            }
          },
          "image/jpeg",
          0.75 /* quality */
        );
      });
    });
  });
}

