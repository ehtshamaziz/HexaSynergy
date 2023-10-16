export type Testimonial = {
  id: number;
  name: string;
  designation?: string;
  content: string;
  image: string;
  star: number;
  location?: string;
};

export interface IWork {
  name: string;
  amount: number;
}
