import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const PreFooter = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 pt-6">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-7xl text-primary font-bold mb-6">Let&apos;s Work-Together</h2>
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col items-end">
          
          <a href="https://www.linkedin.com/in/salima-el-ayyachi-fullstack-mern-developer/" target="_blank" className="  bg-accent py-2 px-4 rounded-lg hover:bg-rose-600 transition duration-300 w-60"><span className="bg-accent py-2 px-4 rounded-lg hover:bg-rose-600 transition duration-300 w-60">Visit My LinkedIn</span>
</a>
          <Link href="/#contact" className="text-accent border-accent border py-2 my-2 px-4 rounded-lg mb-4 hover:bg-primary hover:border-none hover:text-secondary transition duration-300 w-60">
              Contact Me
          </Link>

        </div>
      </div>
    </>
  );
};
export default PreFooter;
