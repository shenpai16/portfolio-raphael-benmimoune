import { useState } from 'react';
import RoundedCard from '../ui/RoundedCard';
import ProjectModal from './ProjectModal';

type ProjectCardProps = {
  title: string;
  image: string;
  tooltip: string;
  slides: { src: string; caption: string}[];
};

export default function ProjectCard({title, image, slides}: ProjectCardProps) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div onClick={() => setOpen(true)} className='cursor-pointer'>
                <RoundedCard className='group relative overflow-hidden'>
                    <h1 className='text-center text-transparent bg-clip-text bg-gradient-to-r
                    from-blue-500 to-blue-200 font-bold'>
                        {title}
                    </h1>

                    <div className='flex justify-center gap-6 mt-4'>
                        <img src={image} alt={title} className='w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105' />
                    </div>

                    <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400
                    opacity-0 group-hover:opacity-90 flex items-center justify-center transition-opacity duration-300'>
                        <span className='text-white text-lg font-bold'>Clique pour en savoir plus</span>
                    </div>
                </RoundedCard>

                 {/* Modal */}
                {open && <ProjectModal slides={slides} onClose={() => setOpen(false)} />}
            </div>
        </>
    );

}