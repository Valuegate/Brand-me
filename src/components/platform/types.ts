

export interface iCourse {
    image: string;
    name: string;
    description: string;
    progress: number;
    details: iCourseDetails;
}

export interface iCourseDetails {
    videos: iVideoData[];
    currentVideo: number;
    quizDone: boolean;
}


export interface iVideoData {
    name: string;
    description: string;
    duration: string;
    complete: boolean;
    video: string;
}