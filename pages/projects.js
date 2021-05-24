import { ProjectsPageProjects } from '@components/ProjectsPageProjects'
import projectList from '../data/projectList.json'
import Head from 'next/head'
import { motion }from 'framer-motion'
import Image from 'next/image'

export default function Projects() {

    return(<>
    <Head>
				<title>Newberger & Associates | Projects</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
            <main>
            <motion.div initial={{opacity:0.2}} animate={{opacity: 1}} className='relative h-[60vh] z-0 bg-[#322121] mb-[40vh]'>
					<Image
						src='v1620327405/Newberger%20and%20Associates/brotherton-06_ivbdxi.jpg'
						layout='fill'
						objectFit='cover'
						className='opacity-70'
					/>

					<div className='absolute pt-24 pl-24 w-[70vw] z-10 text-white'>
						<motion.h1 initial={{opacity: 0.2, translateY: -300}} animate={{opacity: 1, translateY: 0}} className='font-serif text-4xl font-bold mb-8'>
							Newberger & Associates
						</motion.h1>
						<motion.h2 initial={{opacity: 0.2, translateX: -300 }} animate={{opacity: 1, translateX: 0}} className='font-serif text-8xl font-bold ml-8'>
							Selected Projects
						</motion.h2>
					</div>
					<motion.div initial={{opacity: 0.2, translateX: 300}} animate={{opacity: 1, translateX: 0}} transition={{  duration: 0.5}} className='absolute h-[70vh] w-[40vw] top-40 right-48 bg-[]'>
						<Image
							src='v1620326973/Newberger%20and%20Associates/braverman-01_g5m0zc.jpg'
							layout='fill'
							objectFit='cover'
						/>
					</motion.div>
				</motion.div>
                <div className='mx-[10vw] mb-24 '>
                <h3 className='text-6xl font-serif font-bold text-gray-500'>Newberger & Associates</h3>
                <h4 className='text-6xl font-serif font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4></div>
    <ProjectsPageProjects {...projectList}/></main>
    </>)
}