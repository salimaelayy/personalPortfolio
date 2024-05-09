import Link from "next/link";
import { FaHandPointDown } from "react-icons/fa6";
import Button from "../button/page";
import { ReactNode } from "react";
import { Url } from "url";
import Image from "next/image";

interface heroProps {
  header: ReactNode;
  sub: ReactNode;
  CTA:ReactNode;
  OC:string;
}

const Hero: React.FC<heroProps> = ({header,sub,CTA,OC}) => {
    return (
      <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-start lg:col-span-7 text-left">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Building digital <br /> products &amp; brands.
          </h1>

          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            This free and open-source landing page template was built using the utility classes from{' '}
            <a target="_blank" className="hover:underline">
              Tailwind CSS
            </a>{' '}
            and based on the components from the{' '}
            <a href="#/" className="hover:underline" target="_blank">
              Flowbite Library
            </a>{' '}
            and the{' '}
            <a href="https://flowbite.com/blocks/" target="_blank" className="hover:underline">
              Blocks System
            </a>
            .
          </p>

          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href=""
              target="_blank"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              View on GitHub
            </a>

            <a
              href=""
              target="_blank"
              className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Get Figma file
            </a>
          </div>
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src="https://demo.themesberg.com/landwind/images/hero.png" alt="hero image" />
        </div>
      </div>
    </section>
      );
    };

export default Hero;