import { Children } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
    imageUrl: StaticImageData;
    title: string;
 
}

const ProjectCard: React.FC<CardProps> = ({imageUrl,title}) => {
    return (
        <div className=" rounded-lg">
                <div className="mb-4 ">
                <Image src={imageUrl} alt={title} width={500} height={500} className="mb-4 border border-white" />
                    <span className="border border-white px-2 py-1 rounded-md mr-2">Web Design</span>
                    <span className="border border-white px-2 py-1 rounded-md mr-2">Development</span>
                    <Link href={""} className=" text-background bg-accent hover:text-white hover:bg-accent hover:border-none mt-2 px-4 py-2 rounded-md mr-2">View On Github</Link>
                </div>
            </div>
    );
}
export default ProjectCard