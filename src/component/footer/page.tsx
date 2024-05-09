import Link from "next/link";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="mr-4 pt-10 ml-4 pb-20 flex border-t items-center justify-between">
        <h2 className="text-base"><span className="font-bold text-primary">Salima El Ayyachi </span>&copy;copyright 2024 reserved</h2>
        <ul className="flex space-x-4">
            <li className="border rounded-full border-accent text-accent p-1"><Link target="_blank" href="https://www.linkedin.com/in/salima-el-ayyachi-fullstack-mern-developer/" ><FaLinkedin  /></Link></li>
            <li className="border rounded-full  border-accent text-accent  p-1"><Link target="_blank" href="https://github.com/salimaelayy" ><FaGithub /></Link></li>
            <li className="border rounded-full border-accent text-accent p-1"> <Link href="mailto:salimaelayyachi@gmail.com"  ><SiGmail /></Link></li>
        </ul>
    </div>
    </>
  );
};

export default Footer;
