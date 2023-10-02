type Author = {
  name: string;
  image: string;
  designation: string;
};

type blog = {
  heading: string,
  paragraph:string,
}

export type Blog = {
  id: number;
  title: string;
  data: blog[];
  image: string;
  author: Author;
  tags?: string[];
  publishDate: string;
};
