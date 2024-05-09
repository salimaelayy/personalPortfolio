"use client"
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';
import logo_light from '../../assets/icon-original.png'
import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`font-mono text-white py-4 ${scrolled ? 'bg-primary font-bold' : 'bg-secondary'} transition duration-300 ${scrolled ? 'shadow-2xl  fixed top-0 left-0 right-0 z-50' : 'sticky top-0 z-40'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <span className="text-xl font-semibold"></span>
                    <Image width={30} height={30} src={logo_light} alt='' />
                </div>
                <div className="hidden font-semibold md:flex space-x-4">
                    <Link href="#hero" className="transition duration-300 ease-in-out hover:text-accent">Home</Link>
                    <Link href="#projects" className="transition duration-300 ease-in-out hover:text-accent">Projects</Link>
                    <Link href="#about-me" className="transition duration-300 ease-in-out hover:text-accent">About Me</Link>
                    <Link href="#contact" className="transition duration-300 ease-in-out hover:text-accent">Contact</Link>
                </div>
                <ul className="flex space-x-4">
                    <li className="border rounded-full border-accent text-accent p-1"><Link target="_blank" href="https://www.linkedin.com/in/salima-el-ayyachi-fullstack-mern-developer/"><FaLinkedin /></Link></li>
                    <li className="border-2 rounded-full  border-accent text-accent  p-1"><Link target="_blank" href="https://github.com/salimaelayy"><FaGithub /></Link></li>
                    <li className="border rounded-full border-accent text-accent p-1"> <Link href="mailto:salimaelayyachi@gmail.com"><SiGmail /></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;