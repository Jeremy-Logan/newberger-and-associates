import { ProjectsPageProjects } from '@components/ProjectsPageProjects'
import projectList from '../data/projectList.json'
import Head from 'next/head'
import { motion }from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {

    return(<>
    <Head>
				<title>Newberger & Associates | Projects</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
            <main>
            <motion.div initial={{opacity:0.2}} animate={{opacity: 1}} className='relative h-[60vh] z-0 bg-[#322121] mb-[40vh]'>
					<Image
						src='v1628109814/Newberger%20and%20Associates/schuh-02_oybmuz.jpg'
						layout='fill'
						objectFit='cover'
						className='opacity-70'
						placeholder='blur'
						blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1620327405/Newberger%20and%20Associates/schuh-02_oybmuz.jpg'
					/>

					<div className='absolute pt-24 pl-24 w-[70vw] z-10 text-white'>
						<motion.h1 initial={{opacity: 0.2, translateY: -300}} animate={{opacity: 1, translateY: 0}} className='font-serif text-4xl font-bold mb-8'>
							<Link href='/'>Newberger & Associates</Link>
						</motion.h1>
						<motion.h2 initial={{opacity: 0.2, translateX: -300 }} animate={{opacity: 1, translateX: 0}} className='font-serif text-8xl font-bold ml-8'>
							Featured Projects
						</motion.h2>
					</div>
					<motion.div initial={{opacity: 0.2, translateX: 300}} animate={{opacity: 1, translateX: 0}} transition={{  duration: 0.5}} className='absolute h-[70vh] w-[40vw] top-40 right-48 bg-[]'>
						<Image
							src='v1628109812/Newberger%20and%20Associates/schuh-06_ktz6vd.jpg'
							layout='fill'
							objectFit='cover'
							placeholder='blur'
						blurDataURL='https://res.cloudinary.com/the-color-mill/image/upload/t_placeholder/v1620326973/Newberger%20and%20Associates/schuh-06_ktz6vd.jpg'
						/>
					</motion.div>
				</motion.div>
                <div className='mx-[10vw] mb-24 '>
                <h3 className='text-6xl font-serif font-bold text-gray-500'>Newberger & Associates</h3>
                <h4 className='text-3xl font-serif  leading-relaxed mt-8'>Our philosophy is founded on the relationship between the structure and the land it occupies. We focus on the unique elements of the environment while also considering the sustainable nature of the building itself. Our expertise is perfectly suited to guiding you through this process and finding the most natural fit for your needs.</h4></div>
    <ProjectsPageProjects {...projectList}/></main>
    </>)
}