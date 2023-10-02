export type Testimonial = {
  id: number;
  name: string;
  designation: string;
  content: string;
  image: string;
  star: number;
};

export interface IWork {
  name: string;
  amount: number;
}