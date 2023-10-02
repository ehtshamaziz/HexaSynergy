import { Feature } from "@/types/feature";
import { IWork, Testimonial } from "@/types/testimonial";
import { Blog } from "@/types/blog";


export const clientData:IWork[]= [
    {
      "name": "Projects Delivered",
      "amount": 200
    },
    {
      "name": "Tech experts On-board",
      "amount": 100
    },
    {
      "name": "Employees",
      "amount": 100
    },
    {
      "name": "Satisfied Customers",
      "amount": 500
    }
  ]

export const approachData: Feature[] = [
  {
    id: 1,
    icon2: "/images/approach/innovation.png",
    title: "Innovation at the Core",
    paragraph:
      "Creating innovative solutions that advance technology, boost competitiveness, and prioritize quality assurance."
  },
  {
    id: 1,
    icon2: "/images/approach/synergy.png",
    title: "Power of Synergy",
    paragraph:
      "Embracing teamwork and diverse perspectives, we collaborate to bring the best to our clients, while promoting inclusivity and diversity within our team."
  },
  {
    id: 1,
    icon2: "/images/approach/customer-centric.png",
    title: "Customer-Centric Philosophy",
    paragraph:
      "Placing our clients' needs at the forefront, we craft solutions that align with their goals and educate them on industry insights and best practices."
  },
  {
    id: 1,
    icon2: "/images/approach/ethics.png",
    title: "Upholding Ethics ",
    paragraph:
      " Honesty, transparency, ethical practices, and a strong commitment to data security and privacy are the cornerstones of our company culture."
  },
  {
    id: 1,
    icon2: "/images/approach/reliability.png",
    title: "Unwavering Reliability",
    paragraph:
      "Building robust, high-performing software that remains adaptable to changing technologies and market demands, while ensuring top-notch quality assurance."
  },
  {
    id: 1,
    icon2: "/images/approach/sustainability.png",
    title: "Driving Sustainability",
    paragraph:
      
"Aligning with our core mission of providing technological solutions for a more sustainable future, benefiting our customers and community."
  },
];

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Abdurehman",
    designation: "Founder @KitchensConsultant",
    content:
      "They did an excellent job building our website. It's not only visually impressive but also functional. It's boosted our online presence and brought in new clients. Thanks to HexaSynergy for their expertise and dedication!",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Working with HexaSynergy has been a fantastic experience. They consistently go above and beyond to deliver outstanding results. We couldn't be more pleased with their work. We look forward to many more successful collaborations in the future",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Hammad Shoukat",
    designation: "Founder @HST Services",
    content:
      "We're thrilled with the work HexaSynergy has done for us. The application not only looks fantastic but also makes it incredibly easy for our customers to engage with our services. We couldn't be happier with the result!",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

export const servicesData: Feature[] = [
  {
    id: 1,
    icon2: "/images/services/responsive-gradient.png",
    title: "Responsive Web Solutions",
    paragraph:
      "Develop modern and scalable websites with our Responsive Web Solutions. Our front-end and back-end expertise ensures your online presence is visually appealing and adaptable.",
  },
  {
    id: 1,
    icon2: "/images/services/app-development-gradient.png",
    title: "Mobile App Development",
    paragraph:
      "Transform concepts into dynamic mobile experiences with our Mobile App Development services. Our expertise spans iOS and Android platforms, ensuring high performance, security, and functionality.",
  },
  {
    id: 1,
    icon2: "/images/services/user-interface-gradient.png",
    title: "UI/UX Design",
    paragraph:
      "Craft engaging user experiences with our UI/UX design services. From wireframes to prototypes, we prioritize usability, accessibility, and aesthetics.",
  },
  {
    id: 1,
    icon2: "/images/services/seo-gradient.png",
    title: "Search Engine Optimization (SEO)",
    paragraph:
      " Enhance your online visibility with our Search Engine Optimization (SEO) services. We optimize content and technical aspects to boost your brand's rankings and organic reach.",
  },
  {
    id: 1,
    icon2: "/images/services/marketing-gradient.png",
    title: "Strategic Digital Marketing",
    paragraph:
      "Amplify your reach with Strategic Digital Marketing solutions. From tailored social media campaigns to engaging content strategies, we drive engagement and conversions.",
  },
  {
    id: 1,
    icon2: "/images/services/consultation-gradient.png",
    title: "Software Consultation",
    paragraph:
      "Gain expert insights and guidance with our Software Consultation services. Navigate complex technology decisions and optimize existing systems for enhanced efficiency.",
  },
];

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Hello",
     data: [
        { heading:"Hello1",paragraph:"para"}
    ],
    image:"/images/blog/blog-01.jpg",
    // data: {
    //     para1: "loream40",
    //     image1:"/images/blog/blog-01.jpg",
    //     para2: "",
    //     image2:"",
    //     para3: "",
    //     image3:"",
    // },
    // image: "",
    author: {
      name: "Ehtsham Aziz",
      image: "/images/blog/author-01.png",
      designation:""
    },
    publishDate:"" 
  },
    {
    id: 2,
    title: "hello2",
    data: [
        { heading:"Hello2",paragraph:"para"}
      ],
    image:"/images/blog/blog-02.jpg",
    //   data: {
    //     para1: "lorem60",
    //     image1:"/images/blog/blog-02.jpg",
    //     para2: "",
    //     image2:"",
    //     para3: "",
    //     image3:"",
    // },
    // image: "",
    author: {
      name: "Humza Irfan",
      image: "/images/blog/author-02.png",
      designation:""
    },
    publishDate:"" 
  },
      {
    id: 3,
        title: "hello3",
     data: [
        { heading:"Hello3",paragraph:"para"}
        ],
     image:"/images/blog/blog-03.jpg",
    // data: {
    //     para1: "lorem50",
    //     image1:"/images/blog/blog-03.jpg",
    //     para2: "",
    //     image2:"",
    //     para3: "",
    //     image3:"",
    // },
    // image: "",
    author: {
      name: "Sardar Waqas",
      image: "/images/blog/author-03.png",
      designation:""
    },
    publishDate:"" 
 },
] 