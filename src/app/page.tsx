
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import HeroSection from "../component/hero/page";
import Navbar from "../component/navbar/page";
import { SiGmail } from "react-icons/si";
import Image from 'next/image'
import img from '@/assets/Salima.png'
import projectimg1 from '@/assets/project1.webp'
import projectimg2 from '@/assets/project2.webp'
import projectimg3 from '@/assets/project3.webp'
import projectimg4 from '@/assets/project4.webp'
import Footer from "@/component/footer/page";
import ProjectCard from "@/component/project_card";
import PreFooter from "@/component/prefooter/page";
import Link from "next/link";
import CForm from "@/component/ContactForm/form";

export default function Home() {
    return (
        <div className="bg-secondary">
            <div className="container  mx-auto text-white">
                <Navbar />
                <div>
                    <HeroSection  secondHeading={<> Salam, I&apos;m Salima 👋🏻</>} sub={<> I am skilled at developing intuitive user interfaces in that will suit your needs. I have a talent for transforming your vision into innovative and engaging digital realities.</>} OC1="#projects" OC="#contact" header={<><span className="text-accent">FullStack </span>Developer</>}CTA1={<>Let&apos;s Work Toghether</>} CTA2={<>Browse Projects</>} />
                    {/* <section>  
                    <TechnologyTabs/>
                    </section> */}
                    <section id="projects" className=" text-center mb-12">
                        <h2 className="text-6xl text-primary mb-16 text-start font-semibold">Projects<span className="text-accent">.</span></h2>
                        <div className="grid grid-cols-3 gap-8">
                            <ProjectCard imageUrl={projectimg1} title="first project" />
                            <ProjectCard imageUrl={projectimg2} title="second project" />
                            <ProjectCard imageUrl={projectimg3} title="third project" />
                            <ProjectCard imageUrl={projectimg4} title="fourth project" />
                            <ProjectCard imageUrl={projectimg3} title="third project" />
                            <ProjectCard imageUrl={projectimg4} title="fourth project" />
                        </div>
                    </section>
                    <section id="about-me" className="text-center">
                        <div className="mr-4  mb-20 flex items-center justify-between">
                            <h2 className=" text-primary text-6xl font-bold ">My Story<span className="text-accent">.</span> </h2>
                            {/* <ul className="flex space-x-4">
                                <li className="border rounded-full border-accent text-accent p-1"><Link target="_blank" href="https://www.linkedin.com/in/salima-el-ayyachi-fullstack-mern-developer/" ><FaLinkedin  /></Link></li>
                                <li className="border rounded-full  border-accent text-accent  p-1"><Link target="_blank" href="https://github.com/salimaelayy" ><FaGithub /></Link></li>
                                <li className="border rounded-full border-accent text-accent p-1"> <Link href="mailto:salimaelayyachi@gmail.com"  ><SiGmail /></Link></li>
                            </ul> */}
                        </div>
                        <div className="flex">
                            <div className="w-1/2 text-left leading-9 tracking-widest text-base mr-4">
                                <p> I&apos;sm <span className="font-medium">Salima El Ayyachi</span>, I specialize in the MERN stack to design dynamic web applications. I am skilled at creating robust APIs in the backend and developing intuitive user interfaces in the frontend. I have a talent for transforming your vision into innovative and engaging digital realities.</p>
                                <br/>
                                <p>In a recent project, I led the development of <Link href="https://github.com/salimaelayy/TRACKIFY"><span className="font-mono font-bold text-lg">Trackify</span></Link>, a task management application using the MERN stack. I started by designing a scalable database schema with role-based access. After designing the application interface in Figma, I created robust APIs. I then implemented the user interfaces and connected the backend with the frontend. The result was Trackify, a visually engaging and high-performing application, demonstrating the success of the task at hand.</p>
                            </div>
                            <div className="w-1/2 flex justify-end">
                                <div className="flex flex-col">
                                <Image src={img} alt="" />
                                </div>
                            </div>
                        </div>

                        {/* <table className="w-full mt-10 mb-10">
                            <thead>
                                <tr>
                                    <th className="w-1/3 p-4 border"><span className="font-mono">Partners</span></th>
                                    <th className="w-1/3 p-4 border"><span className="font-mono">Partners</span></th>
                                    <th className="w-1/3 p-4 border"><span className="font-mono">Partners</span></th>
                                </tr>
                            </thead>
                        </table> */}
                    </section>
                </div>
                    {/* contact section */}
                    <section id="contact" className="my-20">
                        <h2 className="text-6xl text-primary text-start font-semibold mb-6">Contact<span className="text-accent">.</span></h2>
                        <div className="grid grid-cols-2">
                            <div className="col-span-1">
                                {/* <h3 className="font-bold mb-6">How to Contact Me</h3> */}
                                <p className="text-lg text-left mb-10">Feel free to reach out to us through any of the following methods:</p>
                                <div className="flex flex-row space-x-4 my-10">
                                    <a className="border rounded-full border-accent text-accent p-1" href="https://www.linkedin.com/in/salima-el-ayyachi-fullstack-mern-developer/" target="_blank"><FaLinkedin /></a>
                                    <a className="border rounded-full border-accent text-accent p-1" href="https://github.com/salimaelayy" target="_blank"><FaGithub /></a>
                                    <a className="border rounded-full border-accent text-accent p-1" href="mailto:salimaelayyachi@gmail.com"><SiGmail /></a>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <h3 className="font-semibold text-2xl mb-6">Get in Touch</h3>
                                <CForm />
                            </div>
                        </div>
                    </section>

                <PreFooter />
                <Footer />
            </div>
        </div>
    );
}
