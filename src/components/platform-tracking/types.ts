export interface iCourse {
  name: string;
  modules: number;
  activation: number | string;
  completion: number | string;
  views: number | string;
  active: boolean;
}

export interface iPost {
  id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    image: string | null;
  };
  comments: {
    user: {
      id: number;
      first_name: string;
      last_name: string;
      image: string | null;
    };
    id: number;
    post: number;
    content: string;
    created_at: string;
  }[];
  likes: {
    user: {
      id: number;
      first_name: string;
      last_name: string;
      image: string | null;
    };
    id: number;
    post: number;
  }[];
  content: string;
  created_at: string;
}
