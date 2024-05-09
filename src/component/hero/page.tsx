import Link from "next/link";
import { FaHandPointDown } from "react-icons/fa6";
import Button from "../button/page";
import { ReactNode } from "react";
import { Url } from "url";
import { BiArrowFromTop, BiDownArrow, BiUpArrow } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";

interface heroProps {
  header: ReactNode;
  sub: ReactNode;
  secondHeading: ReactNode;
  CTA1: ReactNode;
  CTA2: ReactNode;
  OC: string;
  OC1: string;
}

const HeroSection: React.FC<heroProps> = ({
  header,
  sub,
  CTA1,
  CTA2,
  OC,
  OC1,
  secondHeading,
}) => {
  return (
    <section id="hero" className="mx-auto mt-14 mb-20 bg-secondary h-fit flex flex-col justify-start items-start text-start pt-10 text-white relative">
      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="font-mono font-bold text-acc text-lg">
              {secondHeading}
            </h2>
            <h1 className="text-8xl animate-typing font-bold ">{header}</h1>
            <h3 className="my-6   text-xl">{sub}</h3>
            <div className="my-10">
              <Link
                className="p-56 bg-accent text-background font-medium rounded-md py-3 px-4 lg:mb-0 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-rose-500  hover:scale-110"
                href={OC}
              >
                {CTA1}
              </Link>
              <Link
                className="p-56 border-2 animate-bounce  border-accent text-accent font-medium rounded-md mx-2 py-3 px-4 transition duration-300 ease-in-out transform hover:-translate-y-1  hover:bg-accent hover:text-background   hover:scale-110"
                href={OC1}
              >
                {CTA2}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="self-end">
        <div className="animate-bounce w-14 h-14 justify-center text-2xl border-4 text-primary border-primary rounded-full flex items-center">
          <Link className="" href='#contact'>
        <FaHandPointDown className="text-3xl " /></Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
