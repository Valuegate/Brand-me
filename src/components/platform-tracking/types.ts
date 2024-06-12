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
  };
  comments: any[];
  likes: {
    user: {
      id: number;
      first_name: string;
    };
    id: number;
    post: number;
  }[];
  content: string;
  created_at: string;
}

