import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import { Social } from "@/types/socail";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const socialArray: Social[] = [
  { id: 1, name: "Instagram", href: "https://www.instagram.com/hexasynergyofficial/", logo: <FaInstagram /> },
  { id: 2, name: "Twitter", href: "/", logo: <FaTwitter /> },
  { id: 3, name: "LinkedIn", href: "https://www.linkedin.com/company/hexasynergy/", logo: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-16 lg:pt-16"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="flex flex-wrap sm:flex-nowrap">
            <div className="w-full  px-4 sm:w-auto sm:basis-[30%]">
              <div className="mb-12 flex flex-col items-center  text-center sm:items-center sm:text-left lg:mb-16">
                <Link href="/" className="mb-8 inline-block text-lg">
                  <Image
                    src="/images/logo/logo2.png"
                    alt="Hexa Synergy Logo"
                    width={180}
                    height={180}
                  />
                </Link>
                <div className="flex items-center">
                  {socialArray.map((item) => (
                    <a
                      key={`footer-social-4${item.id}`}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-6 text-lg text-[#CED3F6] hover:text-primary"
                    >
                      {item.logo}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-auto sm:flex-1">
              <div className="mb-12 text-center sm:text-left lg:mb-16">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:mb-10">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="/blog"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Blog
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="/contact"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-auto sm:flex-1">
              <div className="mb-12 text-center sm:text-left lg:mb-16">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:mb-10">
                  Terms
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      TOS
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium text-body-color hover:text-primary"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-auto sm:flex-1">
              <div className="mb-12 text-center sm:text-left lg:mb-16">
                <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:mb-10">
                  Contact Info
                </h2>
                <ul className="mdCustom:px-[10%]">
                  <li className="mb-4 flex items-center text-left text-base font-medium text-body-color">
                    <span className="text-lg text-primary">
                      <FiMail />
                    </span>
                    <span className="ml-3">support@hexasynergy.com</span>
                  </li>
                  <li className="mb-4 flex items-center text-left text-base font-medium text-body-color">
                    <span className="text-lg text-primary">
                      <FiPhoneCall />
                    </span>
                    <span className="ml-3">+92 333-510946</span>
                  </li>
                  <li className="mb-4 flex items-center text-left text-base font-medium text-body-color">
                    <span className="text-xl text-primary mdCustom:text-lg">
                      <TfiLocationPin />
                    </span>
                    <span className="ml-3">
                      Office# 14, First Floor, Mujahid Plaza, Blue Area
                      Islamabad.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 py-8">
          <div className="container">
            <p className="text-center text-base text-body-color dark:text-white">
              Copyright © 2023{" "}
              <a href="/" className="font-bold text-primary">
                Hexa Synergy
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>

        <div className="absolute left-0 bottom-24 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 top-14 z-10 rotate-180">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
