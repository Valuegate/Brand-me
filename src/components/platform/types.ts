

export type iCourse = {
    image: string;
    name: string;
    description: string;
    progress: number;
    details: iCourseDetails;
}

export type iCourseDetails = {
    videos: iVideoData[];
    currentVideo: number;
    quizDone: boolean;
}


export type iVideoData = {
    name: string;
    description: string;
    duration: string;
    complete: boolean;
    video: string;
}